# Informe comparativo de portfolios de desarrolladores

**Fecha de consulta: 6 de septiembre de 2026.**

**Conclusión principal:** para tu perfil Full Stack y aprendizaje automático, la mejora con más valor es incorporar proyectos que demuestren lo que sabes hacer. La identidad visual ayuda a recordar una candidatura; los ejemplos de trabajo, las decisiones explicadas y los resultados permiten evaluarla.

## 1. Alcance y límites del análisis

Se ha inventariado el [repositorio developer-portfolios de Emma Bostian](https://github.com/emmabostian/developer-portfolios) y consultado la página inicial de **cada uno de sus 1.983 enlaces**. El contador escrito en el README anuncia 1.981; el inventario extraído contiene 1.983 entradas con URL distintas. Se conserva una copia del README utilizado para poder reproducir el recuento.

La revisión tiene dos capas:

1. **Cobertura automatizada de todos los enlaces:** respuesta HTTP, redirección, título, descripción, texto del HTML, enlaces sociales y menciones relacionadas con proyectos, experiencia, formación y otras categorías.
2. **Lectura cualitativa de una selección intencional:** perfiles orientados a empleo, diseño, desarrollo creativo, investigación, escritura y plantillas. Se inspeccionaron también en navegador algunas portadas. Esta selección sirve para contrastar enfoques; no es una muestra aleatoria ni un ranking de los mejores sitios.

**No se han evaluado visualmente los 1.983 portfolios ni probado todas sus interacciones.** No se han enviado formularios, usado chatbots ni comprobado todos los enlaces internos. Tampoco se han medido conversiones, rendimiento real de usuarios ni cumplimiento completo de accesibilidad. Las cifras siguientes son señales del HTML recibido, no porcentajes de calidad.

| Resultado de la consulta | Entradas | Interpretación |
|---|---:|---|
| Enlaces inventariados y consultados | 1.983 | Cobertura de todas las entradas extraídas |
| Respuesta HTTP 200 | 1.937 | El servidor entregó contenido; no garantiza un portfolio funcional |
| HTML con al menos 200 caracteres de texto extraído | 1.276 | Base empleada para contar patrones |
| HTTP 200 con menos de 200 caracteres de texto | 661 | Incluye aplicaciones que necesitan JavaScript; no significa que estén vacías en navegador |
| Sin respuesta HTTP utilizable | 31 | Errores de conexión, certificado, DNS o tiempo de espera |
| Otras respuestas HTTP | 15 | 3 de tipo 403, 3 de tipo 404, 5 de tipo 429, 2 errores 500/503 y 2 problemas de redirección |

El escaneo utilizó 24 consultas concurrentes como máximo, un tiempo de espera de 9 segundos por operación y un límite de 1,2 MB de HTML por respuesta. Cuatro respuestas alcanzaron el límite de lectura. Los fallos son observaciones desde este entorno, no una declaración de que esos sitios estén caídos para todo el mundo. No se sortearon bloqueos ni se reintentaron las respuestas 429.

Las búsquedas de palabras favorecen contenido inglés y, parcialmente, español y alemán. Pueden detectar una mención dentro de un párrafo sin que exista una sección con ese nombre; también pueden omitir sinónimos, contenido cargado después o páginas interiores. El texto extraído puede incluir elementos ocultos por CSS. Los HTTP 200 no se han validado manualmente uno a uno para excluir dominios aparcados o contenido que haya cambiado de propósito.

## 2. Elementos comunes

Porcentajes sobre las **1.276 respuestas con suficiente texto HTML**. Una ausencia significa «no detectado por este método», no «inexistente».

| Señal observada | Sitios | Porcentaje | Lectura práctica |
|---|---:|---:|---|
| Mención a proyectos o trabajo realizado | 1.127 | 88,3 % | El trabajo demostrable es un componente central |
| Enlace a GitHub | 1.118 | 87,6 % | Es frecuente facilitar acceso al código o al perfil técnico |
| Enlace a LinkedIn | 1.045 | 81,9 % | Se conecta la web con la trayectoria profesional |
| Presentación o sección About | 1.012 | 79,3 % | El visitante necesita entender quién está detrás |
| Contacto o invitación a contactar | 932 | 73,0 % | La web suele facilitar un siguiente paso |
| Habilidades o tecnologías | 860 | 67,4 % | Sirven para situar el perfil, aunque por sí solas no prueban dominio |
| Experiencia | 802 | 62,9 % | Aporta contexto y continuidad al trabajo |
| Enlace de correo `mailto:` | 693 | 54,3 % | Contacto directo, sin obligar a usar un formulario |
| Blog, artículos o publicaciones | 607 | 47,6 % | Escribir puede demostrar capacidad de explicar |
| CV o résumé | 584 | 45,8 % | Complementa la exploración de la web |
| Formación | 485 | 38,0 % | Relevante según la etapa profesional |
| Casos de estudio mencionados expresamente | 102 | 8,0 % | Oportunidad para explicar proyectos con profundidad |
| Testimonios mencionados expresamente | 90 | 7,1 % | No son un requisito universal |

**Lo frecuente no es automáticamente lo mejor.** El bajo recuento de “case study” no demuestra que el resto no explique sus proyectos. Sí sugiere que conviene revisar la profundidad del contenido y no limitarse a contar tarjetas o tecnologías.

### La estructura que mejor orienta al visitante

En los ejemplos revisados con más detalle se repite una secuencia útil: identidad y especialidad, evidencia de trabajo, trayectoria y contacto. La biografía personal y la escritura amplían la imagen del profesional, pero no necesitan ocupar el primer plano en todas las candidaturas.

La presentación de [Brittany Chiang](https://brittanychiang.com/) relaciona su especialidad con experiencia, proyectos y artículos. Su portada de escritorio separa la identificación y navegación del contenido, creando una jerarquía clara. Mi interpretación es que lo más transferible es esa organización, no copiar su paleta o distribución exacta.

## 3. Referencias que merece la pena estudiar

Las siguientes observaciones describen lo visto en las fuentes, seguidas de una recomendación editorial. No verifican de forma independiente las afirmaciones profesionales de sus autores.

| Referencia | Elemento destacable | Qué puedes aplicar | Límite o cautela |
|---|---|---|---|
| [Brittany Chiang](https://brittanychiang.com/) | Especialidad clara; experiencia y proyectos acompañados de tecnologías, enlaces y contexto | Relacionar cada competencia con trabajo concreto; reservar detalles adicionales para un archivo o CV | La trayectoria de una persona sénior no debe trasladarse artificialmente a un perfil que empieza |
| [Adham Dannaway](https://www.adhamdannaway.com/) | La portada comunica dos vertientes, diseño y desarrollo, mediante un retrato dividido y mensajes breves | Explicar tus dos áreas, Full Stack y ML, con una propuesta comprensible y un proyecto que las conecte | No necesitas reproducir el retrato dividido: conserva tu identidad camel |
| [Portafolio de Adham](https://www.adhamdannaway.com/portfolio) | Trabajos identificados por el tipo de problema o producto, con acceso a casos de estudio | Dar un nombre comprensible a cada proyecto y permitir profundizar | Evitar una galería bonita donde no se entienda tu aportación |
| [Bruno Simon](https://bruno-simon.com/) | Mundo 3D con vehículo; el propio sitio demuestra desarrollo creativo. Ofrece opciones de sonido, calidad y controles | Añadir una demostración interactiva pequeña si prueba una capacidad relevante | Explorar un mundo requiere más esfuerzo que leer un proyecto. Para tu objetivo, sería un complemento opcional |
| [Lee Robinson](https://leerob.io/) | Biografía breve, notas y artículos como evidencia de pensamiento técnico | Publicar una explicación de un problema que hayas resuelto | Su concisión se apoya en una trayectoria reconocible; no justifica omitir pruebas de trabajo en tu caso |
| [Zangwei Zheng](https://zangwei.dev/) | Une investigación y desarrollo con proyectos, publicaciones y enlaces a código | Separar aplicación, experimento y resultado; enlazar repositorio y evaluación | No necesitas su volumen de secciones académicas si no tienes ese contenido |
| [Rafael Santana](https://www.rafaelsantana.dev/) | Proyectos con reto, tecnologías, imágenes y enlaces de uso | Explicar para quién existe una aplicación y qué necesidad resuelve | Una lista extensa necesita selección para que lo principal no se pierda |
| [Patrick Müller](https://p-mueller.dev/) | Idiomas, temas, trayectoria académica/laboral y una interacción para explorar tecnologías | Mantener traducciones coherentes y aportar contexto a la formación | No obligar a jugar o personalizar la web para entender las habilidades |
| [Jason Cameron](https://jsn.cam/) | Proyectos destacados con explicaciones técnicas, navegación hacia escritura y contacto | Utilizar el propio software como evidencia y diferenciar proyecto de demostración | Las afirmaciones de adopción o impacto deben poder justificarse; el análisis aquí se basa en su HTML accesible |
| [Aaabad Touk](https://aaabadcode.com/) | La entrada incluye una interfaz de preguntas junto a accesos a perfil, proyectos y habilidades | Una interfaz conversacional puede ser una demo complementaria de IA | No hacer que alguien tenga que preguntar para obtener tu CV o tus proyectos; no se probaron sus respuestas |
| [Sawad, listado como Aaaabad Ahmed](https://sawad.framer.website/) | Presenta enlaces para usar la plantilla y contenido de demostración | Puede servir para estudiar composición y agrupación de contenido | No tratar datos de plantilla como evidencia profesional; eliminar correos de ejemplo y textos sin personalizar |

La selección cubre enfoques diferentes. La portada de un investigador, la de una persona que vende diseño y una experiencia 3D responden a objetivos distintos; no hay una única composición ganadora.

**Comprobación visual realizada:** portadas de Brittany Chiang, Adham Dannaway, Bruno Simon y Soumyajit Behera. En este último se confirmó que el navegador sí muestra una portada con identidad, navegación y una ilustración aunque el HTML inicial apenas contenga texto. No se probaron todas sus rutas, animaciones, controles ni versiones móviles.

## 4. Elementos que hacen destacar un portfolio

### A. Mostrar pruebas, no solo declarar habilidades

Una tarjeta “Python, React, YOLO” comunica etiquetas. Un proyecto que explique el problema, tu responsabilidad, una decisión técnica y el resultado permite evaluar tu trabajo. Los ejemplos de Brittany, Rafael y Zangwei muestran distintas formas de conectar contenido profesional con artefactos consultables.

Mi recomendación es seleccionar entre dos y cuatro trabajos reales. Es una propuesta para tu caso, no una cifra deducida del repositorio. Un proyecto académico bien explicado puede ser más convincente que una aplicación grande cuyo código o finalidad no se entiende.

### B. Explicar la relación entre tus especialidades

Para Full Stack y ML, una aplicación que recibe datos, realiza una inferencia y muestra resultados puede unir ambas áreas. Debe distinguirse qué implementaste tú, qué proviene de una biblioteca y qué modelo utilizaste. Evita que “Full Stack & Machine Learning” parezca una suma de intereses desconectados.

### C. Permitir dos niveles de lectura

Una tarjeta corta orienta rápidamente; una ficha ampliada explica arquitectura, dificultades y resultados. Así, alguien puede valorar el conjunto sin leer un ensayo, y una persona técnica puede profundizar. La navegación y los títulos deben hacer evidente qué es un enlace y qué información contiene.

### D. Usar personalidad con una función

La identidad gráfica puede expresar una especialidad, como en la portada híbrida de Adham. En tu caso, el camel oscuro, los idiomas y la sección sobre deporte ya dan personalidad. Añadir efectos tiene sentido cuando mejora la comprensión o demuestra una habilidad que deseas vender.

### E. Convertir la comunicación en evidencia

La liga de debate y Trinity Grade 8 son detalles concretos de tu perfil. Puedes reforzarlos explicando una decisión técnica con claridad, con un artículo breve o una presentación que ya tengas. No necesitas inventar una sección de blog vacía.

## 5. Cosas a evitar

### Riesgos observados en las fuentes

**Contenido de plantilla sin personalizar.** La página de Sawad contiene referencias a plantillas y un correo de ejemplo. No es prueba de mala fe ni de mala calidad del diseño: es una advertencia sobre el uso de una demo como portfolio terminado. En tu web, elimina los textos “por completar” antes de presentar una versión definitiva. [Fuente](https://sawad.framer.website/).

**Depender completamente de una experiencia especial.** Bruno pide empezar una experiencia con un vehículo y documenta múltiples controles. Eso es coherente con su especialidad. Si tu objetivo es facilitar una evaluación rápida de Full Stack/ML, trasladar ese modelo sin una alternativa directa aumentaría el esfuerzo de acceso. [Fuente](https://bruno-simon.com/).

**Confundir falta de HTML con falta de contenido.** Dos sitios consultados mediante el lector web, Yash Ahire y Soumyajit Behera, devolvieron únicamente el aviso de activar JavaScript. El escaneo detectó otros casos con poco texto inicial. Esto limita una lectura automatizada; no demuestra por sí solo que fallen en un navegador. [Yash Ahire](https://yashahire.info/), [Soumyajit Behera](https://soumyajit.vercel.app/).

**Desatender enlaces y disponibilidad.** Hubo tres respuestas 404 y otros fallos de acceso en la consulta. No son diagnósticos permanentes, pero recuerdan que una buena presentación deja de ayudar si sus enlaces principales no funcionan. El inventario adjunto identifica las entradas afectadas y diferencia errores HTTP de problemas de conexión.

### Recomendaciones editoriales y técnicas

| Evitar | Sustituir por |
|---|---|
| Porcentajes de dominio sin criterio, como “React 90 %” | Contexto: qué has construido, con qué alcance y qué aprendiste |
| Muchas tecnologías sin ejemplos | Agrupaciones pequeñas conectadas con proyectos |
| Proyectos de tutorial presentados como soluciones originales | Atribución y explicación de las mejoras propias |
| Cifras de usuarios, precisión o ahorro sin evidencia | Resultados medidos y condiciones de medición |
| Presentaciones extensas antes de llegar al trabajo | Una introducción breve y proyectos visibles pronto |
| Chatbot o terminal como única navegación | Enlaces convencionales a proyectos, CV y contacto |
| Animación permanente, sonido inesperado o carga ornamental | Movimiento opcional y controles para detenerlo |
| Textos diminutos, foco invisible y estados señalados solo por color | Jerarquía legible, foco perceptible y etiquetas explícitas |
| Bandera como única identificación de un idioma | Nombre del idioma además del símbolo; un idioma no corresponde a un solo país |
| Traducir solo los títulos | Sincronizar proyectos, niveles, fechas, botones y etiquetas de accesibilidad |
| Publicar archivos fuente o asumir que un workflow verde basta | Revisar la URL final y la carga de sus recursos después de desplegar |

Las recomendaciones sobre contraste, foco, navegación, tamaños de pantalla y control del contenido automático se apoyan en la [guía de diseño accesible de W3C WAI](https://www.w3.org/WAI/tips/designing/). No se afirma que los portfolios revisados incumplan esas pautas: no se realizó una auditoría completa.

## 6. Aplicación a tu portfolio

Esta parte se basa en los archivos actuales del proyecto local; no es una auditoría visual del sitio publicado.

### Mantener

- La identidad camel en modo oscuro y la navegación sencilla.
- La presentación en español, inglés y alemán.
- Los enlaces de contacto y las certificaciones lingüísticas específicas.
- El panel educativo y el contexto internacional de Erasmus.
- La comunicación de ideas respaldada por debate y Trinity.
- La sección personal sobre alimentación, deporte y desconexión, con una extensión contenida.

### Cambiar primero

**1. Añadir Proyectos destacados después de la presentación.** Actualmente las secciones muestran competencias, educación, soft skills y vida personal, pero no una colección de proyectos. Es el vacío más relevante respecto a los patrones encontrados.

**2. Preparar un caso Full Stack y uno de ML con trabajo real.** No hace falta construir ambos desde cero si ya tienes trabajos académicos o personales que puedas publicar. Añade una captura, código, instrucciones de ejecución y una explicación de tus decisiones.

**3. Conectar YOLO con evidencia.** Si has trabajado en detección de objetos, documenta el problema, los datos, la variante y versión del modelo, si hubo entrenamiento propio o solo inferencia, y las limitaciones. Cuando existan mediciones, indica precisión, recall, mAP y latencia con su contexto; no uses una cifra aislada como “95 % de precisión”. La [guía de métricas de Ultralytics](https://docs.ultralytics.com/guides/yolo-performance-metrics/) explica por qué distintas métricas describen aspectos diferentes. No se propone inventar resultados ni presentar un modelo preentrenado como desarrollado desde cero.

**4. Añadir un CV descargable actualizado.** El CV inicial ya no refleja todos los cambios que has incorporado a la web. Revisa fechas, GAMIA, Bachillerato y certificaciones antes de enlazarlo.

**5. Resolver contenido pendiente.** En los archivos actuales sigue vacía la ruta de la foto personal y el Bachillerato conserva un mensaje sobre centro y fechas pendientes aunque ya figura el colegio. Sustituye el mensaje por los datos que falten o retíralo; no hay que volver a inventar o inferir fechas.

**6. Revisar móvil y carga real.** Conserva bandera, nombre y nivel, pero permite que el diseño se adapte a un nombre o certificado largo en alemán y al aumento de texto. No fuerces una sola línea si provoca desbordamiento. Optimiza las imágenes de bandera: los PNG locales actuales suman aproximadamente 656 KB para mostrarse a 32 píxeles; una exportación ajustada al tamaño puede reducir ese coste. Esta cifra procede de los archivos locales, no de una medición de rendimiento de la web.

### Orden propuesto

**Presentación y contacto → Proyectos destacados → Habilidades → Educación → Comunicación y otras soft skills → Personal.**

Es una propuesta editorial para orientar la lectura hacia tu trabajo. No se han modificado las secciones del portfolio durante este informe.

### Estructura sugerida para cada proyecto

1. Nombre y una frase sobre el problema que resuelve.
2. Captura o demostración breve.
3. Tu responsabilidad y si fue individual o en equipo.
4. Dos o tres decisiones técnicas con su motivo.
5. Resultado, límites y qué mejorarías.
6. Enlaces a código y demo, cuando estén disponibles.

## 7. Qué llevarte de la comparación

La combinación más adecuada para tu siguiente versión es **la claridad de Brittany, la presentación de un perfil híbrido de Adham y la evidencia técnica de Zangwei**, adaptadas a tu propia experiencia. Bruno es una referencia excelente para una demostración creativa opcional; no es necesario convertir toda la web en una experiencia 3D.

Antes de añadir otra animación o una nueva sección, comprueba si la web permite responder: **qué sabes construir, dónde puedo verlo, qué hiciste tú y cómo puedo contactarte**.

## Anexo de trazabilidad

- `inventario.csv`: una fila por cada uno de los 1.983 enlaces consultados; se puede abrir en una hoja de cálculo.
- `summary.json`: recuentos agregados que sustentan las tablas.
- `source-readme.md`: copia del listado utilizado.
- `audit.jsonl`: observaciones automáticas por entrada, incluidos errores y extractos del HTML.
- `audit.py`: método reproducible de extracción y consulta.

En el CSV, `status=0` significa que no se obtuvo una respuesta HTTP; los campos vacíos indican que no se pudo analizar esa señal. `False` significa “no detectado en el HTML recibido”. `True` significa presencia de una coincidencia, no validación de la calidad o veracidad del contenido. Las URL finales permiten identificar redirecciones.

Los ejemplos se seleccionaron para contrastar enfoques, no para clasificar a sus autores. No se ha verificado la trayectoria, las métricas o las certificaciones que afirman tener, ni se atribuye una mayor tasa de contratación a un diseño concreto.
