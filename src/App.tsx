import { useEffect } from 'react';
import { CubePortfolio } from './components/CubePortfolio';
import { DiePips } from './components/DiePips';
import { translations } from './content/translations';
import { useLocationNavigation } from './hooks/useLocationNavigation';
import { locales, localeNames, setLocale, useAppDispatch, useAppSelector } from './store';
export default function App() {
    useLocationNavigation();
    const locale = useAppSelector(state => state.ui.locale);
    const dispatch = useAppDispatch();
    const t = translations[locale];
    useEffect(() => {
        document.documentElement.lang = locale;
        document.title = `Jose González Blanco | ${t.introduction.role}`;
        document.querySelector('meta[name="description"]')?.setAttribute('content', t.introduction.description);
        try {
            localStorage.setItem('portfolio-locale', locale);
        }
        catch { /* Optional preference. */ }
    }, [locale, t]);
    return <><a className="skip-link" href="#main">{t.common.skip}</a><header className="site-header"><div className="brand"><DiePips value={6}/><span>JOSE GONZÁLEZ BLANCO<small>FULL STACK & MACHINE LEARNING</small></span></div><div className="locale-switch" role="group" aria-label={t.common.languageLabel}>{locales.map(lang => <button key={lang} lang={lang} aria-label={localeNames[lang]} aria-pressed={lang === locale} onClick={() => dispatch(setLocale(lang))}>{lang.toUpperCase()}</button>)}</div></header><CubePortfolio /><footer className="site-footer"><span>© {new Date().getFullYear()} Jose González Blanco</span><span>{t.common.footer}</span></footer></>;
}
