import type { Locale } from '../store';
export type WorkEntry = {
    id: string;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    technologies: string[];
};
// Fill these fields and duplicate entries with unique IDs to add more cards.
// Empty values intentionally display labelled placeholders, not invented work.
export const projects: WorkEntry[] = [
    { id: 'project-1', title: { es: '', en: '', de: '' }, description: { es: '', en: '', de: '' }, technologies: [] },
    { id: 'project-2', title: { es: '', en: '', de: '' }, description: { es: '', en: '', de: '' }, technologies: [] },
    { id: 'project-3', title: { es: '', en: '', de: '' }, description: { es: '', en: '', de: '' }, technologies: [] },
];
export const experience: WorkEntry[] = [
    { id: 'experience-1', title: { es: '', en: '', de: '' }, description: { es: '', en: '', de: '' }, technologies: [] },
];
