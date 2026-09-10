import type { PortfolioTranslation } from './types';
import type { EducationId } from './es';

// Edita el contenido de cada sección. Duplica un objeto completo para añadir entradas.
// Usa los mismos identificadores en es.ts, en.ts y de.ts.
export const de = {
  projectStatuses: { 'in-progress': 'In Arbeit', paused: 'Pausiert', completed: 'Abgeschlossen' },
  "common": {
    "skip": "Zum Inhalt springen",
    "languageLabel": "Sprache",
    "footer": "Entwickelt mit React, TypeScript und Redux.",
    "profilePending": "Profil noch nicht verlinkt"
  },
  "introduction": {
    "hello": "Hallo, ich bin Jose",
    "role": "Ingenieur für Full-Stack-Entwicklung und maschinelles Lernen",
    "description": "Ich verbinde Software, Daten und Menschen, um Lösungen zu entwickeln, die im Alltag nützlich sind.",
    "portraitAlt": "Porträt von Jose González Blanco"
  },
  "languages": {
    "heading": "GRENZENLOS IN VERBINDUNG",
    "items": [
      {
        "id": "es",
        "name": "Spanisch",
        "level": "Muttersprache",
        "flag": "flags/es.png"
      },
      {
        "id": "en",
        "name": "Englisch",
        "level": "Zweisprachig · C2 Cambridge",
        "flag": "flags/gb.png"
      },
      {
        "id": "de",
        "name": "Deutsch",
        "level": "Berufliche Sprachkenntnisse · B2 Goethe",
        "flag": "flags/de.png"
      }
    ]
  },
  work: { emptyExperience: { title: "Berufserfahrung folgt", description: "Hier werde ich meine beruflichen Erfahrungen, Aufgaben und eingesetzten Technologien vorstellen." } },
  "education": {
    "eyebrow": "02 / KONTINUIERLICHES LERNEN",
    "title": "Eine Grundlage, um weiterzuwachsen.",
    "navigationLabel": "Ausbildung",
    "items": [
      {
        "id": "university",
        "button": {
          "title": "Universität",
          "subtitle": "UMA"
        },
        "title": "Bachelorstudium Software Engineering",
        "institution": "Universidad de Málaga",
        "date": "2022 – 2026",
        "tags": [
          "Software Engineering",
          "Universitäre Ausbildung"
        ],
        "metric": "8,5 / 10",
        "metricLabel": "Notendurchschnitt",
        "description": "Universitäre Ausbildung im Bereich Software Engineering."
      },
      {
        "id": "erasmus",
        "button": {
          "title": "Erasmus+",
          "subtitle": "TU Dortmund"
        },
        "title": "Erasmus+-Austauschprogramm",
        "institution": "Technische Universität Dortmund",
        "date": "2024 - 2025",
        "tags": [
          "Internationaler Austausch",
          "Deutsch und Englisch"
        ],
        "metric": "2",
        "metricLabel": "Unterrichtssprachen",
        "description": "Internationale Studienerfahrung an der TU Dortmund mit Lehrveranstaltungen auf Deutsch und Englisch, die erfolgreich abgeschlossen wurden."
      },
      {
        "id": "school",
        "button": {
          "title": "Schulabschluss",
          "subtitle": "Schulabschluss"
        },
        "title": "International Baccalaureate",
        "institution": "Colegio Internacional Torrequebrada",
        "date": "Schule und Zeitraum noch zu ergänzen",
        "tags": [
          "Schulabschluss"
        ],
        "metric": "36/45",
        "metricLabel": "Abschlussnote des Diploms",
        "description": "International-Baccalaureate-Diplom mit Schwerpunkt Naturwissenschaften und Informatik."
      },
      {
        "id": "game-development",
        "button": {
          "title": "Junior-Master",
          "subtitle": "Junior-Master"
        },
        "title": "Junior-Master-Programm in Spieleentwicklung",
        "institution": "GAMIA",
        "date": "2018-2019",
        "tags": [
          "Spieleentwicklung",
          "Jugendbildung"
        ],
        "metric": "Abgeschlossen",
        "metricLabel": "",
        "description": "Ausbildung in Spieleentwicklung für Jugendliche."
      }
    ]
  },
  "softSkills": {
    "title": "Fähigkeiten aus der Praxis.",
    "applicationLabel": "In der Softwareentwicklung",
    "items": [
      {
        "id": "debate",
        "icon": "listening",
        "title": "Argumentieren und zuhören",
        "evidence": "Zweiter Platz auf nationaler Ebene im Debattieren",
        "description": "Ich habe an zahlreichen Debattierligen teilgenommen und auf nationaler Ebene einen zweiten Platz erreicht.",
        "application": "Verschiedene Positionen analysieren, technische Entscheidungen begründen und auf Einwände mit nachvollziehbaren Argumenten eingehen.",
        "tags": [
          "Kritisches Denken",
          "Aktives Zuhören",
          "Zusammenfassen"
        ]
      },
      {
        "id": "communication",
        "icon": "communication",
        "title": "Ideen vermitteln",
        "evidence": "Trinity · Grade 8",
        "description": "Grade-8-Abschluss in Communication Skills am Trinity College London, der höchste Grad dieser Prüfungsreihe.",
        "application": "Lösungen verständlich erklären und Präsentationen auf ein technisches oder nichttechnisches Publikum abstimmen.",
        "tags": [
          "Mündliche Kommunikation",
          "Präsentationen",
          "Verständlichkeit"
        ]
      },
      {
        "id": "game-jams",
        "icon": "creativity",
        "title": "Kreativität und Anpassungsfähigkeit",
        "evidence": "Teilnahme an mehreren Game Jams",
        "description": "Ich habe an mehreren Game Jams teilgenommen und mein Interesse an Spieleentwicklung in einem zeitlich begrenzten kreativen Umfeld eingebracht.",
        "application": "Ein Rahmen, um Prioritäten zu setzen, den Umfang anzupassen und Lösungen unter Einschränkungen zu erproben.",
        "tags": [
          "Kreativität",
          "Priorisierung",
          "Anpassungsfähigkeit"
        ]
      },
      {
        "id": "resilience",
        "icon": "resilience",
        "title": "Resilienz und Durchhaltevermögen",
        "evidence": "Erasmus+ in Deutschland und Deutschzertifikat B2",
        "description": "Ich habe ein Jahr in Deutschland verbracht, ohne vorher Deutsch zu sprechen, Fächer auf Deutsch bestanden und das B2-Zertifikat erworben.",
        "application": "Mich an anspruchsvolle Situationen anpassen, trotz Hindernissen konsequent bleiben und Ziele weiterverfolgen.",
        "tags": [
          "Resilienz",
          "Durchhaltevermögen",
          "Anpassungsfähigkeit"
        ]
      }
    ]
  },
  "personal": {
    "title": "Abschalten, um wieder anzuknüpfen.",
    "description": "Ich versuche, gesund zu leben und ausgewogene Ernährung mit Sport zu verbinden. Mir Zeit für mich zu nehmen und Abstand von Bildschirmen zu gewinnen, hilft mir, neue Energie zu tanken und mit klarem Kopf zurückzukehren. Für mich entsteht Ausgeglichenheit auch außerhalb der Arbeit.",
    "tags": [
      "Gesunde Ernährung",
      "Sport",
      "Ausgeglichenheit"
    ],
    "photoCaption": "Klettern am Meer: ein Moment zum Abschalten.",
    "photoPlaceholder": "Platz für ein persönliches Foto"
  }
} satisfies PortfolioTranslation<EducationId>;
