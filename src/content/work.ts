import type { Locale } from '../store';
export type ProjectStatus = 'in-progress' | 'paused' | 'completed';
export type WorkEntry = {
    id: string;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    technologies: string[];
    /** Fechas AAAA-MM-DD o AAAA-MM (día 1). Fin vacío: actualidad. */
    startDate?: string;
    endDate?: string;
    /** Opcional para experiencia; obligatorio en los proyectos. */
    status?: ProjectStatus;
};
export type ProjectEntry = WorkEntry & { status: ProjectStatus };
// Edita las tres traducciones y duplica entradas con ids únicos para añadir tarjetas.
export const projects: ProjectEntry[] = [
    {
        id: 'project-1',
        status: 'in-progress',
        title: { es: 'Agenda taxi', en: 'Taxi Planner', de: 'Taxi-Planer' },
        description: {
            es: 'Aplicación móvil para digitalizar el día a día del taxista y automatizar la recogida de datos.',
            en: 'A mobile app to digitise taxi drivers’ daily work and automate data collection.',
            de: 'Eine mobile App, die den Arbeitsalltag von Taxifahrern digitalisiert und die Datenerfassung automatisiert.',
        },
        technologies: ['Dart', 'SQL'],
    },
    {
        id: 'project-2',
        status: 'paused',
        title: { es: 'Detector de emociones', en: 'Emotion Detector', de: 'Emotionserkennung' },
        description: {
            es: 'Proyecto ML basado en construir una red neuronal que permita clasificar correctamente la emoción expresada por el locutor de un audio',
            en: 'A machine learning project focused on building a neural network to accurately classify the emotion expressed by a speaker in an audio recording.',
            de: 'Ein Machine-Learning-Projekt zur Entwicklung eines neuronalen Netzes, das die von einer sprechenden Person in einer Audioaufnahme ausgedrückte Emotion korrekt klassifizieren soll.',
        },
        technologies: ['Python', 'scikit-learn'],
    },
    {
        id: 'project-3',
        status: 'completed',
        title: { es: 'Aplicación Bancosol', en: 'Bancosol App', de: 'Bancosol-Anwendung' },
        description: {
            es: 'Proyecto universitario que consiste en construir una aplicación web full stack para permitir a la ONG Bancosol gestionar sus campañas',
            en: 'A university project to build a full-stack web application that enables the NGO Bancosol to manage its campaigns.',
            de: 'Ein Hochschulprojekt zur Entwicklung einer Full-Stack-Webanwendung, mit der die Nichtregierungsorganisation Bancosol ihre Kampagnen verwalten kann.',
        },
        technologies: ['Full-Stack', 'Spring Boot', 'React', 'JavaScript', 'Supabase'],
    },
];
// Añade aquí tu experiencia siguiendo el ejemplo de docs/editar-contenido.md.
// Solo se muestran entradas con título y descripción en el idioma seleccionado.
export const experience: WorkEntry[] = [
  {
    id: 'tr-1',
    startDate: '2024-07',
    endDate: '',
    title: {
      es: 'Responsable de digitalización y procesos internos · GB Capital',
      en: 'Digital Operations & Process Manager · GB Capital',
      de: 'Verantwortlicher für Digitalisierung und interne Prozesse · GB Capital',
    },
    description: {
      es: 'Diseñé e implementé los sistemas de gestión interna de la empresa mediante Google Sheets y herramientas de ofimática, estructurando la información y los procesos necesarios para su operativa diaria.',
      en: 'Designed and implemented the company’s internal management systems using Google Sheets and office productivity tools, structuring the information and workflows required for day-to-day operations.',
      de: 'Konzeption und Implementierung interner Verwaltungssysteme mit Google Sheets und Bürosoftware sowie Strukturierung der Informationen und Arbeitsabläufe für den täglichen Geschäftsbetrieb.',
    },
    technologies: ['SQL','Google Sheets', 'Microsoft Excel'],
  },
];
