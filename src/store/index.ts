import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { FaceId } from '../content/cube';

export type Locale = 'es' | 'en' | 'de';
export const localeNames: Record<Locale, string> = { es: 'Español', en: 'English', de: 'Deutsch' };
export const locales: Locale[] = ['es', 'en', 'de'];
export type EducationId = 'university' | 'erasmus' | 'school' | 'game-development';

// Preferences must remain optional: blocked storage should never prevent rendering.
function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem('portfolio-locale');
    return saved === 'en' || saved === 'de' ? saved : 'es';
  }
  catch { return 'es'; }
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: { locale: initialLocale(), education: 'university' as EducationId, face: 'contact' as FaceId },
  reducers: {
    selectFace(state, action: PayloadAction<FaceId>) { state.face = action.payload; },
    setLocale(state, action: PayloadAction<Locale>) { state.locale = action.payload; },
    selectEducation(state, action: PayloadAction<EducationId>) { state.education = action.payload; },
  },
});

export const store = configureStore({ reducer: { ui: uiSlice.reducer } });
export const { setLocale, selectEducation, selectFace } = uiSlice.actions;
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
