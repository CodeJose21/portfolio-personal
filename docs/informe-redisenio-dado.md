# Informe del rediseño: portfolio como dado

## Resultado

Se ha sustituido la página de secciones consecutivas por un dado tridimensional. La cara inicial presenta el contacto y los idiomas. La lista lateral sigue el orden de los puntos del 1 al 6. El mapa del dado es un grupo de seis botones unidos que permite acceder directamente a cualquier cara y resalta la seleccionada. Se han retirado los controles de anterior y girar de la derecha.

| Posición inicial | Contenido | Puntos |
| --- | --- | --- |
| Frontal | Presentación, contacto e idiomas | 1 |
| Izquierda | Proyectos y habilidades técnicas | 2 |
| Derecha | Experiencia laboral | 5 |
| Superior | Formación | 3 |
| Inferior | Soft skills | 4 |
| Trasera | Fuera de la oficina | 6 |

Las caras opuestas suman siete. Las posiciones describen el dado respecto de su orientación inicial. El orden de la lista es contacto → proyectos → formación → soft skills → experiencia → fuera de la oficina. La disposición física de las caras se conserva.

Se conserva el camel oscuro: fondo marrón casi negro, superficies cálidas, texto marfil y acentos camel. Las tarjetas utilizan bordes finos y jerarquía tipográfica. Las tecnologías aparecen en un panel destacado con etiquetas.

## Contenido conservado y pendiente

Se mantienen español, inglés y alemán, LinkedIn y GitHub, idiomas con banderas circulares y nivel alineado con el nombre, formación —incluido el máster juvenil— y comunicación de ideas con debate y Trinity. Las habilidades técnicas se conservan dentro de proyectos. La sección personal conserva el mensaje sobre desconectar, alimentación, deporte y espacio para una fotografía.

Por indicación del usuario, hay tres tarjetas de proyecto y una de experiencia vacías, preparadas para título, descripción y tecnologías. «Título», «Descripción» y «Por completar» son etiquetas visibles de campos pendientes. No se han inventado empleos ni proyectos.

## Implementación y organización

- **React y TypeScript:** componentes separados y tipos que limitan las caras y exigen textos en los tres idiomas.
- **Redux Toolkit:** estado del idioma, cara activa y selección educativa. El bloqueo temporal del giro es local al componente.
- **CSS 3D:** seis superficies cuadradas con rotaciones y desplazamiento en profundidad; el contenedor gira sobre X e Y con perspectiva. No se ha añadido WebGL ni una biblioteca de animación.
- **Contenido separado:** datos editables en `src/content/`, independientes de la geometría y presentación.
- **Comentarios:** explican geometría, edición de tarjetas y coordinación entre animación y foco.

No se han descargado ni añadido dependencias para este rediseño.

| Archivo | Responsabilidad |
| --- | --- |
| `src/App.tsx` | Cabecera, selector de idioma y composición |
| `src/components/CubePortfolio.tsx` | Navegación, caras, transición y foco |
| `src/components/FaceContent.tsx` | Contenido de cada cara |
| `src/components/WorkCard.tsx` | Tarjeta de proyecto o experiencia |
| `src/components/DiePips.tsx` | Puntos del dado |
| `src/content/cube.ts` | Orientaciones y textos de interfaz |
| `src/content/work.ts` | Proyectos y experiencia |
| `src/store/index.ts` | Estado global y acciones tipadas |
| `src/styles.css` | Tema, geometría y adaptación |

Se reutilizan los componentes educativos y de contacto. La configuración de compilación y el workflow de Pages se conservan.

## Rellenar proyectos y experiencia

Edita `src/content/work.ts`. Ejemplo ilustrativo que no se ha añadido al portfolio:

```ts
{
  id: 'project-1',
  title: { es: 'Mi proyecto', en: 'My project', de: 'Mein Projekt' },
  description: {
    es: 'Qué problema resuelve y cuál fue mi contribución.',
    en: 'The problem it solves and my contribution.',
    de: 'Das gelöste Problem und mein Beitrag.',
  },
  technologies: ['React', 'TypeScript'],
}
```

Duplica entradas con otro `id` para añadir tarjetas. `projects` corresponde a proyectos y `experience` a experiencia. Las tecnologías se comparten entre idiomas; títulos y descripciones se traducen explícitamente. No hay traducción automática ni formulario de administración.

## Accesibilidad y adaptación

Las caras 3D se montan únicamente durante las animaciones, con `inert`, `aria-hidden` y sin eventos de puntero. En reposo se muestra una superficie plana interactiva: esto evita que el contenedor 3D intercepte los clics sobre los botones visibles. Al terminar el giro, se anuncia la cara seleccionada y se dirige el foco a su panel. Los controles tienen etiquetas y foco visible. Durante la transición se ignoran nuevas órdenes para evitar giros superpuestos. La preferencia de movimiento reducido elimina la animación.

La formación se selecciona con botones HTML normales: clic, Tab, Enter y Espacio. Se ha eliminado la gestión personalizada de flechas y referencias de botones. No hay controles adicionales de anterior y siguiente. Al cambiar de idioma, el dado simula un lanzamiento de 1,25 segundos con elevación, vueltas completas y rebote, y termina en la misma cara. Se mantienen la etapa educativa y el contenido seleccionado. Los cambios rápidos de idioma sustituyen el lanzamiento anterior; con movimiento reducido el cambio es inmediato. Las caras mantienen la forma cuadrada: cuando el contenido supera el espacio disponible, se desplaza dentro del panel. En pantallas estrechas, el índice se coloca encima del dado. Puede ser necesario deslizar dentro de una cara para leer todos sus datos.

## Compilar y ejecutar

Con Node.js 22.12+ y npm, desde la carpeta del proyecto:

```sh
npm ci
npm run dev
```

`npm ci` instala las versiones del archivo de bloqueo; no hace falta repetirlo si las dependencias ya están instaladas y no han cambiado. Para generar y revisar producción:

```sh
npm run build
npm run preview
```

Abre la dirección de preview que muestre Vite con `/portfolio-personal/`. En PowerShell puedes usar `npm.cmd` si se bloquea `npm.ps1`.

Para publicar, sube los cambios a `main` y utiliza el workflow existente. Debe desplegar `dist/`, nunca los archivos fuente. Se mantiene [la dirección actual de GitHub Pages](https://codejose21.github.io/portfolio-personal/). Este trabajo no incluye un despliegue ni un push al repositorio remoto.

## Verificaciones y límites

TypeScript y la compilación de producción han terminado correctamente. Se ha abierto la aplicación local en navegador y revisado las caras, la navegación y los atributos que excluyen las caras ocultas. No se han observado errores de consola en la revisión realizada.

La comprobación visual se ha realizado en el navegador integrado a 639 píxeles de ancho. La adaptación a otros tamaños está implementada, pero no equivale a una validación en todos los navegadores o dispositivos. Queda pendiente una revisión en móvil físico y una auditoría completa con lector de pantalla.

La cara activa vuelve a contacto al recargar; el idioma conserva la preferencia existente. Las caras no tienen URL independiente. Las tipografías utilizan Google Fonts con alternativas del sistema. Proyectos, experiencia y fotografía personal quedan pendientes de que el propietario complete los datos.
