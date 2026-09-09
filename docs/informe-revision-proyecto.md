# Revisión del portfolio

Fecha: 8 de septiembre de 2026.

## Valoración

La separación entre contenido, componentes y estado era una buena base. Los problemas principales estaban en la interacción: información revelada solo al pasar el cursor, una experiencia laboral de relleno y navegación del dado que mezclaba varios mecanismos de animación. La refactorización conserva el concepto visual, las traducciones, los proyectos reales y la elección original de React, TypeScript y Redux.

La estructura resultante es adecuada para este portfolio: los contenidos se editan en archivos tipados; las secciones no conocen la geometría del dado; la animación es una capa decorativa; y Redux se ocupa de un estado que ahora está sincronizado con la URL.

## Hallazgos contrastados y cambios

| Hallazgo | Valoración y solución |
| --- | --- |
| Experiencia laboral vacía | Confirmado. Se eliminó la entrada de relleno y se muestra un mensaje específico. Solo se renderizan entradas con título y descripción en el idioma activo. |
| Soft skills por hover | Confirmado en el código revisado. Ahora usan `details` y `summary`: título y logro visibles, descripción desplegable con ratón, tacto o teclado. Se conserva el contenido actual, incluida resiliencia. |
| Accesibilidad del dado | Se separaron geometría e interacción. Las seis secciones reales permanecen montadas; el modo lineal las muestra todas. En modo dado las inactivas usan `hidden`, y el panel desplazable es accesible por teclado. |
| Enlaces e historial | El índice utiliza enlaces a secciones. La URL conserva cara, idioma y modo de lectura. Atrás, adelante y recarga restauran la navegación. |
| Responsive de tablets | La regla fija de 610 px era innecesaria; por sí sola no demostraba desbordamiento en todos esos tamaños. Se sustituyó por dimensiones fluidas y se comprobaron anchos de móvil, tablet y escritorio. |
| Sincronización de animaciones | Se eliminó la combinación de transición CSS, temporizador y bloqueo manual. Navegación y lanzamiento por idioma comparten Web Animations API y su promesa de finalización. Una nueva acción cancela la anterior. |
| Contenido sin uso | Se retiraron `hardSkills.groups`, su tipo y los textos obsoletos `toolbox`, posiciones y controles de giro. No se ha vuelto a mostrar la sección que el propietario había pedido quitar. |
| Identificadores de educación | `EducationId` se deriva de las entradas españolas; las traducciones inglesa y alemana utilizan ese tipo. No hay una lista de IDs separada en los componentes. |
| Iconos de soft skills | Se seleccionan mediante una propiedad opcional tipada y un mapa de iconos. Se eliminó el cast que daba por válido cualquier ID. |
| Google Fonts | Se eliminó el `@import` remoto. Las fuentes son del sistema, con un aspecto que puede variar ligeramente entre dispositivos. |

## Interacción y diseño

Se conserva la paleta camel oscura, elevando el contraste del texto secundario, los tamaños pequeños y el área de los controles. La selección del índice es más visible. El selector «Vista dado / Vista lineal» permite elegir entre la navegación espacial y una lectura continua.

Las animaciones no duplican formularios, botones ni identificadores HTML. Solo dibujan superficies decorativas con los puntos y nombres de las caras. El contenido real permanece en una capa plana: esto conserva la solución al fallo anterior de clics interceptados por el cubo 3D. La selección de formación y los desplegables no se desmontan en cada giro.

El cambio de idioma sigue simulando un lanzamiento y aterriza en la cara seleccionada. Con movimiento reducido, la actualización es inmediata. Si esa preferencia cambia durante un giro o la pestaña queda oculta, se cancela la animación y se muestra el contenido sin esperar a un temporizador.

## Responsabilidades de los archivos

- `src/components/CubePortfolio.tsx`: composición, navegación visible y foco.
- `src/hooks/useCubeMotion.ts`: único responsable de ejecutar y cancelar animaciones.
- `src/hooks/useLocationNavigation.ts`: restauración de navegación desde el navegador.
- `src/store/index.ts`: estado tipado y sincronización de las acciones con el historial.
- `src/components/FaceContent.tsx`: elección del contenido de cada sección.
- `src/components/SoftSkills.tsx`: desplegables nativos de habilidades.
- `src/content/locales/`: contenido y estructura de traducciones.
- `src/content/work.ts`: proyectos, estados y experiencia publicable.
- `tests/portfolio.spec.ts`: pruebas de comportamiento, accesibilidad y tamaños.

## Herramientas de calidad

Se añadieron únicamente dependencias de desarrollo: ESLint y su configuración JavaScript, TypeScript ESLint, React Hooks, globals, Playwright y la integración de axe. No se añadieron dependencias de ejecución a la web. Node.js 22.13 o posterior es necesario para la configuración de ESLint utilizada; se recomienda Node.js 22 LTS actualizado o 24 LTS.

Los comandos son `npm run lint`, `npm run build` y `npm test`. Playwright necesita descargar Chromium con `npx playwright install chromium` antes del primer uso. El workflow ejecuta controles antes de publicar y utiliza la versión compilada con la ruta base de GitHub Pages.

Las pruebas incluyen navegación por teclado, URL directa e historial; cambios de idioma y conservación de la etapa educativa; interrupciones de giros; mensajes de experiencia y estados de proyectos; movimiento reducido; vista lineal; apertura y cierre táctil de las soft skills; axe en las seis caras y vista lineal; y ausencia de desbordamiento en seis anchos entre 320 y 1440 px. Las capturas se adjuntan al informe de Playwright para revisión visual.

## Resultado de la validación final

- ESLint: correcto, sin advertencias.
- TypeScript y compilación: correctos.
- Playwright: **15 pruebas superadas** sobre la versión compilada bajo `/portfolio-personal/`.
- Axe: sin infracciones detectadas en las comprobaciones WCAG A/AA automatizadas de las seis caras y la vista lineal.
- Diseño: comprobado sin desbordamiento horizontal a 320, 390, 680, 768, 1024 y 1440 px, recorriendo las seis caras en español, inglés y alemán.

La primera ejecución contra producción detectó que `vite preview` servía desde `/` mientras los recursos compilados usaban `/portfolio-personal/`. Se corrigió `vite.config.ts` para que preview use la misma base que build; después pasaron las 15 pruebas. La configuración de desarrollo sigue utilizando `/`.

## Límites de la revisión

Una prueba automática de axe no certifica toda la accesibilidad: conviene una revisión manual con lector de pantalla y dispositivos físicos. La suite usa Chromium; no equivale a comprobar Safari y Firefox. Las capturas permiten inspección, pero no constituyen una prueba de regresión visual contra imágenes aprobadas.

El contenido permanece en el DOM una vez que React arranca y hay enlaces reales, pero el sitio sigue siendo una aplicación renderizada en el cliente. No se ha añadido prerenderizado ni se garantiza cómo lo indexa cada buscador. La vista lineal mejora la lectura; una estrategia de SEO estático puede valorarse aparte si se convierte en un objetivo prioritario.

La selección educativa se mantiene durante la sesión de la aplicación, pero no se codifica en la URL ni se guarda tras recargar. La URL conserva la cara, el idioma y la vista. No hay nuevos logros, empleos ni métricas inventados. Los cambios se han realizado localmente y no se ha ejecutado un push ni un despliegue remoto.
