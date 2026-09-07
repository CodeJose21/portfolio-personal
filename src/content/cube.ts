import type { Locale } from '../store';
export const faceIds = ['contact', 'projects', 'education', 'soft', 'experience', 'personal'] as const;
export type FaceId = typeof faceIds[number];
// Surface rotations and their inverse viewing rotations use the same axes.
export const faces: Record<FaceId, {
    x: number;
    y: number;
    surface: string;
    pips: number;
}> = {
    contact: { x: 0, y: 0, surface: 'rotateY(0deg)', pips: 1 },
    projects: { x: 0, y: 90, surface: 'rotateY(-90deg)', pips: 2 },
    experience: { x: 0, y: -90, surface: 'rotateY(90deg)', pips: 5 },
    education: { x: -90, y: 0, surface: 'rotateX(90deg)', pips: 3 },
    soft: { x: 90, y: 0, surface: 'rotateX(-90deg)', pips: 4 },
    personal: { x: 0, y: 180, surface: 'rotateY(180deg)', pips: 6 },
};
type Copy = {
    title: string;
    subtitle: string;
    next: string;
    previous: string;
    face: string;
    labels: Record<FaceId, string>;
    positions: Record<FaceId, string>;
    projectsTitle: string;
    experienceTitle: string;
    toolbox: string;
    outside: string;
    turn: string;
    navigation: string;
    hint: string;
    entryTitle: string;
    description: string;
    technologies: string;
    pending: string;
};
export const cubeCopy: Record<Locale, Copy> = {
    es: {
        title: 'Una persona.\nSeis perspectivas.', subtitle: 'INGENIERÍA CON OTRA PERSPECTIVA', next: 'Girar el dado', previous: 'Cara anterior', face: 'Cara',
        labels: { contact: 'Contacto', projects: 'Proyectos', experience: 'Experiencia laboral', education: 'Formación', soft: 'Soft skills', personal: 'Fuera de la oficina' },
        positions: { contact: 'Frontal', projects: 'Izquierda', experience: 'Derecha', education: 'Arriba', soft: 'Abajo', personal: 'Trasera' },
        projectsTitle: 'Ideas que toman forma.', experienceTitle: 'Mi trayectoria profesional.', toolbox: 'Mi caja de herramientas', outside: 'La otra parte de mí.', turn: 'SEIS CARAS · UNA HISTORIA', navigation: 'Navegación del dado', hint: 'Cada cara cuenta una parte. Tú eliges el orden.', entryTitle: 'Título', description: 'Descripción', technologies: 'Tecnologías utilizadas', pending: 'Por completar',
    },
    en: {
        title: 'One person.\nSix perspectives.', subtitle: 'ENGINEERING FROM ANOTHER ANGLE', next: 'Rotate the die', previous: 'Previous face', face: 'Face',
        labels: { contact: 'Contact', projects: 'Projects', experience: 'Work experience', education: 'Education', soft: 'Soft skills', personal: 'Outside the office' },
        positions: { contact: 'Front', projects: 'Left', experience: 'Right', education: 'Top', soft: 'Bottom', personal: 'Back' },
        projectsTitle: 'Ideas taking shape.', experienceTitle: 'My professional journey.', toolbox: 'My toolkit', outside: 'The other side of me.', turn: 'SIX FACES · ONE STORY', navigation: 'Die navigation', hint: 'Each face tells a part. You choose the order.', entryTitle: 'Title', description: 'Description', technologies: 'Technologies used', pending: 'To be completed',
    },
    de: {
        title: 'Ein Mensch.\nSechs Perspektiven.', subtitle: 'ENTWICKLUNG AUS EINEM ANDEREN BLICKWINKEL', next: 'Würfel drehen', previous: 'Vorherige Seite', face: 'Seite',
        labels: { contact: 'Kontakt', projects: 'Projekte', experience: 'Berufserfahrung', education: 'Ausbildung', soft: 'Soft Skills', personal: 'Abseits der Arbeit' },
        positions: { contact: 'Vorne', projects: 'Links', experience: 'Rechts', education: 'Oben', soft: 'Unten', personal: 'Hinten' },
        projectsTitle: 'Ideen nehmen Gestalt an.', experienceTitle: 'Mein beruflicher Werdegang.', toolbox: 'Mein Werkzeugkasten', outside: 'Meine andere Seite.', turn: 'SECHS SEITEN · EINE GESCHICHTE', navigation: 'Würfelnavigation', hint: 'Jede Seite erzählt einen Teil. Du bestimmst die Reihenfolge.', entryTitle: 'Titel', description: 'Beschreibung', technologies: 'Verwendete Technologien', pending: 'Noch zu ergänzen',
    },
};
