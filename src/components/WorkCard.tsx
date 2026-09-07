import { Braces } from 'lucide-react';
import type { WorkEntry } from '../content/work';
import { cubeCopy } from '../content/cube';
import { useAppSelector } from '../store';
export function WorkCard({ entry, index }: {
    entry: WorkEntry;
    index: number;
}) {
    const locale = useAppSelector(state => state.ui.locale);
    const c = cubeCopy[locale];
    return <article className="work-card"><div className="work-card-heading"><span>{String(index + 1).padStart(2, '0')}</span>{!entry.title[locale] && <small>{c.pending}</small>}</div><h3>{entry.title[locale] || c.entryTitle}</h3><p className={!entry.description[locale] ? 'placeholder-copy' : ''}>{entry.description[locale] || c.description}</p><div className="technology-panel"><div className="technology-heading"><Braces size={21}/><span>{c.technologies}</span></div><div className="technology-tags">{entry.technologies.length ? entry.technologies.map(tech => <span key={tech}>{tech}</span>) : <span className="empty-tech">+ {c.pending}</span>}</div></div></article>;
}
