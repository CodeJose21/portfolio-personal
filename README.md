# Portfolio · Jose González Blanco

Portfolio bilingüe (español/inglés) con React, TypeScript, Redux Toolkit y Vite. Diseño adaptable con navegación sticky, fotografía del CV, competencias, educación con pestañas accesibles y sección personal.

## Uso local

Requiere Node.js 20.19+ o 22.12+ y npm.

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

El build comprueba TypeScript y genera el sitio estático en `dist/`. Las versiones exactas están fijadas en `package-lock.json`. Usa `npm ci` en integración continua.

## Organización

- `src/content/translations.ts`: contenido y traducciones con comprobación de tipos.
- `src/store/index.ts`: estado de idioma y selección de educación; hooks tipados de Redux.
- `src/components/`: navegación, cabeceras y panel educativo con teclado.
- `src/App.tsx`: composición de secciones y sincronización de idioma/metadatos.
- `src/styles.css`: estilos, responsive, foco visible y movimiento reducido.
- `public/jose-gonzalez.jpg`: fotografía extraída del CV proporcionado.

La preferencia de idioma se guarda localmente, con tolerancia a almacenamiento bloqueado. Las pestañas educativas admiten flechas arriba/abajo e Inicio/Fin. Los enlaces de contacto utilizan correo y teléfono, sin formularios ni servicios externos. Las fuentes de Google tienen fuentes de sistema como alternativa.

## Contenido por confirmar

El CV indica Ingeniería del Software en la UMA en curso y recoge el periodo 2022–2024, y Erasmus en TU Dortmund en 2024/2025. No se ha supuesto una graduación posterior. Bachillerato está preparado, pero su centro, modalidad y fechas no aparecen en el CV. Alemán conserva el estado «C1 en proceso». Full Stack y Machine Learning son el enfoque solicitado; no se han inventado proyectos, experiencia profesional, frameworks dominados ni métricas de habilidades.

Actualiza los objetos `es` y `en` conjuntamente al incorporar nuevos datos. El teléfono y correo del CV están incluidos como contenido visible.

## Estado de comprobación

Dependencias instaladas con autorización y versiones fijadas en `package-lock.json`. La auditoría de npm durante la instalación informó de cero vulnerabilidades conocidas. La comprobación de TypeScript y el build de producción se completaron correctamente. El sitio no está publicado.

Pendiente de comprobación en navegador: cambio de idioma y persistencia, enlaces del índice y contacto, pestañas con ratón y teclado, y distribución móvil y escritorio.
