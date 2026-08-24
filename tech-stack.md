# Comparación de Tecnología — Sitio Web JBR Academy
_Estado: RECOMENDACIÓN pendiente de aprobación. No se ha comprado dominio, creado
cuentas, ni conectado ningún servicio._

Evaluado contra: costo + velocidad + escalabilidad + mantenimiento + automatización
+ analytics + seguridad + experiencia de usuario. Presupuesto disponible: $50-$200/mes
(`/finance/costs.md`).

## Contexto que determina la comparación
- El fundador no es técnico — cubre ya marketing+ventas+admin+dirección
  (`/company/team.md`). Cualquier stack que requiera un desarrollador para cada
  cambio de texto o foto choca con el objetivo de reducir dependencia del fundador
  *sin crear una nueva dependencia de un desarrollador externo*.
- El volumen de leads hoy es desconocido pero probablemente bajo (28 clientes en
  6 años) — no se justifica un stack "enterprise" desde el día uno.
- WhatsApp es el canal confirmado, pero no sabemos si es WhatsApp Business o
  personal (`/web/discovery.md` sección 3) — esto limita cuánto se puede
  automatizar en v1 con certeza.

## 1. Sitio web (frontend)

| Opción | Costo/mes | Velocidad de lanzamiento | Mantenimiento | SEO/Performance | Seguridad |
|---|---|---|---|---|---|
| **A. Sitio a medida** (construido ahora, hosting gratuito/muy bajo costo) | ~$0-5 | Rápida (ya tenemos arquitectura y contenido) | Ediciones de texto/fotos se piden como tarea normal de este sistema (igual que los documentos que ya mantenemos) | Alto — control total de velocidad y SEO técnico | Alta — superficie de ataque mínima, sin panel de administración expuesto |
| B. Constructor de sitios sin código (tipo Squarespace/Wix) | ~$16-$40 | Rápida | El fundador podría editar solo, pero con curva de aprendizaje de esa herramienta | Medio — depende de la plantilla | Alta, pero depende del proveedor |
| C. WordPress + plugins | ~$10-$30 (hosting+plugins) | Media — más piezas que configurar | Requiere mantenimiento técnico continuo (actualizaciones, seguridad) | Medio-Alto, pero fácil de hacerlo lento mal configurado | Media — WordPress es blanco frecuente de ataques si no se mantiene |

**Recomendación: Opción A.** La arquitectura y el contenido ya están definidos
(`/web/architecture.md`); construirlo a medida es rápido en este caso, tiene el
menor costo recurrente, mejor performance/SEO, y los cambios futuros de contenido
se piden como cualquier otra tarea de este sistema — sin depender de un
desarrollador externo ni de aprender una herramienta nueva.

## 2. Captura de leads + base de datos

| Opción | Costo/mes | Velocidad | Mantenimiento | Automatización | Escalabilidad |
|---|---|---|---|---|---|
| **A. Formulario propio → base de datos simple tipo hoja de cálculo** | $0 | Rápida | Baja — es literalmente `/sales/pipeline.md` pero automático | Básica (recordatorios simples posibles) | Suficiente para cientos de leads/mes |
| B. CRM dedicado de terceros | $15-$50+ | Media (hay que configurarlo) | Media | Alta | Alta, pero sobredimensionado para 28-100 clientes |

**Recomendación: Opción A** para v1. Con capacidad para 100 niños y hoy 28
activos, un CRM dedicado es sobreingeniería ahora mismo. Migrar a un CRM cuando
el volumen de leads lo justifique (ver `/projects/backlog.md`).

## 3. Confirmación y recordatorios por WhatsApp

**Actualización (2026-08-24): el fundador confirmó que SÍ tiene WhatsApp Business.**
Esto habilita una opción intermedia que no existía antes en esta comparación:

| Opción | Costo/mes | Automatización real | Dependencia |
|---|---|---|---|
| A. WhatsApp manual puro | $0 | Ninguna | Ninguna |
| **B. Mensaje pre-armado (`wa.me` con texto prellenado)** — el formulario del sitio
  arma automáticamente el mensaje de WhatsApp con los datos del lead/pedido y lo abre
  listo para enviar | $0 | Media — cero fricción para el padre, el fundador sigue
  respondiendo manualmente pero ya no tiene que copiar datos a mano | Ninguna, funciona
  con la app de WhatsApp Business normal |
| C. WhatsApp Business API vía proveedor externo (envíos y recordatorios 100%
  automáticos sin intervención humana) | $20-$100+ | Alta | Requiere contrato con
  proveedor + verificación adicional de Meta |

**Recomendación actualizada: Opción B para v1.** Con WhatsApp Business confirmado,
no tiene sentido quedarse en manual puro (Opción A) cuando la Opción B da la misma
simplicidad de "sin proveedores nuevos" pero elimina el error humano de transcribir
datos. Ya implementado en `/web/site/` para el formulario de Free Tryout y el de
Uniformes. Opción C se revisita cuando el volumen de leads lo justifique.

## 4. Analytics y atribución

- **Google Analytics** — gratuito, mide comportamiento en el sitio
- **Meta Pixel** — gratuito, necesario para atribuir tráfico de Instagram y, en
  el futuro, campañas pagadas
- **Google Ads conversion tracking** — gratuito, solo relevante si se activan
  Google Ads más adelante
- **Disciplina de UTMs** — gratuito, requiere solo consistencia al poner los
  enlaces en Instagram/bio

No hay decisión que tomar aquí más allá de "instalarlos" — son estándar, gratuitos,
y no compiten entre sí. Se activan junto con el lanzamiento del sitio.

## 5. SEO local
**Google Business Profile** — gratuito. No existe todavía (`/company/profile.md`).
Crearlo es trabajo pendiente, no una decisión de tecnología.

## 6. Dashboard administrativo
v1: la propia base de leads (punto 2, Opción A) sirve como dashboard, con vistas
filtradas por estado/fuente — igual que ya hacemos con `/dashboard.md` para el
negocio completo. No construir un dashboard separado sin evidencia de que la
hoja de cálculo se queda corta.

## Costo total estimado del stack recomendado (v1)
Hosting del sitio (~$0-5) + base de leads (~$0) + WhatsApp manual (~$0) +
analytics (~$0) + dominio (~$1-2/mes prorrateado) = **aprox. $5-10/mes**, muy por
debajo del techo de $200 aprobado. Esto deja el resto del presupuesto disponible
para cuando se decida invertir en ads pagados o automatización de WhatsApp con
datos reales — decisiones que requerirán aprobación aparte en su momento.

## Decisiones ya aprobadas por el fundador (2026-08-24)
1. ✅ **Dominio:** `jbracademy.com` — nombre aprobado. **El registro/compra real
   del dominio lo debe hacer el fundador directamente** con su método de pago en
   un registrador (ej. Namecheap, GoDaddy, Google Domains) — no se compra nada
   desde este sistema. Cuando esté registrado, se conecta al hosting.
2. Stack recomendado (sitio a medida + hoja de cálculo + WhatsApp manual) — sin
   objeción del fundador, se procede a construir bajo este enfoque.

## Pendiente
- Elegir y crear cuenta de hosting (gratuito/muy bajo costo) — se propondrá una
  opción concreta al momento de publicar, requiere aprobación antes de crear la cuenta
- Registrar `jbracademy.com` (acción del fundador, fuera del alcance de este sistema)

Ninguna cuenta, dominio o suscripción se creará desde este sistema sin confirmación
explícita del fundador en el momento de hacerlo.
