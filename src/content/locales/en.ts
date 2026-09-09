import type { PortfolioTranslation } from './types';
import type { EducationId } from './es';

// Edita el contenido de cada sección. Duplica un objeto completo para añadir entradas.
// Usa los mismos identificadores en es.ts, en.ts y de.ts.
export const en = {
  projectStatuses: { 'in-progress': 'In progress', paused: 'On hold', completed: 'Completed' },
  "common": {
    "skip": "Skip to content",
    "languageLabel": "Language",
    "footer": "Built with React, TypeScript and Redux.",
    "profilePending": "Profile link pending"
  },
  "introduction": {
    "hello": "Hi, I’m Jose",
    "role": "Full Stack & Machine Learning Engineer",
    "description": "Connecting software, data and people to build solutions that make a difference in the real world.",
    "portraitAlt": "Portrait of Jose González Blanco"
  },
  "languages": {
    "heading": "CONNECTING ACROSS BORDERS",
    "items": [
      {
        "id": "es",
        "name": "Spanish",
        "level": "Native",
        "flag": "flags/es.png"
      },
      {
        "id": "en",
        "name": "English",
        "level": "Bilingual · C2 Cambridge",
        "flag": "flags/gb.png"
      },
      {
        "id": "de",
        "name": "German",
        "level": "Professional proficiency · B2 Goethe",
        "flag": "flags/de.png"
      }
    ]
  },
  work: { emptyExperience: { title: "Professional experience coming soon", description: "I will share my professional experience, responsibilities and technologies here." } },
  "education": {
    "eyebrow": "02 / ALWAYS LEARNING",
    "title": "A foundation to keep growing.",
    "navigationLabel": "Education",
    "items": [
      {
        "id": "university",
        "button": {
          "title": "University",
          "subtitle": "UMA"
        },
        "title": "Bachelor’s in Software Engineering",
        "institution": "Universidad de Málaga",
        "date": "2022 – 2026",
        "tags": [
          "Software engineering",
          "University education"
        ],
        "metric": "8.5 / 10",
        "metricLabel": "Average grade",
        "description": "University education in software engineering."
      },
      {
        "id": "erasmus",
        "button": {
          "title": "Erasmus+",
          "subtitle": "TU Dortmund"
        },
        "title": "Erasmus+ exchange programme",
        "institution": "Technische Universität Dortmund",
        "date": "2024 - 2025",
        "tags": [
          "International exchange",
          "German and English"
        ],
        "metric": "2",
        "metricLabel": "Teaching languages",
        "description": "International academic experience at TU Dortmund, with courses taught and successfully completed in German and English."
      },
      {
        "id": "school",
        "button": {
          "title": "Secondary education",
          "subtitle": "Secondary education"
        },
        "title": "International Baccalaureate",
        "institution": "Colegio Internacional Torrequebrada",
        "date": "School and dates to be added",
        "tags": [
          "Secondary education"
        ],
        "metric": "36/45",
        "metricLabel": "Final diploma score",
        "description": "International Baccalaureate diploma with a focus on science and computer science."
      },
      {
        "id": "game-development",
        "button": {
          "title": "Junior master",
          "subtitle": "Junior master"
        },
        "title": "Junior master programme in game development",
        "institution": "GAMIA",
        "date": "2018-2019",
        "tags": [
          "Game development",
          "Youth education"
        ],
        "metric": "Completed",
        "metricLabel": "",
        "description": "A youth programme in game development."
      }
    ]
  },
  "softSkills": {
    "title": "Skills I have put into practice.",
    "applicationLabel": "In software engineering",
    "items": [
      {
        "id": "debate",
        "icon": "listening",
        "title": "Reasoning and listening",
        "evidence": "National debate runner-up",
        "description": "I have taken part in numerous debate leagues and achieved a runner-up finish at national level.",
        "application": "Analysing different perspectives, justifying technical decisions and responding to objections with reasoned arguments.",
        "tags": [
          "Critical thinking",
          "Active listening",
          "Synthesis"
        ]
      },
      {
        "id": "communication",
        "icon": "communication",
        "title": "Communicating ideas",
        "evidence": "Trinity · Grade 8",
        "description": "Grade 8 qualification in Communication Skills from Trinity College London, the highest grade in this exam pathway.",
        "application": "Explaining solutions clearly and adapting presentations to technical and non-technical audiences.",
        "tags": [
          "Spoken communication",
          "Presentations",
          "Clarity"
        ]
      },
      {
        "id": "game-jams",
        "icon": "gamepad",
        "title": "Creativity and adaptability",
        "evidence": "Participation in several game jams",
        "description": "I have participated in several game jams, taking my interest in game development into a time-limited creative setting.",
        "application": "An opportunity to practise prioritisation, adjust scope and explore solutions under constraints.",
        "tags": [
          "Creativity",
          "Prioritisation",
          "Adaptability"
        ]
      },
      {
        "id": "resilience",
        "icon": "resilience",
        "title": "Resilience and perseverance",
        "evidence": "Erasmus+ in Germany and German B2 certificate",
        "description": "I spent a year in Germany without any prior knowledge of German, passed subjects taught in German and obtained the B2 certificate.",
        "application": "Adapting to demanding contexts, staying consistent through obstacles and continuing until I reach the goal.",
        "tags": [
          "Resilience",
          "Perseverance",
          "Adaptability"
        ]
      }
    ]
  },
  "personal": {
    "title": "Disconnecting is the best way to reconnect.",
    "description": "I try to lead a healthy life by combining healthy eating habits with sport. Making time to look after myself and step away from screens helps me recharge and return with a clear mind. For me, balance is also built outside work.",
    "tags": [
      "Healthy eating",
      "Sport",
      "Balance"
    ],
    "photoCaption": "A moment to disconnect",
    "photoPlaceholder": "Space reserved for a personal photo"
  }
} satisfies PortfolioTranslation<EducationId>;
