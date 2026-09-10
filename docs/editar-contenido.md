# Cómo editar el contenido del portfolio

## Dónde escribir

Abre el archivo del idioma que quieres editar:

- Español: `src/content/locales/es.ts`.
- Inglés: `src/content/locales/en.ts`.
- Alemán: `src/content/locales/de.ts`.

`src/content/translations.ts` solo conecta estos tres archivos con la aplicación. No necesitas modificarlo para añadir información. Cada archivo de idioma tiene los mismos bloques:

| Bloque | Qué contiene |
| --- | --- |
| `common` | Selector de idioma, salto al contenido, pie y aviso de perfil pendiente |
| `introduction` | Saludo, ocupación, presentación y descripción de la fotografía |
| `languages.items` | Idiomas hablados: nombre, nivel y bandera juntos |
| `work.emptyExperience` | Mensaje que se muestra cuando aún no hay experiencia laboral publicada |
| `education.items` | Etapas educativas: botón y tarjeta juntos |
| `softSkills.items` | Habilidades personales con título y descripción |
| `personal` | Texto fuera de la oficina, etiquetas y fotografía |

Modifica el texto entre comillas. Mantén las comas y llaves. Los campos tienen tipos: el editor y la compilación señalan campos que falten o tengan un formato incorrecto.

## Añadir una etapa educativa

Dentro de `education.items`, duplica un objeto completo y rellena sus campos. Por ejemplo:

```ts
{
  id: 'nuevo-curso' as const,
  button: {
    title: 'Curso',
    subtitle: 'Nombre del centro',
  },
  title: 'Título de la formación',
  institution: 'Nombre del centro',
  date: '2026',
  description: 'Qué aprendí durante esta formación.',
  tags: ['Tema principal', 'Otro tema'],
  metric: 'Completado',
  metricLabel: '',
},
```

El botón y la tarjeta se generan automáticamente. No hay que editar componentes ni Redux. El orden de los objetos es el orden de los botones. Deja al menos una etapa educativa.

El `id` identifica la entrada: usa un valor único dentro de esa lista, sin espacios, y conserva ese mismo valor en los tres idiomas. En español conserva `as const` después del id: de esta lista se deriva automáticamente `EducationId`, el tipo que utiliza la selección. Los archivos de inglés y alemán solo aceptan identificadores definidos en español. Así el cambio de idioma mantiene la etapa seleccionada. Si eliminas una etapa seleccionada o falta en otro idioma, se muestra la primera disponible.

## Añadir una habilidad o un idioma hablado

Para una soft skill, añade un objeto en `softSkills.items`:

```ts
{ id: 'liderazgo', title: 'Liderazgo', description: 'Mi experiencia coordinando equipos.' },
```

Para respaldarla con una experiencia concreta, puedes añadir `evidence` (logro o actividad), `application` (su utilidad en ingeniería) y `tags` (lista de habilidades). Usa hechos que puedas explicar: nombre del evento, año, tu participación y resultado cuando los tengas. La etiqueta sobre la aplicación profesional se edita en `softSkills.applicationLabel`. No necesitas inventar métricas ni añadir estas propiedades a todas las entradas.

Las habilidades se presentan en una barra de iconos. Al pasar el cursor o enfocar un icono se muestra su título, logro y explicación. También se pueden abrir con un toque, Intro o Espacio, y cerrar con Escape.

El campo opcional `icon` admite `listening`, `communication`, `creativity`, `resilience` o `idea`. Si no lo añades, se muestra una bombilla. El icono es independiente del `id`, por lo que puedes añadir habilidades sin modificar los componentes.

Las tecnologías se editan en cada proyecto o experiencia, en `src/content/work.ts`. El bloque antiguo `hardSkills.groups` se ha eliminado porque ya no se mostraba en la web.

Para un idioma hablado, añade un objeto en `languages.items`:

```ts
{ id: 'fr', name: 'Francés', level: 'B1', flag: 'flags/fr.png' },
```

La bandera de este ejemplo debe existir en `public/flags/fr.png`. Añadir un idioma hablado no añade un idioma nuevo al selector de traducciones de la web.

## Traducciones y otros datos

Repite las entradas nuevas en los tres archivos, traduciendo el texto y manteniendo sus identificadores. No hay traducción automática. Los tipos comprueban la estructura y los identificadores válidos de educación, pero no que hayas traducido el texto ni incluido todas las entradas en cada idioma.

- Proyectos y experiencia: `src/content/work.ts`.
- Enlaces sociales y foto personal: `src/content/profile.ts`.
- Correo y teléfono: `src/components/ContactDetails.tsx`.
- Nombres de caras y textos del dado: `src/content/cube.ts`.
- Colores y estilos: `src/styles.css`.

Los ejemplos de esta guía son ilustrativos; no se han añadido como datos reales.

## Añadir experiencia laboral

Edita la lista `experience` de `src/content/work.ts`. Puedes copiar este formato:

```ts
export const experience: WorkEntry[] = [
  {
    id: 'empresa-puesto',
    startDate: '2024-07-01',
    endDate: '',
    title: {
      es: 'Puesto · Empresa',
      en: 'Role · Company',
      de: 'Position · Unternehmen',
    },
    description: {
      es: 'Responsabilidades y aportación concreta.',
      en: 'Responsibilities and specific contribution.',
      de: 'Aufgaben und konkreter Beitrag.',
    },
    technologies: ['TypeScript', 'React'],
  },
];
```

Las fechas admiten `AAAA-MM-DD` o `AAAA-MM` (se toma el día 1). Se muestran sin año; deja `endDate` vacío u omítelo para mostrar Actualidad / Present / Heute.

Se publican las entradas que tienen título y descripción en el idioma seleccionado. Una entrada vacía o una traducción todavía sin escribir no genera una tarjeta con textos de relleno. Si no hay ninguna entrada publicable, se muestra el mensaje `work.emptyExperience` del idioma actual. Añade las tres traducciones para que la experiencia aparezca en todos los idiomas.

## Estado de los proyectos

En `src/content/work.ts`, cada proyecto requiere un campo `status`:

- `in-progress`: En curso / In progress / In Arbeit.
- `paused`: En pausa / On hold / Pausiert.
- `completed`: Completado / Completed / Abgeschlossen.

Por ejemplo, `status: 'paused'`. Las etiquetas se editan en `projectStatuses` dentro de cada archivo de idioma. El estado es independiente del título y se muestra en la cabecera de la tarjeta. En las entradas de experiencia es opcional.

## Comprobar los cambios

Ejecuta `npm run dev` para ver los cambios al guardar. Antes de publicar, ejecuta `npm run build` para comprobar los tipos y compilar. En PowerShell puedes usar `npm.cmd` si está bloqueado `npm.ps1`.
