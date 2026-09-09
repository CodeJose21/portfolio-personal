import type { ProjectStatus } from '../work';

/** Una entrada contiene todos sus datos; no hay listas sincronizadas por posición. */
export interface LanguageEntry {
  id: string;
  name: string;
  level: string;
  /** Ruta dentro de public/, por ejemplo flags/es.png. */
  flag: string;
}

export interface EducationEntry<Id extends string = string> {
  /** Mantén el mismo id en los tres idiomas, aunque cambies el título. */
  id: Id;
  button: { title: string; subtitle: string };
  title: string;
  institution: string;
  date: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
}

/** Iconos disponibles. Los ids de las habilidades se pueden editar libremente. */
export type SoftSkillIcon = 'listening' | 'communication' | 'gamepad' | 'resilience' | 'idea';

export interface PortfolioTranslation<EducationId extends string = string> {
  projectStatuses: Record<ProjectStatus, string>;
  common: { skip: string; languageLabel: string; footer: string; profilePending: string };
  introduction: { hello: string; role: string; description: string; portraitAlt: string };
  languages: { heading: string; items: LanguageEntry[] };
  work: { emptyExperience: { title: string; description: string } };
  education: {
    eyebrow: string;
    title: string;
    navigationLabel: string;
    /** Orden de los botones. Se requiere al menos una etapa. */
    items: [EducationEntry<EducationId>, ...EducationEntry<EducationId>[]];
  };
  softSkills: {
    title: string;
    applicationLabel: string;
    items: {
      id: string;
      /** Opcional: sin icono se muestra una bombilla. */
      icon?: SoftSkillIcon;
      title: string;
      description: string;
      /** Logro o experiencia concreta que respalda la habilidad. */
      evidence?: string;
      application?: string;
      tags?: string[];
    }[];
  };
  personal: { title: string; description: string; tags: string[]; photoCaption: string; photoPlaceholder: string };
}
