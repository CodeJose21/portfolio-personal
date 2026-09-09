import type { Locale } from '../store';
import type { PortfolioTranslation } from './locales/types';
import { es, type EducationId } from './locales/es';
import { en } from './locales/en';
import { de } from './locales/de';

// El contenido se edita en locales/es.ts, en.ts y de.ts.
// Guía y ejemplos: docs/editar-contenido.md.
export const translations: Record<Locale, PortfolioTranslation<EducationId>> = { es, en, de };
