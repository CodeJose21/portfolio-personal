# Portfolio · Jose González Blanco

Portfolio en español, inglés y alemán con React, TypeScript, Redux Toolkit y Vite. La interfaz es un dado de seis caras con giros 3D y una paleta camel oscura.

## Ejecutar y compilar

Con Node.js 22.12+ y npm:

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
- `src/content/translations.ts`: presentación, idiomas, habilidades, educación y contenido personal.
- `src/content/profile.ts`: enlaces sociales y fotografía personal opcional.
- `src/content/cube.ts`: nombres de caras, navegación y orientación del dado.
- `src/styles.css`: colores, tamaños y diseño adaptable.
- `public/`: imágenes, referenciadas mediante `publicAsset` para respetar la ruta de GitHub Pages.

Proyectos y experiencia tienen campos vacíos intencionadamente. Se muestran «Título», «Descripción» y «Por completar» hasta que añadas información. No hay un editor dentro de la web: se modifica el repositorio y se vuelve a compilar.

## GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica únicamente `dist/`. Mantén **Settings → Pages → Source → GitHub Actions** y sube los cambios a `main` para activar el despliegue existente.

La ruta de producción sigue siendo [codejose21.github.io/portfolio-personal/](https://codejose21.github.io/portfolio-personal/). Vite conserva `/portfolio-personal/` como base. No publiques el `index.html` fuente: referencia TSX de desarrollo.

Consulta el [informe del rediseño](docs/informe-redisenio-dado.md) para conocer la arquitectura, las verificaciones y las limitaciones.
