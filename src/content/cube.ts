import type { Locale } from '../store';
export const faceIds = ['contact', 'projects', 'education', 'experience', 'soft', 'personal'] as const;
export type FaceId = typeof faceIds[number];
export function isFaceId(value: string): value is FaceId {
    return faceIds.some(id => id === value);
}
// Surface rotations and their inverse viewing rotations use the same axes.
export const faces: Record<FaceId, {
    x: number;
    y: number;
    surface: string;
    pips: number;
}> = {
    contact: { x: 0, y: 0, surface: 'rotateY(0deg)', pips: 1 },
    projects: { x: 0, y: 90, surface: 'rotateY(-90deg)', pips: 2 },
    experience: { x: 90, y: 0, surface: 'rotateX(-90deg)', pips: 4 },
    education: { x: -90, y: 0, surface: 'rotateX(90deg)', pips: 3 },
    soft: { x: 0, y: -90, surface: 'rotateY(90deg)', pips: 5 },
    personal: { x: 0, y: 180, surface: 'rotateY(180deg)', pips: 6 },
};
type Copy = {
    title: string;
    face: string;
    labels: Record<FaceId, string>;
    projectsTitle: string;
    experienceTitle: string;
    viewLabel: string;
    cubeView: string;
    linearView: string;
    turn: string;
    navigation: string;
    hint: string;
    entryTitle: string;
    description: string;
    technologies: string;
    pending: string;
    present: string;
};
export const cubeCopy: Record<Locale, Copy> = {
    es: {
        viewLabel: 'Modo de lectura', cubeView: 'Vista dado', linearView: 'Vista lineal',
        present: 'Actualidad',
        title: 'Ingeniería con otra perspectiva', face: 'Cara',
        labels: { contact: 'Contacto', projects: 'Proyectos', experience: 'Experiencia laboral', education: 'Formación', soft: 'Soft skills', personal: 'Fuera de la oficina' },
        projectsTitle: 'Ideas que toman forma.', experienceTitle: 'Mi trayectoria profesional.', turn: 'SEIS CARAS · UNA HISTORIA', navigation: 'Navegación del dado', hint: 'Elige una sección en el índice o pulsa una cara del dado.', entryTitle: 'Título', description: 'Descripción', technologies: 'Tecnologías utilizadas', pending: 'Por completar',
    },
    en: {
        viewLabel: 'Reading mode', cubeView: 'Cube view', linearView: 'Linear view',
        present: 'Present',
        title: 'Engineering from another angle', face: 'Face',
        labels: { contact: 'Contact', projects: 'Projects', experience: 'Work experience', education: 'Education', soft: 'Soft skills', personal: 'Outside the office' },
        projectsTitle: 'Ideas taking shape.', experienceTitle: 'My professional journey.', turn: 'SIX FACES · ONE STORY', navigation: 'Die navigation', hint: 'Choose a section from the index or select a face of the die.', entryTitle: 'Title', description: 'Description', technologies: 'Technologies used', pending: 'To be completed',
    },
    de: {
        viewLabel: 'Lesemodus', cubeView: 'Würfelansicht', linearView: 'Listenansicht',
        present: 'Heute',
        title: 'Entwicklung aus einem anderen Blickwinkel', face: 'Seite',
        labels: { contact: 'Kontakt', projects: 'Projekte', experience: 'Berufserfahrung', education: 'Ausbildung', soft: 'Soft Skills', personal: 'Abseits der Arbeit' },
        projectsTitle: 'Ideen nehmen Gestalt an.', experienceTitle: 'Mein beruflicher Werdegang.', turn: 'SECHS SEITEN · EINE GESCHICHTE', navigation: 'Würfelnavigation', hint: 'Wähle einen Abschnitt im Menü oder eine Seite des Würfels.', entryTitle: 'Titel', description: 'Beschreibung', technologies: 'Verwendete Technologien', pending: 'Noch zu ergänzen',
    },
};
