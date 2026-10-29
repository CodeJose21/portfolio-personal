import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { CubePortfolio } from './components/CubePortfolio';
import { DiePips } from './components/DiePips';
import { translations } from './content/translations';
import { useLocationNavigation } from './hooks/useLocationNavigation';
import { locales, localeNames, setLocale, setView, useAppDispatch, useAppSelector } from './store';
import { cubeCopy } from './content/cube';
export default function App() {
    useLocationNavigation();
    const locale = useAppSelector(state => state.ui.locale);
    const dispatch = useAppDispatch();
    const t = translations[locale];
    const copy = cubeCopy[locale];
    const view = useAppSelector(state => state.ui.view);
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; }
        catch { return 'dark'; }
    });
    useEffect(() => {
        document.documentElement.lang = locale;
        document.title = `Jose González Blanco | ${t.introduction.role}`;
        document.querySelector('meta[name="description"]')?.setAttribute('content', t.introduction.description);
        try {
            localStorage.setItem('portfolio-locale', locale);
        }
        catch { /* Optional preference. */ }
    }, [locale, t]);
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try { localStorage.setItem('portfolio-theme', theme); }
        catch { /* Optional preference. */ }
    }, [theme]);
    return <>
        <a className="skip-link" href="#main">{t.common.skip}</a>
        <header className="site-header">
            <div className="brand"><DiePips value={6}/><span>JOSE GONZÁLEZ BLANCO<small>FULL STACK & MACHINE LEARNING</small></span></div>
            <div className="header-controls">
                <div className="view-switch" role="group" aria-label={copy.viewLabel}>
                    <button type="button" aria-pressed={view === 'cube'} onClick={() => dispatch(setView('cube'))}>{copy.cubeView}</button>
                    <button type="button" aria-pressed={view === 'linear'} onClick={() => dispatch(setView('linear'))}>{copy.linearView}</button>
                </div>
                <div className="locale-switch" role="group" aria-label={t.common.languageLabel}>
                    {locales.map(lang => <button key={lang} lang={lang} aria-label={localeNames[lang]} aria-pressed={lang === locale} onClick={() => dispatch(setLocale(lang))}>{lang.toUpperCase()}</button>)}
                </div>
                <button className="theme-toggle" type="button" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'light'} title={theme === 'dark' ? 'Light mode' : 'Dark mode'} onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}>
                    {theme === 'dark' ? <Sun size={18} aria-hidden="true"/> : <Moon size={18} aria-hidden="true"/>}
                </button>
            </div>
        </header>
        <CubePortfolio />
        <footer className="site-footer"><span>© {new Date().getFullYear()} Jose González Blanco</span><span>{t.common.footer}</span></footer>
    </>;
}
