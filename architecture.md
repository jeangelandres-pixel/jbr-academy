# Arquitectura v1 — Sitio Web JBR Academy
_Estado: **V1 TERMINADA Y FUNCIONAL** (2026-08-24) — corriendo en `/web/site/` +
`/web/server.py`. Bilingüe (ES/EN), con backend de leads, panel admin, y
carrusel rotativo. Todo probado end-to-end. Pendiente solo de dominio/hosting
real para publicar — ver `/web/tech-stack.md` y la sección "Cómo publicar" abajo._
_Basada en `/web/discovery.md` + revisión de Instagram @jbracademy (2026-08-24)._

## Resumen ejecutivo V1 (2026-08-24)
- **6 páginas públicas** bilingües (ES/EN, selector visible en el header):
  Home, Free Tryout, Programas & Coaches, Contacto, Uniformes, Conócenos.
- **Backend real** (`/web/server.py`, solo librería estándar de Python, sin
  instalar nada): sirve el sitio + API `/api/leads` y `/api/uniform-orders`
  que guardan cada registro en `/web/data/*.json`. Reutilizable como base del
  backend de la futura app.
- **Panel admin** (`/web/site/admin.html`, sin link público) para ver y
  exportar a CSV los leads y pedidos de uniforme.
- **Sistema de traducción** (`js/i18n.js` + `js/i18n-data.js`): diccionario
  único ES/EN, aplicado vía atributos `data-i18n` en el HTML. Editar un texto
  en cualquier idioma = cambiar una línea en `js/i18n-data.js`, sin tocar HTML.
- **Waiver legal** en Free Tryout — BORRADOR, pendiente de revisión por
  abogado en Florida antes de publicar (ver aviso en la propia página).
- Probado: navegación completa, ambos formularios (con guardado real
  verificado en `/web/data/`), cambio de idioma con persistencia, vista móvil
  (375px), sin errores de consola en ninguna página.

## Principio rector
Mobile-first, rápida, profesional, enfocada en UNA conversión principal: registro
al Free Tryout (más una conversión secundaria de ingreso, Uniformes). Cada página
existe para mover al visitante hacia una de esas dos acciones, o a construir
confianza (Conócenos), no para "tener presencia". 6 páginas en v1 (se amplió de
4 a 5 el 2026-08-24 al agregar Uniformes, y de 5 a 6 el mismo día al agregar
Galería, renombrada a **Conócenos** más tarde el mismo día — ver sección de
reorganización abajo) — el resto de la visión final se agrega cuando haya datos
de comportamiento real (Google Analytics) que lo justifiquen.

## Reorganización Home ↔ Conócenos (2026-08-24)
Por pedido del fundador, "Galería" se renombró a **Conócenos** (mejor nombre
para una página que ya no es solo fotos, sino coaches + historias de éxito +
visitas de profesionales + fotos/videos + testimonios). Además:
- La sección de **Coaches** se movió de la Home a Conócenos (ahora es la
  primera sección de esa página — establece autoridad antes de las historias).
- La Home ahora abre, después del hero, con un teaser de **Historias de Éxito**
  (Xavier Gori, Willson &amp; William Contreras, Alberto Castillo) con link
  "Conócenos Más" hacia la página completa — un gancho más universal que bios
  de coaches para un visitante que recién llega.

## Paleta de marca (actualizado 2026-08-24)
Por pedido del fundador, el acento dorado/amarillo se reemplazó por blanco en
todo el sitio. Paleta actual: azul marino (`--navy #0a1f44`) + blanco, con navy
también como color de texto/borde en superficies claras para mantener contraste
(un acento blanco puro sería invisible sobre fondo blanco). Logo real incorporado
en un badge circular blanco en el header (más visible contra el fondo navy) —
mismo tratamiento en las 6 páginas.

## Sitemap v1

### 1. Home (`/`)
**Objetivo:** que un padre que llega desde Instagram/Google entienda en 5 segundos
qué es JBR **como academia en general** — no un equipo o una edad específica — y
presione el CTA de tryout. **Corrección del fundador (2026-08-24):** la Home debe
representar a la academia completa, no a un solo equipo/grupo de edad. No se usa
la foto del equipo 11u (ese equipo ya no está en la academia — información
desactualizada, se retira como activo).
- Hero: identidad de marca de JBR (logo, colores, tono "Train like the pros")
  + propuesta de valor general de la academia (6 años formando jugadores en
  Orlando/Kissimmee) + CTA principal "Regístrate a tu Tryout Gratis"
- **Teaser de Historias de Éxito** (actualizado 2026-08-24, reemplaza la franja
  de coaches que se movió a Conócenos): Xavier Gori, Willson &amp; William
  Contreras, Alberto Castillo — con link "Conócenos Más"
- Resumen de programas por edad (4-9 y 10-16 años — sin Elite Training, pausado)
  con link a página 3
