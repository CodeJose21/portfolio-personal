import { useEffect } from 'react';
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, Camera, Sparkles, ArrowUp } from 'lucide-react';
import { ContactDetails } from './components/ContactDetails';
import { personalPhoto } from './content/profile';
import { Navigation } from './components/Navigation';
import { Education } from './components/Education';
import { SectionHeading } from './components/SectionHeading';
import { translations } from './content/translations';
import { useAppSelector } from './store';

const skillIcons = [Code2, BrainCircuit, Sparkles];

export default function App() {
  const locale = useAppSelector(state => state.ui.locale);
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `Jose González Blanco | ${t.role}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.intro);
    try { localStorage.setItem('portfolio-locale', locale); } catch { /* Storage is optional. */ }
  }, [locale, t]);

  return <>
    <Navigation/>
    <main id="main">
      <section id="home" className="hero section">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/>{t.portfolio}</p><p className="hello">{t.hello} <span aria-hidden="true">↗</span></p><h1>Jose González<br/><span>Blanco.</span></h1><h2 className="role">{t.role}</h2><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button primary" href="mailto:josegonzb@gmail.com">{t.contact}<ArrowUpRight size={19}/></a><a className="text-link" href="#education">{t.discover}<ArrowDown size={17}/></a></div><ContactDetails/></div>
        <div className="portrait-wrap"><div className="portrait-frame"><img src="/jose-gonzalez.jpg" alt={t.portrait} width="600" height="670" fetchPriority="high"/><div className="portrait-label"><span className="status-dot"/> {t.portraitMotto}</div></div><div className="portrait-caption"><span>{t.portraitCaption}</span><Sparkles size={18}/></div><p className="photo-note">{t.photoCaption}</p></div>
        <div className="languages"><span className="language-label">{t.languageHeading}</span>{t.languages.map((language, i) => <div className="language" key={language}><span className="language-code">{['ES', 'EN', 'DE'][i]}</span><strong>{language}</strong><span>{t.levels[i]}</span></div>)}</div>
      </section>
      <section id="skills" className="section skills-section"><SectionHeading eyebrow={t.skillsEyebrow} title={t.skillsTitle} description={t.skillsIntro}/><div className="skill-grid">{t.skillTools.map((tools, i) => { const Icon = skillIcons[i]; return <article className="skill-card" key={i}><div className="skill-card-top"><Icon size={25}/><span>0{i + 1}</span></div><h3>{t.skillGroups[i]}</h3><p>{t.skillDescriptions[i]}</p><div className="tags">{tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>; })}</div><div className="focus-line"><span className="status-dot"/><strong>{t.focus}</strong><span>{t.focusText}</span><ArrowUpRight size={18}/></div></section>
      <Education/>
      <section id="soft-skills" className="section soft-section"><SectionHeading eyebrow={t.softEyebrow} title={t.softTitle}/><div className="soft-grid">{t.soft.map(([title, text], i) => <article className="soft-card" key={title}><span className="soft-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="personal" className="section personal-section"><div><p className="eyebrow">{t.personalEyebrow}</p><h2>{t.personalTitle}</h2><p>{t.personalText}</p><div className="personal-tags">{t.personalTags.map(tag => <span key={tag}>{tag}</span>)}</div></div><figure className="personal-photo">{personalPhoto ? <img src={personalPhoto} alt={t.personalPhoto} loading="lazy" width="640" height="480"/> : <div className="personal-photo-placeholder"><Camera size={32} aria-hidden="true"/><span>{t.personalPhotoPending}</span></div>}<figcaption>{t.personalPhoto}</figcaption></figure></section>
    </main>
    <footer className="footer"><a className="brand-mark" href="#home">jg<span>.</span></a><p>© {new Date().getFullYear()} Jose González Blanco<span>{t.footer}</span></p><a className="text-link" href="#home">{t.back}<ArrowUp size={17}/></a></footer>
  </>;
}
