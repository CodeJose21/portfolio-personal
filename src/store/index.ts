import { configureStore, createListenerMiddleware, createSlice, isAnyOf, type PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { isFaceId, type FaceId } from '../content/cube';
import type { EducationId } from '../content/locales/es';

export type Locale = 'es' | 'en' | 'de';
export type PortfolioView = 'cube' | 'linear';
export const localeNames: Record<Locale, string> = { es: 'Español', en: 'English', de: 'Deutsch' };
export const locales: Locale[] = ['es', 'en', 'de'];
const isLocale = (value: string | null): value is Locale => locales.some(locale => locale === value);

function savedLocale(): Locale {
  try {
    const saved = localStorage.getItem('portfolio-locale');
    return isLocale(saved) ? saved : 'es';
  } catch { return 'es'; }
}

type NavigationState = { face: FaceId; locale: Locale; view: PortfolioView };
export function navigationFromLocation(fallbackLocale: Locale = savedLocale()): NavigationState {
  const query = new URLSearchParams(window.location.search);
  const lang = query.get('lang');
  const hash = window.location.hash.slice(1);
  return {
    face: isFaceId(hash) ? hash : 'contact',
    locale: isLocale(lang) ? lang : fallbackLocale,
    view: query.get('view') === 'linear' ? 'linear' : 'cube',
  };
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: { ...navigationFromLocation(), education: 'university' as EducationId },
  reducers: {
    selectFace(state, action: PayloadAction<FaceId>) { state.face = action.payload; },
    setLocale(state, action: PayloadAction<Locale>) { state.locale = action.payload; },
    setView(state, action: PayloadAction<PortfolioView>) { state.view = action.payload; },
    selectEducation(state, action: PayloadAction<EducationId>) { state.education = action.payload; },
    restoreNavigation(state, action: PayloadAction<NavigationState>) { Object.assign(state, action.payload); },
  },
});

export const { setLocale, selectEducation, selectFace, setView, restoreNavigation } = uiSlice.actions;
const navigationListener = createListenerMiddleware();
export const store = configureStore({
  reducer: { ui: uiSlice.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(navigationListener.middleware),
});
type RootState = ReturnType<typeof store.getState>;

// User navigation writes history once. Popstate restores Redux without rewriting history.
navigationListener.startListening({
  matcher: isAnyOf(selectFace, setLocale, setView),
  effect: (action, api) => {
    const { face, locale, view } = (api.getState() as RootState).ui;
    const url = new URL(window.location.href);
    url.hash = face;
    url.searchParams.set('lang', locale);
    if (view === 'linear') url.searchParams.set('view', view);
    else url.searchParams.delete('view');
    if (url.href === window.location.href) return;
    if (setLocale.match(action)) window.history.replaceState(null, '', url);
    else window.history.pushState(null, '', url);
  },
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
