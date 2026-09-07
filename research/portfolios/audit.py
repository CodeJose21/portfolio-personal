"""Read-only survey of public portfolio homepages; never executes page scripts."""
import concurrent.futures, csv, datetime, html.parser, json, re, socket, time
import urllib.error, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path(__file__).parent
PATTERNS = {
    'projects': r'\b(projects?|proyectos?|projekte|selected work|my work|case stud(?:y|ies))\b',
    'about': r'\b(about me|about|sobre m[ií]|[üu]ber mich)\b',
    'contact': r'\b(contact|contacto|kontakt|get in touch|let.s talk|reach out)\b',
    'experience': r'\b(experience|experiencia|erfahrung|employment|work history)\b',
    'skills': r'\b(skills|habilidades|tech stack|technologies|toolbox|expertise)\b',
    'education': r'\b(education|educaci[oó]n|ausbildung|university|universidad|bachelor|degree)\b',
    'writing': r'\b(blog|articles|writing|publications|art[ií]culos)\b',
    'resume': r'\b(resume|résumé|curriculum|download cv|my cv|lebenslauf)\b',
    'testimonials': r'\b(testimonials|testimonios|what clients say)\b',
    'availability': r'\b(available for|open to work|hire me|freelance|freelancer)\b',
    'case_studies': r'\b(case stud(?:y|ies)|casos? de estudio|fallstudie)\b',
    'machine_learning': r'\b(machine learning|deep learning|computer vision|neural|pytorch|tensorflow|yolo)\b',
}

class Parser(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.skip = 0; self.texts = []; self.links = []; self.title = []
        self.in_title = False; self.headings = []; self.heading = None
        self.images = 0; self.no_alt = 0; self.viewport = False
        self.description = ''; self.lang = ''; self.h1 = 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ('script', 'style', 'noscript', 'template'): self.skip += 1
        if tag == 'title': self.in_title = True
        if tag in ('h1', 'h2', 'h3'): self.heading = []; self.h1 += tag == 'h1'
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if tag == 'img': self.images += 1; self.no_alt += 'alt' not in a
        if tag == 'html': self.lang = a.get('lang', '')
        if tag == 'meta':
            if a.get('name', '').lower() == 'viewport': self.viewport = True
            if a.get('name', '').lower() == 'description': self.description = a.get('content', '')
    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'noscript', 'template'): self.skip = max(0, self.skip-1)
        if tag == 'title': self.in_title = False
        if tag in ('h1', 'h2', 'h3') and self.heading is not None:
            self.headings.append(' '.join(self.heading)); self.heading = None
    def handle_data(self, value):
        value = ' '.join(value.split())
        if not value or self.skip: return
        if self.in_title: self.title.append(value)
        else: self.texts.append(value)
        if self.heading is not None: self.heading.append(value)

def inspect(entry):
    row = dict(entry); start = time.monotonic()
    try:
        req = urllib.request.Request(entry['url'], headers={'User-Agent': 'PortfolioResearch/1.0 (read-only homepage survey)', 'Accept': 'text/html'})
        with urllib.request.urlopen(req, timeout=9) as response:
            row.update(status=response.status, final_url=response.url, content_type=response.headers.get('Content-Type',''))
            raw = response.read(1_200_001)
            row['truncated'] = len(raw) > 1_200_000
            encoding = response.headers.get_content_charset() or 'utf-8'
            try: doc = raw[:1_200_000].decode(encoding, errors='replace')
            except LookupError: doc = raw[:1_200_000].decode('utf-8', errors='replace')
        p = Parser(); p.feed(doc)
        body = ' '.join(p.texts)
        row.update(title=' '.join(p.title), description=p.description, text_chars=len(body),
                   headings=p.headings[:30], image_count=p.images, images_missing_alt=p.no_alt,
                   lang=p.lang, viewport=p.viewport, h1_count=p.h1,
                   github=any('github.com/' in u for u in p.links),
                   linkedin=any('linkedin.com/' in u for u in p.links),
                   email=any(u.startswith('mailto:') for u in p.links),
                   features={k: bool(re.search(pattern, body, re.I)) for k, pattern in PATTERNS.items()},
                   possible_challenge=bool(re.search(r'just a moment|verify you are human|checking your browser|security checkpoint', ' '.join(p.title) + ' ' + body[:500], re.I)),
                   text=body[:16000])
    except urllib.error.HTTPError as e: row.update(status=e.code, error=str(e))
    except Exception as e: row.update(status=0, error=f'{type(e).__name__}: {e}')
    row['seconds'] = round(time.monotonic()-start, 2)
    return row

def main():
    source = (ROOT/'source-readme.md').read_text(encoding='utf-8')
    entries = [{'id':i+1,'name':m[0],'url':m[1], 'listing_note':m[2].strip()} for i,m in enumerate(re.findall(r'^- \[([^\]]+)\]\((https?://[^\s)]+)\)(.*)$',source,re.M))]
    (ROOT/'inventory.json').write_text(json.dumps(entries,ensure_ascii=False,indent=2),encoding='utf-8')
    print(f'Inventoried {len(entries)} entries, {len(set(e["url"] for e in entries))} distinct URL strings.',flush=True)
    previous = {}
    outfile=ROOT/'audit.jsonl'
    if outfile.exists():
        for line in outfile.read_text(encoding='utf-8').splitlines():
            row=json.loads(line); previous[row['id']]=row
    with outfile.open('a',encoding='utf-8') as out, concurrent.futures.ThreadPoolExecutor(max_workers=24) as pool:
        futures=[pool.submit(inspect,e) for e in entries if e['id'] not in previous]
        for future in concurrent.futures.as_completed(futures):
            row=future.result(); previous[row['id']]=row
            out.write(json.dumps(row,ensure_ascii=False)+'\n'); out.flush()
            if len(previous)%100==0: print(f'Checked {len(previous)}/{len(entries)}',flush=True)
    rows=sorted(previous.values(),key=lambda r:r['id'])
    usable=[r for r in rows if r.get('status')==200 and r.get('text_chars',0)>=200 and not r.get('possible_challenge')]
    summary={'checked_at_utc':datetime.datetime.now(datetime.timezone.utc).isoformat(), 'entries':len(entries), 'checked':len(rows),
             'unique_urls':len(set(e['url'] for e in entries)), 'http_200':sum(r.get('status')==200 for r in rows),
             'status_counts':{str(s):sum(r['status']==s for r in rows) for s in sorted(set(r['status'] for r in rows))},
             'usable_html':len(usable), 'features':{k:sum(r['features'][k] for r in usable) for k in PATTERNS},
             'links':{k:sum(r[k] for r in usable) for k in ('github','linkedin','email')},
             'metadata':{'missing_description':sum(not r['description'] for r in usable), 'missing_lang':sum(not r['lang'] for r in usable),'missing_viewport':sum(not r['viewport'] for r in usable)}}
    (ROOT/'summary.json').write_text(json.dumps(summary,indent=2),encoding='utf-8')
    fields=['id','name','url','listing_note','status','final_url','title','text_chars','possible_challenge','github','linkedin','email','error']+list(PATTERNS)
    with (ROOT/'inventario.csv').open('w',encoding='utf-8-sig',newline='') as file:
        writer=csv.DictWriter(file,fieldnames=fields,extrasaction='ignore'); writer.writeheader()
        for row in rows: writer.writerow({**row,**row.get('features',{})})
    print(json.dumps(summary,indent=2),flush=True)

if __name__=='__main__': main()