- Testimonios cortos (pendiente recopilar 2-3 citas reales de padres — hoy no
  tenemos ninguna documentada, ver Sección "Gaps" abajo)
- CTA secundario: WhatsApp directo + teléfono clicable (407-686-4956)

### 2. Free Tryout (`/tryout`) — página de conversión principal
**Objetivo:** registrar al padre sin fricción. Es la página más importante del sitio.
- Qué es el tryout, qué traer, cuánto dura
- FAQ corta integrada (no página aparte en v1): "¿tiene costo?", "¿qué pasa después?",
  "¿mi hijo necesita experiencia previa?"
- **Formulario:**
  - Nombre del padre/madre
  - Teléfono con WhatsApp
  - Nombre y edad del niño/a
  - **Auto-asignación de horario según edad** (no calendario abierto):
    - 4-9 años → Martes y Viernes 6:00 PM
    - 10-16 años → Martes 7:30 PM o Viernes 6:00 PM
  - Campos ocultos: UTM/fuente
- Confirmación en pantalla + **envío real por WhatsApp** (implementado 2026-08-24 —
  WhatsApp Business confirmado, el formulario arma el mensaje con día/hora asignado
  y lo abre listo para enviar al 407-686-4956)
- **Waiver/exención de responsabilidad** (agregado 2026-08-24, pedido del
  fundador): caja de texto con el waiver + checkbox obligatorio ("He leído y
  acepto...") antes de poder enviar el formulario. Incluye cláusula de
  autorización médica de emergencia y de uso de fotos/video con fines
  promocionales. El estado de aceptación se incluye en el mensaje de WhatsApp.
  **⚠️ El texto es un BORRADOR de referencia — NO es un documento legal válido.
  Debe ser redactado o revisado por un abogado en Florida antes de publicar el
  sitio** (las exenciones para menores tienen reglas específicas por estado y
  no siempre son ejecutables tal cual redactadas). Esto se muestra como aviso
  visible en la propia página.

### 3. Programas & Coaches (`/programas`)
**Objetivo:** dar la información que un padre indeciso necesita antes de registrarse,
y reforzar autoridad con las credenciales de los coaches.
- Tabla de horarios por edad (igual a `/company/programs.md`) — solo 4-9 y 10-16
  años. Elite Training NO aparece (pausado, ver `/company/programs.md`)
- Bios de los 3 coaches: Tomas Perez y Erick Castillo con credenciales completas
  (MLB, LVBP, World Classic); Gilbert Rondon agregado 2026-08-24 — bio pendiente
  de recibir (ver `/company/team.md`)
- Fotos del entrenamiento (usar contenido real de Instagram, con permiso implícito
  al ser cuenta propia de la academia) — pendiente, ver gaps

### 4. Contacto & Ubicación (`/contacto`)
**Objetivo:** remover la última duda y facilitar el contacto directo para quien
no quiere llenar el formulario.
- Mapa embebido: South Orange Little League Complex, 11800 S Orange Ave, Orlando, FL 32824
- WhatsApp (canal confirmado, WhatsApp Business), teléfono clicable 407-686-4956
- Link a Instagram @jbracademy
- Repetir CTA de Free Tryout

### 5. Uniformes (`/uniformes`) — agregada 2026-08-24 por pedido del fundador
**Objetivo:** segunda vía de conversión/ingreso (merchandising, ver
`/company/products.md`), no solo informativa.
- **Galería de la mascota luciendo los 3 uniformes** (2026-08-24, corrección del
  fundador: solo mascota, NO fotos de equipo — los equipos actuales son nuevos y
  aún no tienen sesión de fotos). Nombres alineados a convención de beisbol:
  - **Home** (antes "Marino & Blanco") — uniforme de juegos en casa
  - **Away** (antes "Gris & Negro") — uniforme de juegos de visitante
  - **Práctica** (antes "Azul & Negro") — uniforme de entrenamiento
  - Las 3 fotos usan un recorte de proporción fija (`.uniform-photo`,
    `aspect-ratio: 3/4` + `object-fit: cover`) para que se vean del mismo
    tamaño — antes la foto gris se veía más pequeña por tener una proporción
    de imagen original distinta
- CTA directo "Preguntar por WhatsApp" para quien no quiere llenar formulario
- **Planilla de pedido** con los datos que pediría un proveedor de sportswear:
  nombre del jugador, número, **nombre/apellido para imprimir en la camiseta**
  (agregado 2026-08-24), grupo/programa, posición, talla, piezas necesitadas,
  cantidad, teléfono, notas — al enviar arma un mensaje de WhatsApp prellenado
  (mismo patrón que el formulario de Free Tryout)
- Precio por set: pendiente de definir con el proveedor real (no confirmado aún —
  ver `/company/products.md`)

### 6. Conócenos (`/conocenos`) — agregada como "Galería" 2026-08-24, renombrada
mismo día por pedido del fundador ("hay distintas cosas, no solo fotos")
**Objetivo:** página de prueba social — coaches, historias de éxito, visitas de
profesionales, fotos, videos y testimonios de padres, para construir confianza
antes del Free Tryout.
- **Nuestros Coaches** (movido aquí desde la Home 2026-08-24): las 3 fichas de
  coach completas (Tomas Perez, Erick Castillo, Gilbert Rondon)
- **Historias de Éxito — "De JBR al Siguiente Nivel"** (egresados a nivel
  universitario/profesional): Xavier Gori — comprometido con Southeast Arkansas
  College (confirmado vía Instagram, post con 255 likes/46 comentarios, con
  palabras del propio fundador)
- **Visitas Especiales — "Profesionales que Han Entrenado en JBR"** (distinto de
  lo anterior: son ex-peloteros que vinieron a entrenar/visitar, no egresados de
  JBR — aclarado por el fundador 2026-08-24):
  - Alberto Castillo, ex-catcher de MLB, confirmado vía highlight "MLB y JBR⚾️"
  - **Willson &amp; William Contreras**, jugadores de MLB — entrenaron en JBR
    durante el off-season, **confirmado directamente por el fundador**
    (2026-08-24). Foto pendiente de subir a `/JBR claude/assets/historias-exito/`.
- **Fotos & Videos**: 13 fotos reales — 7 de la fiesta de 2do Aniversario 2022
  (evento/premiación, sin riesgo de quedar desactualizadas), 2 de acción/equipo
  genéricas, y **4 fotos de equipos campeones 2026** ("USA Travel Ball State/World
  Championships") que el fundador confirmó que **son de rosters anteriores pero
  se pueden usar igual** (a diferencia del caso del equipo 11u, que se pidió
  retirar específicamente de la Home) — aclaración importante: fotos de
  archivo/histórico en una página de "Conócenos" son aceptables aunque el roster
  haya cambiado; lo que se evitó fue usar un equipo desactualizado para
  representar la identidad *actual* de la academia en la Home.
- Sección Testimonios de Padres: grid ready-to-fill, hoy con placeholders (no
  se ha recopilado ningún testimonio real todavía)
- CTA final repitiendo Free Tryout

## vFuture (no construir ahora, sin evidencia de necesidad)
FAQ dedicada, "Sobre Nosotros" dedicada, página de Torneos/Resultados — separar
solo si Google Analytics muestra que el tráfico las busca por separado.

## Contenido que YA existe y se reutiliza (no hay que producir desde cero)
- Fotos de coaches con uniformes MLB/LVBP (del highlight "Our coaches")
- Copy ya probado en flyers: "Train like the pros. Play like the best.",
  "Today's effort, tomorrow's future"
- **Logo real de JBR Academy** — incorporado 2026-08-24 en
  `/web/site/assets/logo.png`, en badge circular blanco (agrandado a 76px por
  pedido del fundador) en el header de las 6 páginas
- **Mascota oficial** (león con uniforme JBR, 3 variantes de color) —
  incorporada 2026-08-24 en `/web/site/assets/mascot-{navy,blue,gray}.jpg`,
  usada en la galería de la página Uniformes con nombres de convención de
  beisbol: **Home**, **Away**, **Práctica** (reemplaza fotos de equipo/torneo,
  que aún no existen — pedido explícito del fundador)

**Retirado tras corrección del fundador (2026-08-24):** la foto del equipo 11u
campeón y los flyers de "Elite Training Program" ya NO se usan — el equipo ya
no está en la academia y el programa está pausado. No representar en la web
contenido desactualizado, aunque esté disponible en Instagram.

## Gaps de contenido reales (no bloquean el desarrollo, sí la fecha de lanzamiento)
- ~~Archivos de logo y mascota~~ — **Resuelto (2026-08-24):** guardados en
  `/JBR claude/assets/` e incorporados al sitio.
- **Testimonios de padres:** no se encontró ninguno documentado en Instagram ni
  en nuestros archivos. Recomendación: pedir 2-3 testimonios cortos a padres
  actuales antes o justo al lanzar — es el hueco más grande de prueba social.
- **Fotos en alta resolución** de coaches y de la instalación (South Orange Little
  League Complex) para usar en la web sin depender de capturas de Instagram.
- **Fotos/resultados actuales de la academia** (no de equipos/jugadores que ya
  no están) para reforzar la Home y la página de Uniformes de forma genérica y vigente.
- **Bio de Gilbert Rondon** — falta recibir sus credenciales para completar su
  ficha de coach con el mismo nivel de detalle que Tomas Perez y Erick Castillo.
- **Proveedor real de uniformes:** falta confirmar quién fabrica el uniforme y
  el precio por set (ver `/company/products.md`).

## Siguiente paso
Sitio v1 (5 páginas) construido y funcionando en `/web/site/`. Pendiente:
1. Recibir logo/mascota/fotos reales para reemplazar placeholders
2. Confirmar proveedor y precio de uniformes
3. Definir hosting real y registrar `jbracademy.com` (el fundador, fuera de este sistema)
