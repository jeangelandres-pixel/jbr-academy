# Website JBR Academy — Discovery (Pre-desarrollo)
_Estado: análisis, NO se ha escrito código. Última actualización: 2026-08-24 — 5 preguntas clave respondidas._

## 1. Relación con el cuello de botella de adquisición
El cuello de botella identificado en `/operations/bottlenecks.md` es **adquisición**:
un solo canal orgánico (Instagram), sin proceso de ventas documentado y sin tracking
de leads, conversión o CAC (`/finance/metrics.md` tiene esos campos en "Sin dato").

Este proyecto **no es un canal nuevo**, es la **infraestructura que le falta al canal
que ya existe**: hoy un lead de Instagram se convierte en un DM manual, sin registro
estructurado. La web con Free Tryout:
1. Reemplaza el "escríbenos por DM" (fricción alta, no medible) por un formulario
   estructurado (fricción baja, 100% medible).
2. Alimenta directamente `/sales/pipeline.md` — las mismas etapas que ya definimos
   (Lead nuevo → Contactado → Clase agendada → Clase realizada → Cliente → Perdido)
   ahora se pueblan automáticamente en vez de a mano.
3. Genera por primera vez los datos que hoy faltan: leads por fuente, tasa de
   conversión, CAC — el prerequisito que `/operations/bottlenecks.md` marcó como
   necesario antes de decidir si el problema es volumen o conversión de leads.

**Conclusión:** es P1 correcto — no reemplaza a los Proyectos 1 y 2 activos
(contenido y proceso de ventas), los potencia. Ver dependencias abajo.

**Confirmación con datos reales:** la academia tiene capacidad para 100 niños y
hoy tiene 28 (~28% de utilización). Esto elimina la duda de si el problema podría
ser capacidad física — no lo es. El 72% de espacio libre es la validación más
fuerte hasta ahora de que el cuello de botella es 100% adquisición.

## 2. Lo que ya sabemos (no se vuelve a preguntar)
| Dato | Fuente |
|---|---|
| Producto: membresía $200/mes + torneos aparte | `/company/business-model.md` |
| Cliente: padres de niños que buscan desarrollo en beisbol | `/company/customers.md` |
| Canal actual: Instagram orgánico únicamente | `/marketing/strategy.md` |
| 28 clientes activos, 6 años operando | `/company/profile.md` |
| Equipo: fundador + 2 coaches ($450/mes c/u) | `/company/team.md`, `/finance/costs.md` |
| Costo estadio/instalación: $500/mes | `/finance/costs.md` |
| Margen bruto conocido: ~75% (~$4,200/mes) | `/finance/metrics.md` |
| Lead magnet ya definido conceptualmente: clase de evaluación/tryout gratis | `/marketing/content.md` |
| Scripts de conversión ya escritos (calificación, cierre, objeción, seguimiento) | `/sales/scripts.md` |
| Etapas de pipeline ya definidas | `/sales/pipeline.md` |
| Fundador probablemente cubre marketing+ventas+admin+dirección solo (hipótesis) | `/company/team.md` |
| No hay CRM, no hay tracking de leads hoy | `/sales/pipeline.md` |
| Ubicación: Orlando, FL — South Orange Little League Complex | `/company/profile.md` |
| Sin Google Business Profile todavía | `/company/profile.md` |
| Capacidad máxima: 100 niños (28 activos = ~28% de uso) | `/company/profile.md` |
| Canal de seguimiento real: WhatsApp | Respuesta del fundador (2026-08-24) |
| Horarios fijos por edad: 4-9 años Mar/Vie 6pm; 10-16 años Mar 7:30pm y Vie 6pm | `/company/programs.md` |
| Presupuesto herramientas web: $50-$200/mes, escalable según resultados | `/finance/costs.md` |

## 3. Lo que aún falta (no bloquea el diseño inicial)
- Lógica exacta del tryout: ¿es una clase real dentro de uno de los horarios fijos
  existentes, o un horario aparte solo para evaluación? (asumido: se integra al
  horario fijo del grupo de edad correspondiente — confirmar antes de construir el formulario)
