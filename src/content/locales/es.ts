import type { PortfolioTranslation } from './types';

// Edita el contenido de cada sección. Duplica un objeto completo para añadir entradas.
// Usa los mismos identificadores en es.ts, en.ts y de.ts.
export const es = {
  projectStatuses: { 'in-progress': 'En curso', paused: 'En pausa', completed: 'Completado' },
  "common": {
    "skip": "Saltar al contenido",
    "languageLabel": "Idioma",
    "footer": "Construido con React, TypeScript y Redux.",
    "profilePending": "Perfil pendiente de enlazar"
  },
  "introduction": {
    "hello": "Hola, soy Jose",
    "role": "Ingeniero Full Stack & Machine Learning",
    "description": "Conecto software, datos y personas para crear soluciones que sean útiles en el mundo real.",
    "portraitAlt": "Retrato de Jose González Blanco"
  },
  "languages": {
    "heading": "CONECTANDO SIN FRONTERAS",
    "items": [
      {
        "id": "es",
        "name": "Español",
        "level": "Nativo",
        "flag": "flags/es.png"
      },
      {
        "id": "en",
        "name": "Inglés",
        "level": "Bilingüe · C2 Cambridge",
        "flag": "flags/gb.png"
      },
      {
        "id": "de",
        "name": "Alemán",
        "level": "Nivel Profesional · B2 Goethe",
        "flag": "flags/de.png"
      }
    ]
  },
  work: { emptyExperience: { title: "Experiencia por publicar", description: "Aquí compartiré mis experiencias profesionales, responsabilidades y tecnologías utilizadas." } },
  "education": {
    "eyebrow": "02 / APRENDIZAJE CONTINUO",
    "title": "Una base para seguir creciendo.",
    "navigationLabel": "Educación",
    "items": [
      {
        "id": "university" as const,
        "button": {
          "title": "Universidad",
          "subtitle": "UMA"
        },
        "title": "Grado en Ingeniería del Software",
        "institution": "Universidad de Málaga",
        "date": "2022 – 2026",
        "tags": [
          "Ingeniería del software",
          "Formación universitaria"
        ],
        "metric": "8,5 / 10",
        "metricLabel": "Nota media",
        "description": "Formación universitaria en ingeniería del software."
      },
      {
        "id": "erasmus" as const,
        "button": {
          "title": "Erasmus+",
          "subtitle": "TU Dortmund"
        },
        "title": "Programa de intercambio Erasmus+",
        "institution": "Technische Universität Dortmund",
        "date": "2024 - 2025",
        "tags": [
          "Intercambio internacional",
          "Alemán e inglés"
        ],
        "metric": "2",
        "metricLabel": "Idiomas de docencia",
        "description": "Experiencia académica internacional en TU Dortmund, con asignaturas impartidas y superadas en alemán e inglés."
      },
      {
        "id": "school" as const,
        "button": {
          "title": "Bachillerato",
          "subtitle": "Bachillerato"
        },
        "title": "Bachillerato Internacional",
        "institution": "Colegio Internacional Torrequebrada",
        "date": "Centro y fechas por completar",
        "tags": [
          "Bachillerato"
        ],
        "metric": "36/45",
        "metricLabel": "Nota final del diploma",
        "description": "Titulo de bachillerato internacional orientado a la ciencia y la informática."
      },
      {
        "id": "game-development" as const,
        "button": {
          "title": "Máster juvenil",
          "subtitle": "Máster Juvenil"
        },
        "title": "Máster juvenil en desarrollo de videojuegos",
        "institution": "GAMIA",
        "date": "2018-2019",
        "tags": [
          "Desarrollo de videojuegos",
          "Formación juvenil"
        ],
        "metric": "Completado",
        "metricLabel": "",
        "description": "Formación juvenil en desarrollo de videojuegos."
      }
    ]
  },
  "softSkills": {
    "title": "Habilidades que he puesto en práctica.",
    "applicationLabel": "En ingeniería de software",
    "items": [
      {
        "id": "debate",
        "icon": "listening",
        "title": "Argumentación y escucha",
        "evidence": "Subcampeón nacional de debate",
        "description": "He participado en numerosas ligas de debate y he alcanzado un subcampeonato a nivel nacional.",
        "application": "Analizar distintas posturas, justificar decisiones técnicas y responder a objeciones con argumentos.",
        "tags": [
          "Pensamiento crítico",
          "Escucha activa",
          "Síntesis"
        ]
      },
      {
        "id": "communication",
        "icon": "communication",
        "title": "Comunicación de ideas",
        "evidence": "Trinity · Grade 8",
        "description": "Título Grade 8 en Communication Skills de Trinity College London, el grado más alto de esta modalidad de exámenes.",
        "application": "Explicar soluciones con claridad y adaptar una presentación a interlocutores técnicos y no técnicos.",
        "tags": [
          "Comunicación oral",
          "Presentaciones",
          "Claridad"
        ]
      },
      {
        "id": "game-jams",
        "icon": "creativity",
        "title": "Creatividad y adaptación",
        "evidence": "Participación en varias game jams",
        "description": "He participado en varias game jams, llevando mi interés por el desarrollo de videojuegos a un entorno de creación con tiempo limitado.",
        "application": "Un contexto para practicar la priorización, ajustar el alcance y explorar soluciones bajo restricciones.",
        "tags": [
          "Creatividad",
          "Priorización",
          "Adaptabilidad"
        ]
      },
      {
        "id": "resilience",
        "icon": "resilience",
        "title": "Resiliencia y superación",
        "evidence": "Erasmus+ en Alemania y título B2 de alemán",
        "description": "Pasé un año en Alemania sin conocimientos previos de alemán, superé asignaturas con docencia en alemán y obtuve el título B2.",
        "application": "Adaptarme a contextos exigentes, mantener la constancia ante los obstáculos y seguir avanzando hasta alcanzar el objetivo.",
        "tags": [
          "Resiliencia",
          "Perseverancia",
          "Adaptación"
        ]
      }
    ]
  },
  "personal": {
    "title": "Desconectar es la mejor forma de conectar.",
    "description": "Procuro llevar una vida sana, combinando hábitos saludables de alimentación con el deporte. Reservar tiempo para cuidarme y desconectar de las pantallas me ayuda a recuperar energía y volver con la mente despejada. Para mí, el equilibrio también se construye fuera del trabajo.",
    "tags": [
      "Alimentación saludable",
      "Deporte",
      "Equilibrio"
    ],
    "photoCaption": "Escalada junto al mar: un momento para desconectar.",
    "photoPlaceholder": "Espacio reservado para una foto personal"
  }
} satisfies PortfolioTranslation;

/** Los ids se derivan del contenido: al añadir una etapa aquí, el tipo se actualiza. */
export type EducationId = (typeof es.education.items)[number]["id"];
