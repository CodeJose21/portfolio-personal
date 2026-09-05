import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { sectionIds, translations } from '../content/translations';
import { locales, localeNames, setLocale, useAppDispatch, useAppSelector } from '../store';

export function Navigation() {
  const locale = useAppSelector(state => state.ui.locale);
  const dispatch = useAppDispatch();
  const t = translations[locale];
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    // Track the section crossing the reading line, including short final sections.
    const update = () => {
      const threshold = window.innerWidth < 760 ? 180 : 140;
      const current = [...sectionIds].reverse().find(id => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= threshold);
      setActive(current ?? 'home');
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="topbar">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Jose González Blanco"><span className="brand-mark">jg<span>.</span></span><span className="brand-name">JOSE GONZÁLEZ<span>FULL STACK & ML</span></span></a>
        <nav aria-label={t.navigationLabel}>{sectionIds.map((id, i) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined}>{t.nav[i]}</a>)}</nav>
        <div className="nav-actions"><div className="locale-switch" aria-label={t.languageLabel}>{locales.map(lang => <button key={lang} lang={lang} aria-label={localeNames[lang]} aria-pressed={locale === lang} onClick={() => dispatch(setLocale(lang))}>{lang.toUpperCase()}</button>)}</div><a className="contact-icon" href="mailto:josegonzb@gmail.com" aria-label={t.contact}><ArrowUpRight size={21}/></a></div>
      </div>
    </header>
  </>;
}