- ¿WhatsApp Business (con API/automatización) o WhatsApp personal del fundador?
  — determina si las confirmaciones/recordatorios pueden automatizarse o requieren
  respuesta manual
- Fotos/videos/testimonios existentes y utilizables, o si hay que producir contenido nuevo
- Nombre de dominio / marca deseada para la web
- Datos de torneos (monto, frecuencia) — para la futura página de Programas
- Cuántos niños hay hoy en cada uno de los 3 horarios (ver `/company/programs.md`)

## 4. Funnel principal propuesto
```
Instagram / Google / tráfico
        ↓
     Website
        ↓
  Free Tryout (página + formulario)
        ↓
     Registro (captura datos + UTM/fuente)
        ↓
  Confirmación automática (canal a definir)
        ↓
   Recordatorio (24h antes)
        ↓
     Asistencia (coach marca: asistió / no-show)
        ↓
  Follow-up (reutiliza `/sales/scripts.md`: cierre + objeción)
        ↓
  Conversión a membresía → alta en `/sales/pipeline.md` como Cliente
        ↓
     Onboarding
```
Cada etapa es medible desde el día uno si el registro captura: fuente/UTM,
fecha, y se actualiza el estado (asistió/no-show/convertido) — esto es lo que
habilita CAC, tasa de conversión y revenue por canal más adelante.

## 5. Arquitectura propuesta (v1 vs. versión futura)
El usuario listó 10 páginas — eso es la **versión futura**, no la v1. Para
"rápido, profesional, mobile-first, enfocado en convertir" propongo lanzar con
**4 páginas** que cubren las 10 secciones combinando contenido:

### v1 (lanzamiento)
1. **Home** — hero + propuesta de valor + CTA principal "Regístrate a tu Tryout
   Gratis", franja de prueba social (testimonios cortos), resumen de programas,
   CTA secundario
2. **Free Tryout** (página de conversión, la más importante) — qué es, qué traer,
   FAQ corto integrado, formulario de registro
3. **Programas & Coaches** — combinada: qué se ofrece, horarios, quiénes son los coaches
4. **Contacto & Ubicación** — mapa, WhatsApp/teléfono, dirección, horario de atención

### vFuture (cuando haya tracción/datos)
Separar Programas de Coaches, página de Testimonios dedicada, FAQ dedicada,
Sobre Nosotros dedicada — solo si el análisis de comportamiento (Google Analytics)
muestra que la gente lo busca por separado. No construir de más sin evidencia.

## 6. Registro al Free Tryout — flujo propuesto
Los horarios son fijos por edad (`/company/programs.md`), así que el formulario
**no necesita mostrar un calendario abierto** — puede auto-asignar el horario
correcto apenas el padre indica la edad del niño. Eso reduce fricción y errores.

**Campos del formulario (mínima fricción):**
- Nombre del padre/madre
- Teléfono con WhatsApp (canal de seguimiento confirmado)
- Nombre y edad del niño/a → **auto-asigna el horario:**
  - 4-9 años → Martes y Viernes 6:00 PM
  - 10-16 años → Martes 7:30 PM o Viernes 6:00 PM (si aplica elegir uno)
- Automático, no visible al usuario: fuente/UTM, fecha/hora, página de origen

**Después del envío:**
1. Confirmación instantánea en pantalla + mensaje de WhatsApp con día/hora asignado
2. Entrada creada en la base de leads (alimenta `/sales/pipeline.md`)
3. Recordatorio por WhatsApp 24h antes
4. Notificación al fundador/coach del grupo correspondiente
5. Después del tryout: marcar asistió/no-show
6. Secuencia de follow-up por WhatsApp reutilizando los scripts ya escritos
7. Al convertir: se marca como Cliente en el pipeline

**Pendiente de confirmar antes de construir esto:** si WhatsApp es personal o
Business, el mensaje de confirmación/recordatorio podría enviarse automáticamente
o requerir que alguien lo mande a mano al principio (ver sección 3).

