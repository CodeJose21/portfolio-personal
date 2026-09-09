# Portfolio · Jose González Blanco

Portfolio en español, inglés y alemán con React, TypeScript, Redux Toolkit y Vite. Incluye un dado de seis caras con giros 3D, una vista lineal accesible y una paleta camel oscura.

## Ejecutar y compilar

Con Node.js 22.13+ (o Node.js 24 LTS) y npm:

```sh
npm ci
npm run dev
```

Para comprobar la versión de producción:

```sh
npm run build
npm run preview
```

`build` comprueba TypeScript y genera `dist/`. En la vista previa abre la dirección indicada por Vite con `/portfolio-personal/`. En PowerShell, si se bloquea `npm`, utiliza `npm.cmd`.

## Editar contenido

- `src/content/work.ts`: proyectos y experiencia; título y descripción en `es`, `en` y `de`, y tecnologías. Duplica entradas con identificadores únicos para añadir tarjetas.
- `src/content/locales/es.ts`, `en.ts` y `de.ts`: presentación, idiomas, habilidades, educación y contenido personal, agrupados por sección. Cada entrada reúne todos sus campos.
- `src/content/translations.ts`: conecta los tres idiomas; no se modifica para añadir entradas.
- `src/content/profile.ts`: enlaces sociales y fotografía personal opcional.
- `src/content/cube.ts`: nombres de caras, navegación y orientación del dado.
- `src/styles.css`: colores, tamaños y diseño adaptable.
- `public/`: imágenes, referenciadas mediante `publicAsset` para respetar la ruta de GitHub Pages.

Los proyectos incluyen su estado y contenido en los tres idiomas. La experiencia permanece vacía hasta que añadas información: se muestra un mensaje intencional y solo se publican entradas con título y descripción en el idioma seleccionado. No hay un editor dentro de la web: se modifica el repositorio y se vuelve a compilar.

La [guía para editar contenido](docs/editar-contenido.md) incluye ejemplos para añadir formación, habilidades e idiomas. Los botones educativos se generan a partir de los datos, sin editar componentes ni el estado global.

## Navegación y accesibilidad

El índice tiene enlaces reales a `#contact`, `#projects`, `#education`, `#experience`, `#soft` y `#personal`. La URL conserva idioma (`?lang=en`) y vista (`?view=linear`). Se puede copiar un enlace directo, recargar y usar atrás/adelante. Redux refleja esa navegación y conserva la etapa educativa mientras se usa la aplicación.

La vista lineal expone todas las secciones en el flujo del documento. En la vista dado, el contenido permanece montado en superficies planas; las caras inactivas están ocultas. La geometría 3D es decorativa y no intercepta clics. Las soft skills se expanden con clic, toque, Enter o Espacio. El movimiento reducido elimina los giros. Las fuentes del sistema evitan peticiones a Google Fonts.

## Comprobaciones

```sh
npm run lint
npm run build
npx playwright install chromium
npm test
```

La descarga de Chromium solo es necesaria la primera vez o al actualizar Playwright. Las pruebas arrancan Vite si no está abierto; cubren navegación, idiomas, contenido, teclado/táctil, movimiento reducido, axe y tamaños de 320 a 1440 píxeles. Generan capturas para revisar el aspecto, sin comparaciones contra imágenes de referencia. `npm run test:report` abre el informe de resultados.

El workflow de GitHub ejecuta las comprobaciones antes de desplegar y prueba la compilación bajo `/portfolio-personal/`. Al ejecutar las pruebas localmente, los informes y capturas quedan disponibles en `playwright-report/`.

## GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica únicamente `dist/`. Mantén **Settings → Pages → Source → GitHub Actions** y sube los cambios a `main` para activar el despliegue existente.

La ruta de producción sigue siendo [codejose21.github.io/portfolio-personal/](https://codejose21.github.io/portfolio-personal/). Vite conserva `/portfolio-personal/` como base. No publiques el `index.html` fuente: referencia TSX de desarrollo.

Consulta la [revisión actual del proyecto](docs/informe-revision-proyecto.md) para conocer la valoración, los cambios y los límites de las comprobaciones. El [informe del rediseño](docs/informe-redisenio-dado.md) documenta el diseño inicial y puede describir comportamientos anteriores.