## 7. Integraciones necesarias (categorías — sin elegir proveedor todavía)
- **Captura + base de leads:** formulario → base de datos/CRM (puede empezar simple)
- **Confirmación y recordatorios automáticos vía WhatsApp** (canal confirmado —
  prioridad #1 sobre email/SMS; el nivel de automatización posible depende de si
  es WhatsApp Business, ver sección 3)
- **Analytics de comportamiento:** Google Analytics
- **Atribución de campañas pagadas (futuro):** Meta Pixel, Google Ads conversion tracking
- **Disciplina de UTMs:** todo enlace desde Instagram/bio debe llevar UTM desde el día uno
- **SEO local:** crear Google Business Profile (no existe — es trabajo nuevo, no solo
  "conectar" algo existente) con dirección del South Orange Little League Complex
- **Dashboard administrativo:** puede iniciar como una vista de hoja de cálculo antes
  de construir algo custom — evitar sobreingeniería en v1

**Presupuesto disponible:** $50-$200/mes, empezando bajo y escalando según
resultados — esto favorece herramientas con planes gratuitos o de entrada barata
sobre soluciones enterprise, al menos en v1.

La elección concreta de herramientas se hará comparando costo + velocidad +
escalabilidad + mantenimiento + automatización + analytics + seguridad + UX,
priorizando WhatsApp como canal de automatización y manteniéndose dentro del
presupuesto aprobado.

## 8. Riesgos y decisiones pendientes antes de desarrollar
1. **Riesgo de capacidad de seguimiento:** si el fundador ya está sobrecargado
   (`/company/team.md`), más leads sin un proceso de seguimiento confiable
   desperdicia la inversión. Proyecto 2 (proceso de ventas) debe estar funcionando
   en paralelo, no después. *(Sigue vigente.)*
2. **Sin línea base de métricas:** hoy no hay datos de leads/conversión — el
   lanzamiento de la web es también el inicio de la medición, no hay "antes" para
   comparar. *(Sigue vigente.)*
3. ~~Riesgo de capacidad física~~ — **Resuelto:** 100 de capacidad vs. 28 activos,
   hay margen amplio para crecer antes de que esto sea un problema.
4. **Presupuesto definido pero acotado:** $50-$200/mes — suficiente para un v1
   apoyado en herramientas de entrada, pero limita opciones enterprise. No se
   contratará ni pagará nada sin autorización explícita del fundador en cada caso.
5. ~~Canal de seguimiento sin definir~~ — **Resuelto:** WhatsApp confirmado. Queda
   pendiente si es personal o Business (afecta el nivel de automatización posible).
6. **Dominio y hosting sin definir/comprado.**
7. **Activos de contenido (fotos/video/testimonios) sin confirmar disponibilidad.**
8. **Google Business Profile no existe** — hay que crearlo desde cero, es trabajo
   adicional (no solo una integración técnica) y requiere verificación de dirección
   física, lo cual puede tomar días.

## 9. Preguntas respondidas (2026-08-24)
| # | Pregunta | Respuesta |
|---|---|---|
| 1 | Ubicación / Google Business Profile | Orlando, FL — South Orange Little League Complex. No existe perfil de Google Business todavía. |
| 2 | Capacidad física máxima | 100 niños (28 activos hoy) |
| 3 | Canal real de seguimiento con padres | WhatsApp |
| 4 | Lógica logística del tryout | Horarios fijos semanales por edad (ver `/company/programs.md`) |
| 5 | Presupuesto mensual para herramientas | $50-$200/mes, escalable según resultados |

## 10. Siguiente paso propuesto
Con estas 5 respuestas ya se puede definir la arquitectura v1 en detalle y pasar
a comparar alternativas concretas de tecnología (costo/velocidad/escalabilidad/
mantenimiento/automatización/analytics/seguridad/UX). Quedan puntos menores sin
resolver (sección 3) que no bloquean ese trabajo — se pueden resolver en paralelo.
