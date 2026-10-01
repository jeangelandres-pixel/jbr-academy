/* Generado por calendario-beisbol/build_site.py — no editar a mano */

(function(){
"use strict";
const MIN_MONTH = "2026-09";
const MONTHS = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const DOW = ["DOM","LUN","MAR","MIÉ","JUE","VIE","SÁB"];
const DOW_LONG = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
const STATUS = {sched:"Programado", time:"Cambio de hora", place:"Cambio de lugar", post:"Pospuesto", cancel:"Cancelado"};
const I18N = {
  es:{months:MONTHS, dow:DOW, dowLong:DOW_LONG, status:STATUS, home:"LOCAL", away:"VISITANTE", vs:"vs", at:"@",
      cat:"CATEGORÍA", sub:(n,h)=>`Calendario de juegos · ${n} ${n===1?"juego":"juegos"} · ${h} de local`,
      legH:"Local · jugamos en casa", legA:"Visitante · jugamos fuera", week:(a,b)=>`Semana del ${a} al ${b}`,
      game:"JUEGO", arrive:"Llegar", win:"G", loss:"P", tie:"E", nGames:n=>`${n} juegos`, tbd:"Por confirmar", noGames:"Sin juegos este mes", soon:"Pronto publicaremos el calendario.",
      arriveFoot:m=>`Llegar ${m} minutos antes de cada juego.`, wa:"Calendario", waCat:"Categoría", waNone:"Sin juegos programados este mes."},
  en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"], dow:["SUN","MON","TUE","WED","THU","FRI","SAT"],
      dowLong:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      status:{sched:"Scheduled", time:"Time change", place:"Location change", post:"Postponed", cancel:"Canceled"}, home:"HOME", away:"AWAY", vs:"vs", at:"@",
      cat:"DIVISION", sub:(n,h)=>`Game schedule · ${n} ${n===1?"game":"games"} · ${h} at home`,
      legH:"Home · we play at our field", legA:"Away · we travel", week:(a,b)=>`Week of ${a} – ${b}`,
      game:"GAME", arrive:"Arrive", win:"W", loss:"L", tie:"T", nGames:n=>`${n} games`, tbd:"TBD", noGames:"No games this month", soon:"Schedule coming soon.",
      arriveFoot:m=>`Please arrive ${m} minutes before each game.`, wa:"Schedule", waCat:"Division", waNone:"No games scheduled this month."}
};
const LANG_KEY = "bb-cal-lang";
const VIEWER = !!window.JBR_VIEWER;
let viewLang = null;
try{ viewLang = localStorage.getItem(VIEWER ? "jbr_lang" : LANG_KEY); }catch(e){}
if(VIEWER && !viewLang) viewLang = (navigator.language||"es").toLowerCase().indexOf("en")===0 ? "en" : "es";
const lang = () => (viewLang==="es"||viewLang==="en") ? viewLang : ((S.academy && S.academy.lang) || "es");
const L = () => I18N[lang()] || I18N.es;
const EN = {"Actualizar página web": "Update website", "Actualizar jbracademy.net": "Update jbracademy.net", "Descargar juegos.json": "Download juegos.json", "Abrir GitHub": "Open GitHub", "Copiar enlace": "Copy link", "Enlace copiado": "Link copied", "Selecciona el enlace y cópialo": "Select the link and copy it", "Calendario": "Schedule", "Resultados": "Results", "Estadísticas": "Stats", "Secciones": "Sections", "Toca un juego para poner el marcador y las estadísticas de cada jugador.": "Tap a game to enter the score and each player's stats.", "Las estadísticas se suman solas con lo que cargas en cada juego (pestaña Resultados).": "Stats add up automatically from what you enter for each game (Results tab).", "Marcador y estadísticas": "Score & stats", "Resumen del juego (opcional)": "Game recap (optional)", "Ej. Jonrón de Carlos en la 5ta": "e.g. Carlos homered in the 5th", "Bateo": "Batting", "Pitcheo": "Pitching", "Jugador": "Player", "Deja en blanco a quien no jugó. VB veces al bate · C carreras · CI impulsadas · K ponches · BR bases robadas.": "Leave blank for players who didn't play. VB at bats · C runs · CI RBI · K strikeouts · BR stolen bases.", "Solo quien lanzó. IP en entradas: 3.1 = 3 entradas y 1 out. CL carreras limpias.": "Pitchers only. IP in innings: 3.1 = 3 innings and 1 out. CL earned runs.", "Para cargar estadísticas, primero agrega los": "To enter stats, first add the", "jugadores": "players", "Agregar jugadores": "Add players", "Borrar marcador": "Delete score", "¿Borrar el marcador?": "Delete the score?", "Se borran el marcador y las estadísticas de este juego.": "This deletes the score and stats for this game.", "Borrar": "Delete", "Hay un jugador con más hits que veces al bate. Revísalo.": "A player has more hits than at bats. Please check.", "Escribe el marcador de los dos equipos": "Enter both teams' scores", "Marcador guardado": "Score saved", "Número, nombre y posición. Para agregar muchos de una vez, pega la lista abajo (un jugador por línea, ej. “27 Carlos Pérez”).": "Number, name and position. To add many at once, paste the list below (one player per line, e.g. “27 Carlos Pérez”).", "+ Agregar jugador": "+ Add player", "Pegar lista de jugadores": "Paste player list", "Agregar la lista": "Add the list", "Pos.": "Pos.", "Aún no hay jugadores en esta categoría.": "No players in this division yet.", "Eliminar jugador": "Delete player", "Este jugador tiene estadísticas guardadas. Bórralas de los juegos primero.": "This player has saved stats. Delete them from the games first.", "Jugadores guardados": "Players saved", "Nombre": "Name", "Número": "Number", "Posición": "Position", "Mes anterior": "Previous month", "Mes siguiente": "Next month", "Copiar para WhatsApp": "Copy for WhatsApp", "Descargar imagen": "Download image", "Editar calendario": "Edit schedule", "Guardar": "Save", "Publicar cambios": "Publish changes", "Salir de edición": "Exit editing", "Categoría": "Division", "Recuperamos": "We restored", "cambios sin publicar": "unpublished changes", "de tu última sesión en este navegador.": "from your last session in this browser.", "Descartar cambios": "Discard changes", "+ Agregar juego": "+ Add game", "+ Agregar varios juegos": "+ Add several games", "Academia, logos y colores": "Academy, logos & colors", "Equipos rivales": "Opponents", "Categorías": "Divisions", "Copiar mes a otra categoría": "Copy month to another division", "Toca un juego o un día del calendario para editarlo.": "Tap a game or a calendar day to edit it.", "Los cambios se guardan": "Changes are saved", "solo en este navegador": "only in this browser", ". Para que los papás los vean, edítalo desde el enlace publicado.": ". To let parents see them, edit from the published link.", "Crea una categoría para empezar.": "Create a division to get started.", "Jugador destacado": "Featured player", "Cambiar foto": "Change photo", "Subir foto del jugador": "Upload player photo", "Mover / ajustar": "Move / adjust", "Nombre y número": "Name & number", "Quitar foto": "Remove photo", "Usa “+ Agregar juego”, “+ Agregar varios juegos” o toca un día del calendario.": "Use “+ Add game”, “+ Add several games” or tap a calendar day.", "Calendario del mes": "Month calendar", "Cerrar": "Close", "Cancelar": "Cancel", "Fecha": "Date", "Hora (primer lanzamiento)": "Time (first pitch)", "Rival": "Opponent", "+ Nuevo equipo…": "+ New team…", "Nombre del nuevo equipo": "New team name", "Ej. Toros": "e.g. Bulls", "¿Dónde jugamos?": "Where do we play?", "LOCAL (HOME)": "HOME", "VISITANTE (AWAY)": "AWAY", "Estadio / campo": "Ballpark / field", "Dirección": "Address", "Estado": "Status", "Programado": "Scheduled", "Cambio de hora": "Time change", "Cambio de lugar": "Location change", "Pospuesto": "Postponed", "Cancelado": "Canceled", "Nota para los papás (opcional)": "Note for parents (optional)", "Ej. Traer uniforme blanco": "e.g. Bring white uniform", "Eliminar": "Delete", "Duplicar": "Duplicate", "Agregar juego": "Add game", "Nuevo juego": "New game", "Editar juego": "Edit game", "Copia del juego": "Game copy", "Copia del juego (+7 días)": "Game copy (+7 days)", "Escribe el nombre del equipo rival": "Type the opponent's name", "Elige la fecha del juego": "Pick the game date", "El calendario empieza en septiembre 2026": "The schedule starts in September 2026", "Juego agregado": "Game added", "Juego actualizado": "Game updated", "¿Eliminar este juego?": "Delete this game?", "Juego eliminado": "Game deleted", "Hora": "Time", "Rival…": "Opponent…", "o escribe uno nuevo": "or type a new one", "Rival nuevo": "New opponent", "Local o visitante": "Home or away", "Local": "Home", "Visitante": "Away", "Estadio (vacío = el nuestro si es local)": "Ballpark (empty = ours if home)", "Estadio": "Ballpark", "Quitar fila": "Remove row", "Agregar varios juegos": "Add several games", "Dónde": "Where", "+ Otra fila": "+ Another row", "Agregar juegos": "Add games", "Elige el rival de al menos un juego": "Pick the opponent for at least one game", "Ajustar foto": "Adjust photo", "Arrastra la foto para moverla y usa el control para acercar o alejar. Lo que ves en el recuadro es lo que sale en el calendario.": "Drag the photo to move it and use the slider to zoom in or out. What you see in the frame is what appears on the schedule.", "Ajustar al recuadro": "Fit to frame", "Elegir otra foto": "Choose another photo", "Usar foto": "Use photo", "Foto ajustada": "Photo adjusted", "Nombre": "Name", "Número": "Number", "Posición": "Position", "Etiqueta": "Label", "Ej. Carlos Pérez": "e.g. Carlos Pérez", "Ej. Lanzador · SS": "e.g. Pitcher · SS", "Ej. Jugador del mes": "e.g. Player of the month", "Academia": "Academy", "Identidad": "Identity", "Nombre de la academia": "Academy name", "Cambiar logo": "Change logo", "Subir logo": "Upload logo", "Quitar logo": "Remove logo", "Color principal": "Main color", "Color de local": "Home color", "Colores MLB clásicos": "Classic MLB colors", "Nuestro estadio (local)": "Our ballpark (home)", "Se llena solo cuando marcas un juego como local.": "Filled in automatically when you mark a game as home.", "Idioma del calendario": "Schedule language", "Idioma predeterminado (lo que ven los papás al abrir)": "Default language (what parents see when they open it)", "Mensaje para los papás": "Message for parents", "Pie del calendario (español)": "Schedule footer (Spanish)", "Pie del calendario (inglés)": "Schedule footer (English)", "Llegar antes del juego (minutos)": "Arrive before the game (minutes)", "Logos de patrocinadores": "Sponsor logos", "Sin logos todavía.": "No logos yet.", "+ Agregar logo": "+ Add logo", "Nombre del patrocinador": "Sponsor name", "Quitar": "Remove", "Academia actualizada": "Academy updated", "Toca el círculo para subir el logo de cada equipo.": "Tap the circle to upload each team's logo.", "+ Agregar equipo": "+ Add team", "Nombre del equipo": "Team name", "Eliminar equipo": "Delete team", "Aún no hay equipos.": "No teams yet.", "Equipos guardados": "Teams saved", "Ej. T Ball, 8U, 12U, JV.": "e.g. T Ball, 8U, 12U, JV.", "✎ Editar categorías": "✎ Edit divisions", "Bajar": "Move down", "Categorías guardadas": "Divisions saved", "Escribe para cambiar el nombre, usa las flechas para cambiar el orden y × para borrar. Ej. T Ball, 8U, 12U, JV.": "Type to rename, use the arrows to reorder and × to delete. e.g. T Ball, 8U, 12U, JV.", "+ Agregar categoría": "+ Add division", "Nombre de la categoría": "Division name", "Subir": "Move up", "Esta categoría no tiene juegos este mes": "This division has no games this month", "Copiar juegos": "Copy games", "Destino": "Copy to", "Copiar": "Copy", "Juegos copiados": "Games copied", "Copiado. Pégalo en WhatsApp.": "Copied. Paste it in WhatsApp.", "Texto para WhatsApp": "Text for WhatsApp", "Selecciona todo y cópialo.": "Select all and copy it.", "La imagen no está disponible ahora. Usa “Copiar para WhatsApp”.": "The image isn't available right now. Use “Copy for WhatsApp”.", "Generando imagen…": "Creating image…", "No se pudo generar la imagen": "Couldn't create the image", "Imagen guardada": "Image saved", "Imagen lista": "Image ready", "Mantén presionada la imagen (o clic derecho) y elige “Guardar imagen”.": "Press and hold the image (or right-click) and choose “Save image”.", "Guardado en este navegador": "Saved in this browser", "Publicando…": "Publishing…", "Publicado. Los papás ya ven la nueva versión.": "Published. Parents now see the new version.", "Había una versión más nueva. Recargando…": "There was a newer version. Reloading…", "Este enlace es de solo lectura.": "This link is view-only.", "Demasiadas fotos grandes. Quita algunas e intenta de nuevo.": "Too many large photos. Remove some and try again.", "Espera un momento antes de volver a publicar.": "Wait a moment before publishing again.", "No se pudo publicar. Intenta de nuevo.": "Couldn't publish. Try again.", "Tienes cambios sin publicar": "You have unpublished changes", "Cambios descartados": "Changes discarded", "No se pudo leer esa imagen. Prueba con JPG o PNG.": "Couldn't read that image. Try a JPG or PNG.", "Zoom": "Zoom", "¿Descartar los cambios sin publicar?": "Discard unpublished changes?", "Se borran los cambios que no has publicado. Esto no se puede deshacer.": "Your unpublished changes will be deleted. This can't be undone.", "Descartar": "Discard", "Guardar respaldo": "Save backup", "Cargar respaldo": "Load backup", "Respaldo guardado": "Backup saved", "No se pudo guardar el respaldo": "Couldn't save the backup", "Ese archivo no es un respaldo del calendario.": "That file isn't a schedule backup.", "¿Cargar este respaldo?": "Load this backup?", "Respaldo cargado. Toca “Publicar cambios” para que los papás lo vean.": "Backup loaded. Tap “Publish changes” so parents can see it.", "solo en este navegador": "only in this browser", ". Para que los papás los vean, toca “Guardar respaldo”, abre el enlace publicado y usa “Cargar respaldo”.": ". To let parents see them, tap “Save backup”, open the published link and use “Load backup”.", "Toca “Subir foto del jugador” o arrastra una foto aquí": "Tap “Upload player photo” or drag a photo here", "Ese archivo no es una imagen. Usa una foto JPG o PNG.": "That file isn't an image. Use a JPG or PNG photo.", "Esta foto está en formato HEIC (iPhone) y el navegador no la puede abrir. Guárdala como JPG o haz una captura de pantalla y súbela.": "This photo is in HEIC format (iPhone) and the browser can't open it. Save it as JPG or take a screenshot and upload that.", "No se pudo leer esa imagen. Prueba con una foto JPG o PNG.": "Couldn't read that image. Try a JPG or PNG photo.", "Patrocinador": "Sponsor", "Jugador": "Player"};
const EN_RX = [
  [/^Jugadores de (.+)$/, "$1 players"], [/^Jugadores · (.+)$/, "Players · $1"], [/^(\d+) jugadores agregados$/, "$1 players added"], [/^1 jugador agregado$/, "1 player added"],
  [/^de ([^.]+)\.$/, "for $1."],
  [/^Trae (\d+) juegos y (\d+) categorías\. Reemplaza lo que ves ahora\.$/, "It has $1 games and $2 divisions. It replaces what you see now."],
  [/^Categoría (.+) · mismo mes$/, "Division $1 · same month"],
  [/^(.+) · (.+) \(mismo día de la semana\)$/, "$1 · $2 (same weekday)"],
  [/^Copia los (\d+) juegos de$/, "Copy the $1 games from"],
  [/^de (.+)\. Después puedes ajustar horas y rivales\.$/, "for $1. You can adjust times and opponents afterward."],
  [/^· (.+)\. Llena una fila por juego; las filas sin rival se ignoran\. La dirección de visitante la puedes completar después tocando el juego\.$/, "· $1. Fill one row per game; rows without an opponent are skipped. You can add the away address later by tapping the game."],
  [/^Aparece junto al calendario de (.+) en (.+)\. Cada mes y categoría puede tener su propio jugador\.$/, "Shown next to the $1 schedule for $2. Each month and division can have its own player."],
  [/^(\d+) juegos agregados$/, "$1 games added"], [/^1 juego agregado$/, "1 game added"],
  [/^Falta el rival en el juego del (.+)$/, "Missing opponent for the game on $1"],
  [/^No se puede borrar: (\d+) juego\(s\) usan este equipo$/, "Can't delete: $1 game(s) use this team"],
  [/^(\d+) juegos usan este equipo$/, "$1 games use this team"],
  [/^Tiene (\d+) juego\(s\)\. Muévelos o bórralos primero\.$/, "It has $1 game(s). Move or delete them first."],
  [/^Editar juego del (\d+)$/, "Edit game on the $1"], [/^Día (\d+)$/, "Day $1"], [/^Logo de (.+)$/, "$1 logo"], [/^Calendario (.+)$/, "Schedule $1"]
];
function tr(str){
  if(lang()!=="en" || str==null) return str;
  const m=String(str).match(/^(\s*)([\s\S]*?)(\s*)$/), core=m[2];
  if(!core) return str;
  if(Object.prototype.hasOwnProperty.call(EN,core)) return m[1]+EN[core]+m[3];
  for(const [rx,out] of EN_RX){ if(rx.test(core)) return m[1]+core.replace(rx,out)+m[3]; }
  return str;
}
function translateDOM(root){
  if(lang()!=="en" || !root) return;
  const w=document.createTreeWalker(root, NodeFilter.SHOW_TEXT); let n;
  while((n=w.nextNode())){ const v=tr(n.nodeValue); if(v!==n.nodeValue) n.nodeValue=v; }
  root.querySelectorAll("[placeholder],[aria-label],[title],[alt]").forEach(el=>["placeholder","aria-label","title","alt"].forEach(a=>{ if(el.hasAttribute(a)){ const v=el.getAttribute(a), t=tr(v); if(t!==v) el.setAttribute(a,t); } }));
}
const DRAFT_KEY = "bb-cal-draft-v2";
const VIEW_KEY = "bb-cal-view-v2";

const uid = () => Math.random().toString(36).slice(2,9);

const JBR_LOGO = "data:image/webp;base64,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";
function sampleState(){
  return {
    v:2, sample:false, updatedAt:Date.now(),
    academy:{name:"JBR Academy", logo:JBR_LOGO, navy:"#0e1d4c", red:"#0e1d4c", away:"#6b7280", arrive:30, lang:"es",
      homeVenue:"South Orange Little League Complex", homeAddress:"11800 S Orange Ave, Orlando, FL 32824", footer:"Llegar con uniforme completo. Cualquier cambio se publica en este mismo enlace.", footerEn:"Arrive in full uniform. Any changes are posted at this same link."},
    categories:[{id:"ctb",name:"T Ball"},{id:"c8",name:"8U"},{id:"c12",name:"12U"},{id:"cjv",name:"JV"}],
    teams:[], sponsors:[], features:{}, games:[]
  };
}

/* ---------- state ---------- */
let embedded = null;
try{ embedded = JSON.parse(document.getElementById("app-state").textContent); }catch(e){}
let S = embedded || sampleState();
let dirty = false, restored = false;
const baseStamp = embedded ? (embedded.updatedAt || 0) : 0;

function ls(fn){ try{ return fn(); }catch(e){ return null; } }
const draft = VIEWER ? null : ls(()=>JSON.parse(localStorage.getItem(DRAFT_KEY)||"null")) || ls(()=>JSON.parse(localStorage.getItem("bb-cal-draft-v1")||"null"));
if(draft && draft.state && Array.isArray(draft.state.games) && (draft.base === baseStamp || !embedded || (draft.state.updatedAt||0) > baseStamp)){ S = draft.state; dirty = true; restored = true; }

const today = new Date();
let curMonth = (()=>{ const m = today.getFullYear()+"-"+String(today.getMonth()+1).padStart(2,"0"); return m < MIN_MONTH ? MIN_MONTH : m; })();
let curCat = S.categories[0] ? S.categories[0].id : null;
const savedView = ls(()=>JSON.parse(localStorage.getItem(VIEW_KEY)||"null"));
if(savedView){ if(savedView.m && savedView.m>=MIN_MONTH) curMonth = savedView.m; if(S.categories.some(c=>c.id===savedView.c)) curCat = savedView.c; }
if(!(savedView && S.categories.some(c=>c.id===savedView.c))){ const withG=S.categories.find(c=>S.games.some(g=>g.cat===c.id && g.date.startsWith(curMonth))); if(withG) curCat=withG.id; }

if(!Array.isArray(S.players)) S.players = [];
let view = ls(()=>localStorage.getItem("bb-cal-tab")) || "cal"; if(!["cal","res","stats"].includes(view)) view="cal";
let mode = "unknown"; // unknown | writer | reader | local
let editing = false;
let artifactNS = null, downloadsNS = null;

function saveView(){ ls(()=>localStorage.setItem(VIEW_KEY, JSON.stringify({m:curMonth,c:curCat}))); }
function touch(){
  dirty = true; S.updatedAt = Date.now();
  if(mode === "local") ls(()=>localStorage.setItem(DRAFT_KEY, JSON.stringify({base:baseStamp, state:S})));
  else if(!ls(()=>{ localStorage.setItem(DRAFT_KEY, JSON.stringify({base:baseStamp, state:S})); return 1; })) {/* storage full: keep in memory */}
  render();
}

/* ---------- helpers ---------- */
const $ = (s,el=document)=>el.querySelector(s);
const esc = s => String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const team = id => S.teams.find(t=>t.id===id) || {name:L().tbd, logo:""};
const cat = id => S.categories.find(c=>c.id===id) || {name:"—"};
function monthLabel(m){ const [y,mo]=m.split("-").map(Number); return L().months[mo-1]+" "+y; }
function addMonth(m,d){ let [y,mo]=m.split("-").map(Number); mo+=d; while(mo>12){mo-=12;y++} while(mo<1){mo+=12;y--} return y+"-"+String(mo).padStart(2,"0"); }
function parseDate(s){ const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d); }
function fmtTime(t){ if(!t) return {h:L().tbd,ap:""}; let [h,m]=t.split(":").map(Number); const ap=h>=12?"PM":"AM"; h=h%12||12; return {h:h+":"+String(m).padStart(2,"0"), ap}; }
function arrival(t){ if(!t || !S.academy.arrive) return ""; let [h,m]=t.split(":").map(Number); let tot=h*60+m-Number(S.academy.arrive); if(tot<0) tot+=1440; const f=fmtTime(String(Math.floor(tot/60)).padStart(2,"0")+":"+String(tot%60).padStart(2,"0")); return f.h+" "+f.ap; }
function hue(str){ let h=0; for(const c of str) h=(h*31+c.charCodeAt(0))%360; return h; }
function initials(n){ return (n||"?").split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase(); }
function homeColor(){ const r=S.academy.red; return (!r || r.toLowerCase()==="#c8102e") ? (S.academy.navy||"#0e1d4c") : r; }
function footerText(){ const a=S.academy; return lang()==="en" ? (a.footerEn||a.footer||"") : (a.footer||""); }
function bg(src){ return `<span class="bgimg" style="background-image:url(&quot;${src}&quot;)"></span>`; }
function logoHTML(t, cls){ return t.logo ? bg(t.logo) : `<span class="ini" style="color:#fff">${esc(initials(t.name))}</span>`; }
function logoBG(t){ return t.logo ? "" : `background:hsl(${hue(t.name)} 55% 38%);border-color:transparent`; }
function gamesFor(m, c){ return S.games.filter(g=>g.date.startsWith(m) && g.cat===c).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time)); }
function countFor(m,c){ return S.games.filter(g=>g.date.startsWith(m)&&g.cat===c).length; }
function fkey(){ return curMonth+"|"+curCat; }
const pin = '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>';

let toastT;
function toast(msg){ let el=$(".toast"); if(!el){ el=document.createElement("div"); el.className="toast"; el.setAttribute("role","status"); (document.getElementById("root")||document.body).appendChild(el);} el.textContent=tr(msg); el.hidden=false; clearTimeout(toastT); toastT=setTimeout(()=>{el.hidden=true},2600); }

/* ---------- image processing ---------- */
let fileInput=null;
function pickImage(accept){
  return new Promise(res=>{
    if(!fileInput){ fileInput=document.createElement("input"); fileInput.type="file"; fileInput.accept="image/*";
      fileInput.setAttribute("aria-hidden","true"); fileInput.tabIndex=-1;
      fileInput.style.cssText="position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0";
      document.body.appendChild(fileInput); }
    fileInput.accept=accept||"image/*"; fileInput.value="";
    fileInput.onchange=()=>res(fileInput.files && fileInput.files[0] || null);
    fileInput.click();
  });
}
function isHeic(file){ return /hei[cf]/i.test((file.type||"")+" "+(file.name||"")); }
function shrink(file, max, keepAlpha){
  return new Promise((res,rej)=>{
    const url=URL.createObjectURL(file); const img=new Image();
    img.onload=()=>{
      try{
        const k=Math.min(1,max/Math.max(img.naturalWidth,img.naturalHeight)); const w=Math.max(1,Math.round(img.naturalWidth*k)), h=Math.max(1,Math.round(img.naturalHeight*k));
        const c=document.createElement("canvas"); c.width=w; c.height=h; const x=c.getContext("2d");
        if(!keepAlpha){ x.fillStyle="#fff"; x.fillRect(0,0,w,h); }
        x.drawImage(img,0,0,w,h);
        let out = keepAlpha ? c.toDataURL("image/webp",0.9) : c.toDataURL("image/jpeg",0.84);
        if(keepAlpha && !out.startsWith("data:image/webp")) out=c.toDataURL("image/png");
        URL.revokeObjectURL(url); res(out);
      }catch(e){ URL.revokeObjectURL(url); rej(e); }
    };
    img.onerror=()=>{ URL.revokeObjectURL(url); rej(new Error("decode")); };
    img.src=url;
  });
}
async function readImage(file, max, alpha){
  if(!file) return null;
  if(file.type && !file.type.startsWith("image/") && !isHeic(file)){ toast("Ese archivo no es una imagen. Usa una foto JPG o PNG."); return null; }
  try{ return await shrink(file,max,alpha); }
  catch(e){ toast(isHeic(file) ? "Esta foto está en formato HEIC (iPhone) y el navegador no la puede abrir. Guárdala como JPG o haz una captura de pantalla y súbela." : "No se pudo leer esa imagen. Prueba con una foto JPG o PNG."); return null; }
}
async function uploadTo(max, alpha){ const f=await pickImage(); return readImage(f,max,alpha); }
function dropFile(el, fn){
  if(!el) return;
  el.addEventListener("dragover",e=>{ if(e.dataTransfer && [...e.dataTransfer.types].includes("Files")){ e.preventDefault(); el.classList.add("dropping"); } });
  el.addEventListener("dragleave",()=>el.classList.remove("dropping"));
  el.addEventListener("drop",e=>{ e.preventDefault(); el.classList.remove("dropping"); const f=e.dataTransfer.files && e.dataTransfer.files[0]; if(f) fn(f); });
}

/* ---------- render ---------- */
function render(){
  const app = $("#app"); if(!app) return;
  const canEdit = mode==="writer" || mode==="local";
  if(!canEdit) editing = false;
  const cats = S.categories;
  if(!cats.some(c=>c.id===curCat)) curCat = cats[0] ? cats[0].id : null;
  const prevOk = curMonth > MIN_MONTH;

  app.innerHTML = `
  <div class="tabs" role="tablist" aria-label="Secciones">
    <button role="tab" data-view="cal" aria-selected="${view==="cal"}">Calendario</button>
    <button role="tab" data-view="res" aria-selected="${view==="res"}">Resultados</button>
    <button role="tab" data-view="stats" aria-selected="${view==="stats"}">Estadísticas</button>
  </div>
  <div class="bar">
    <div class="monthnav" ${view==="cal"?"":"hidden"}>
      <button class="iconbtn" id="prevM" aria-label="Mes anterior" ${prevOk?"":"disabled"}>‹</button>
      <div class="lbl">${esc(monthLabel(curMonth))}</div>
      <button class="iconbtn" id="nextM" aria-label="Mes siguiente">›</button>
    </div>
    <div class="actions">
      ${VIEWER?"":`<div class="lang-switch" role="group" aria-label="Idioma / Language"><button data-lang="es" aria-pressed="${lang()==="es"}">ES</button><button data-lang="en" aria-pressed="${lang()==="en"}">EN</button></div>`}
      ${view==="cal"?`<button class="btn" id="copyTxt">Copiar para WhatsApp</button>`:""}
      <button class="btn" id="exportImg">Descargar imagen</button>
      ${canEdit && !editing ? `<button class="btn primary" id="editOn">Editar calendario</button>`:""}
      ${editing ? `<button class="btn ${dirty?"dirty":"primary"}" id="publish">${mode==="local"?"Guardar":"Publicar cambios"}</button><button class="btn" id="editOff">Salir de edición</button>`:""}
    </div>
  </div>
  <div class="chips" role="group" aria-label="Categoría">
    ${cats.map(c=>`<button class="chip" data-cat="${c.id}" aria-pressed="${c.id===curCat}">${esc(c.name)}${view==="cal"?`<span class="n">${countFor(curMonth,c.id)}</span>`:""}</button>`).join("")}
    ${editing?`<button class="chip edit-cats" id="openCats2">✎ Editar categorías</button>`:""}
  </div>
  ${restored && editing && mode!=="local" ? `<div class="notice"><span>Recuperamos <b>cambios sin publicar</b> de tu última sesión en este navegador.</span><button class="btn" id="discard">Descartar cambios</button></div>`:""}
  ${S.sample && editing ? `<div class="notice"><span>Estos juegos, equipos y la academia son <b>datos de ejemplo</b>. Cámbialos por los tuyos o bórralos.</span><button class="btn danger" id="clearSample">Borrar todos los juegos de ejemplo</button></div>`:""}
  ${editing && view!=="cal" ? `<div class="editbar">
      <button class="btn primary" id="openRoster">Jugadores de ${esc(cat(curCat).name)}</button>
      <button class="btn" id="exportData">Guardar respaldo</button>
      <button class="btn" id="importData">Cargar respaldo</button>
      <button class="btn" id="siteUpdate">Actualizar página web</button>
      <span class="hint">${view==="res"?"Toca un juego para poner el marcador y las estadísticas de cada jugador.":"Las estadísticas se suman solas con lo que cargas en cada juego (pestaña Resultados)."}</span>
    </div>`:""}
  ${editing && view==="cal" ? `<div class="editbar">
      <button class="btn primary" id="addGame">+ Agregar juego</button>
      <button class="btn" id="bulkAdd">+ Agregar varios juegos</button>
      <button class="btn" id="openSettings">Academia, logos y colores</button>
      <button class="btn" id="openTeams">Equipos rivales</button>
      <button class="btn" id="openCats">Categorías</button>
      <button class="btn" id="copyMonth">Copiar mes a otra categoría</button>
      <button class="btn" id="exportData">Guardar respaldo</button>
      <button class="btn" id="importData">Cargar respaldo</button>
      <button class="btn" id="siteUpdate">Actualizar página web</button>
      <span class="hint">Toca un juego o un día del calendario para editarlo.</span>
    </div>`:""}
  ${mode==="local" && editing ? `<div class="notice"><span>Los cambios se guardan <b>solo en este navegador</b>. Para que los papás los vean, toca “Guardar respaldo”, abre el enlace publicado y usa “Cargar respaldo”.</span></div>`:""}
  ${!curCat ? `<div class="empty">Crea una categoría para empezar.</div>` : view==="res" ? resultsHTML() : view==="stats" ? statsHTML() : posterHTML()}
  `;
  document.documentElement.lang = lang();
  document.documentElement.setAttribute("translate","no");
  if(lang()==="en"){ [...app.children].forEach(ch=>{ if(!ch.classList.contains("noxl")) translateDOM(ch); }); const po=$("#poster"); if(po){ po.querySelectorAll(".upl,.empty,[aria-label]").forEach(x=>translateDOM(x.parentNode===po?x:x)); po.querySelectorAll("[aria-label]").forEach(el=>{ el.setAttribute("aria-label",tr(el.getAttribute("aria-label"))); }); } }
  bind();
}

function posterHTML(){
  const a = S.academy, c = cat(curCat), list = gamesFor(curMonth, curCat);
  const f = S.features[fkey()] || {};
  const [y,mo] = curMonth.split("-").map(Number);
  const nHome = list.filter(g=>g.ha==="home").length;
  return `
  <article class="poster noxl ${editing?"edit":""} ${list.length>=7?"dense":""}" id="poster" style="--p-navy:${esc(a.navy||"#0e1d4c")};--p-home:${esc(homeColor())};--p-away:${esc(a.away||"#6b7280")}">
    <header class="p-head">
      <div class="p-logo ${a.logo?"wide":""}">${a.logo?bg(a.logo):`<span class="ini">${esc(initials(a.name))}</span>`}</div>
      <div class="p-titles">
        <div class="p-acad">${esc(a.name)}</div>
        <div class="p-month">${esc(L().months[mo-1])} <span>${y}</span></div>
        <div class="p-sub">${esc(L().sub(list.length,nHome))}</div>
      </div>
      <div class="p-cat"><div><small>${L().cat}</small><b>${esc(c.name)}</b></div></div>
      <div class="stripe"></div>
    </header>
    <section class="p-player" aria-label="Jugador destacado">
      <div class="p-frame ${f.photo?"has":""}" id="pFrame">
      ${f.photo?`<div class="photo" role="img" aria-label="${esc(f.name||"Jugador")}" style="background-image:url(&quot;${f.photo}&quot;)"></div><div class="shade"></div>`:`<div class="ghost"><div class="num">${esc(f.number||c.name.replace(/\D/g,"")||"#")}</div></div>`}
      ${editing && !f.photo?`<div class="drophint" data-html2canvas-ignore>Toca “Subir foto del jugador” o arrastra una foto aquí</div>`:""}
      ${editing?`<div class="upl" data-html2canvas-ignore><button id="upPhoto">${f.photo?"Cambiar foto":"Subir foto del jugador"}</button>${f.photo?`<button id="adjPhoto">Mover / ajustar</button>`:""}<button id="editPlayer">Nombre y número</button>${f.photo?`<button id="rmPhoto">Quitar foto</button>`:""}</div>`:""}
      ${(f.name||f.tag||f.number)?`<div class="cap">
        ${f.tag?`<span class="tag">${esc(f.tag)}</span>`:""}
        ${f.name||f.number?`<div class="nm">${f.number?`<em>#${esc(f.number)}</em>`:""}${esc(f.name||"")}</div>`:""}
        ${f.pos?`<div class="pos">${esc(f.pos)}</div>`:""}
      </div>`:""}
      </div>
      <div class="p-fill">${a.logo?`<div class="wm">${bg(a.logo)}</div>`:""}</div>
    </section>
    <section class="p-main">
      <div class="legend">
        <span class="k"><i class="sw h"></i>${esc(L().legH)}</span>
        <span class="k"><i class="sw a"></i>${esc(L().legA)}</span>
      </div>
      <div class="games">
        ${list.length? listHTML(list) : `<div class="empty"><b>${esc(L().noGames)}</b>${editing?"Usa “+ Agregar juego”, “+ Agregar varios juegos” o toca un día del calendario.":esc(L().soon)}</div>`}
      </div>
      ${calHTML(y,mo,list)}
    </section>
    <footer class="p-foot">
      <div class="msg">${esc(footerText())}${a.arrive?` ${esc(L().arriveFoot(a.arrive))}`:""}</div>
      ${S.sponsors.length?`<div class="sponsors">${S.sponsors.map(s=>`<img src="${s.logo}" alt="${esc(s.name||"Patrocinador")}">`).join("")}</div>`:""}
    </footer>
  </article>`;
}

function listHTML(list){
  const byDate={}; list.forEach(g=>{ (byDate[g.date]=byDate[g.date]||[]).push(g); });
  const group = list.length>=5;
  let out="", lastWk="";
  list.forEach(g=>{
    if(group){ const d=parseDate(g.date); const mon=new Date(d); mon.setDate(d.getDate()-((d.getDay()+6)%7)); const sun=new Date(mon); sun.setDate(mon.getDate()+6);
      const k=mon.toDateString(); if(k!==lastWk){ lastWk=k;
        const m3=x=>{ const m=L().months[x.getMonth()].slice(0,3); return lang()==="en"?m:m.toLowerCase(); };
        out+=`<div class="wk">${esc(L().week(mon.getDate()+(mon.getMonth()!==sun.getMonth()?" "+m3(mon):""), sun.getDate()+" "+m3(sun)))}</div>`; } }
    const same=byDate[g.date]; out+=gameHTML(g, same.length>1 ? same.indexOf(g)+1 : 0);
  });
  return out;
}
function gameHTML(g, nth){
  const d = parseDate(g.date), t = team(g.opp), tm = fmtTime(g.time), home = g.ha==="home";
  const st = g.status && g.status!=="sched" ? `<span class="status ${g.status==="cancel"?"cancel":""}">${esc(L().status[g.status])}</span>` : "";
  const tag = editing ? "button" : "div";
  return `<${tag} class="game ${home?"home":"away"} ${g.status==="cancel"?"cancel":""}" data-game="${g.id}" ${editing?`aria-label="Editar juego del ${d.getDate()}"`:""}>
    <div class="date"><div class="dw">${L().dow[d.getDay()]}</div><div class="dd">${d.getDate()}</div></div>
    <div class="tlogo" style="${logoBG(t)}">${logoHTML(t)}</div>
    <div class="ginfo">
      <div class="opp"><span class="vs">${home?L().vs:L().at}</span>${esc(t.name)}${nth?`<span class="dh2">${L().game} ${nth}</span>`:""}</div>
      ${g.venue||g.address?`<div class="where">${pin}<span>${esc(g.venue)}${g.address?` <small>· ${esc(g.address)}</small>`:""}</span></div>`:""}
      ${g.note?`<div class="note">${esc(g.note)}</div>`:""}
    </div>
    <div class="gright">
      <span class="ha ${home?"home":"away"}">${home?L().home:L().away}</span>
      <div class="time">${esc(tm.h)}<small>${tm.ap}</small></div>
      ${hasScore(g) ? `<span class="res">${outcomeLabel(g)} ${g.score.us}-${g.score.them}</span>` : (st || (g.time && S.academy.arrive?`<div class="arrive">${L().arrive} ${esc(arrival(g.time))}</div>`:""))}
    </div>
  </${tag}>`;
}

function calHTML(y,mo,list){
  const first = new Date(y,mo-1,1).getDay(), days = new Date(y,mo,0).getDate();
  const byDay = {};
  list.forEach(g=>{ const d=+g.date.slice(8); (byDay[d]=byDay[d]||[]).push(g); });
  let cells = L().dow.map(d=>`<div class="dh">${d}</div>`).join("");
  for(let i=0;i<first;i++) cells += `<div class="d out"></div>`;
  for(let d=1; d<=days; d++){
    const gs = byDay[d]||[]; const h=gs.some(g=>g.ha==="home"), a=gs.some(g=>g.ha==="away");
    const cls = h&&a?"both":h?"home":a?"away":"";
    const tl = gs.length===1 ? fmtTime(gs[0].time) : null;
    const inner = `<span>${d}</span>${tl&&gs[0].time?`<span class="t">${tl.h}${tl.ap.toLowerCase()}</span>`:gs.length>1?`<span class="t">${esc(L().nGames(gs.length))}</span>`:""}`;
    cells += editing ? `<button class="d ${cls}" data-day="${d}" aria-label="Día ${d}">${inner}</button>` : `<div class="d ${cls}">${inner}</div>`;
  }
  return `<div class="cal" aria-label="Calendario del mes">${cells}</div>`;
}

/* ---------- results & stats ---------- */
const T2 = (es,en) => lang()==="en" ? en : es;
const N = v => { const n=parseInt(v,10); return isNaN(n)||n<0 ? 0 : n; };
function hasScore(g){ return g.score && g.score.us!=null && g.score.them!=null && g.score.us!=="" && g.score.them!==""; }
function outcome(g){ return g.score.us>g.score.them ? "w" : g.score.us<g.score.them ? "l" : "t"; }
function outcomeLabel(g){ const o=outcome(g); return o==="w"?L().win:o==="l"?L().loss:L().tie; }
function ipToOuts(ip){ if(ip==null||ip==="") return 0; const s=String(ip).replace(",","."); const [w,f]=s.split("."); return N(w)*3 + Math.min(2,N((f||"0").slice(0,1))); }
function outsToIP(o){ return Math.floor(o/3)+"."+(o%3); }
function rate(a,b,d=3){ if(!b) return "—"; const v=(a/b).toFixed(d); return d===3 ? v.replace(/^0(?=\.)/,"") : v; }
function todayStr(){ const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function catGames(c){ return S.games.filter(g=>g.cat===c); }
function playersOf(c){ return S.players.filter(p=>p.cat===c).sort((a,b)=>(parseInt(a.number)||999)-(parseInt(b.number)||999) || a.name.localeCompare(b.name)); }
function teamRecord(c){
  const pl=catGames(c).filter(hasScore).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
  const r={w:0,l:0,t:0,rs:0,ra:0,hw:0,hl:0,aw:0,al:0,list:pl};
  pl.forEach(g=>{ const o=outcome(g); r[o]++; r.rs+=N(g.score.us); r.ra+=N(g.score.them); if(o==="w"){ g.ha==="home"?r.hw++:r.aw++; } if(o==="l"){ g.ha==="home"?r.hl++:r.al++; } });
  let streak=""; if(pl.length){ const last=outcome(pl[pl.length-1]); let n=0; for(let i=pl.length-1;i>=0 && outcome(pl[i])===last;i--) n++; streak=(last==="w"?L().win:last==="l"?L().loss:L().tie)+n; }
  r.streak=streak; r.last5=pl.slice(-5).map(g=>outcome(g));
  return r;
}
function playerStats(c){
  const m={}; playersOf(c).forEach(p=>m[p.id]={p, g:0, ab:0,r:0,h:0,d:0,t:0,hr:0,rbi:0,bb:0,so:0,sb:0, pg:0,outs:0,ph:0,pr:0,er:0,pbb:0,pso:0});
  catGames(c).forEach(g=>{
    Object.entries(g.box||{}).forEach(([pid,b])=>{ const x=m[pid]; if(!x) return; x.g++; ["ab","r","h","d","t","hr","rbi","bb","so","sb"].forEach(k=>x[k]+=N(b[k])); });
    Object.entries(g.pit||{}).forEach(([pid,b])=>{ const x=m[pid]; if(!x) return; x.pg++; x.outs+=ipToOuts(b.ip); x.ph+=N(b.h); x.pr+=N(b.r); x.er+=N(b.er); x.pbb+=N(b.bb); x.pso+=N(b.so); });
  });
  return Object.values(m);
}
function boardHead(title, sub){
  const a=S.academy, c=cat(curCat);
  return `<header class="p-head">
      <div class="p-logo ${a.logo?"wide":""}">${a.logo?bg(a.logo):`<span class="ini">${esc(initials(a.name))}</span>`}</div>
      <div class="p-titles"><div class="p-acad">${esc(a.name)}</div><div class="p-month">${esc(title)}</div><div class="p-sub">${esc(sub)}</div></div>
      <div class="p-cat"><div><small>${L().cat}</small><b>${esc(c.name)}</b></div></div>
      <div class="stripe"></div></header>`;
}
function recStr(r){ return r.w+"-"+r.l+(r.t?"-"+r.t:""); }
function resultsHTML(){
  const a=S.academy, r=teamRecord(curCat), today=todayStr();
  const all=catGames(curCat).sort((x,y)=>(y.date+y.time).localeCompare(x.date+x.time));
  const shown=all.filter(g=>hasScore(g) || (editing && g.date<=today));
  const card=g=>{ const d=parseDate(g.date), t=team(g.opp), home=g.ha==="home", tag=editing?"button":"div";
    return `<${tag} class="game ${home?"home":"away"} ${g.status==="cancel"?"cancel":""}" data-score="${g.id}">
      <div class="date"><div class="dw">${L().dow[d.getDay()]}</div><div class="dd">${d.getDate()}</div><div class="dw">${esc(L().months[d.getMonth()].slice(0,3).toUpperCase())}</div></div>
      <div class="tlogo" style="${logoBG(t)}">${logoHTML(t)}</div>
      <div class="ginfo"><div class="opp"><span class="vs">${home?L().vs:L().at}</span>${esc(t.name)}</div>
        ${g.venue?`<div class="where">${pin}<span>${esc(g.venue)}</span></div>`:""}
        ${g.recap?`<div class="note">${esc(g.recap)}</div>`:""}</div>
      <div class="gright">${hasScore(g)?`<div class="score"><span class="out ${outcome(g)}">${outcomeLabel(g)}</span><b>${N(g.score.us)} – ${N(g.score.them)}</b></div>`:`<span class="pending">${T2("Falta marcador","Score needed")}</span>`}
        <span class="ha ${home?"home":"away"}">${home?L().home:L().away}</span></div>
    </${tag}>`; };
  return `<article class="board noxl ${editing?"edit":""}" id="poster" style="--p-navy:${esc(a.navy||"#0e1d4c")};--p-home:${esc(homeColor())};--p-away:${esc(a.away||"#6b7280")}">
    ${boardHead(T2("Resultados","Results"), T2("Récord","Record")+" "+recStr(r)+" · "+r.list.length+" "+T2(r.list.length===1?"juego jugado":"juegos jugados", r.list.length===1?"game played":"games played"))}
    <div class="b-body">
      <div class="tiles">
        <div class="tile"><small>${T2("Récord","Record")}</small><b>${recStr(r)}</b></div>
        <div class="tile"><small>${T2("Carreras a favor","Runs scored")}</small><b>${r.rs}</b></div>
        <div class="tile"><small>${T2("Carreras en contra","Runs allowed")}</small><b>${r.ra}</b></div>
        <div class="tile"><small>${T2("Racha","Streak")}</small><b>${r.streak||"—"}</b></div>
      </div>
      <div class="games">${shown.length ? shown.map(card).join("") : `<div class="empty"><b>${T2("Todavía no hay resultados","No results yet")}</b>${editing?T2("Los juegos aparecen aquí desde el día en que se juegan. Tócalos para poner el marcador.","Games show up here from game day. Tap one to enter the score."):T2("Aquí verás el marcador de cada juego.","Each game's final score will show up here.")}</div>`}</div>
    </div>
    <footer class="p-foot"><div class="msg">${esc(footerText())}</div></footer>
  </article>`;
}
function statsHTML(){
  const a=S.academy, r=teamRecord(curCat), ps=playerStats(curCat), pct=r.list.length?((r.w+r.t/2)/r.list.length).toFixed(3).replace(/^0(?=\.)/,""):"—";
  const bat=ps.slice().sort((x,y)=>(y.ab?y.h/y.ab:-1)-(x.ab?x.h/x.ab:-1) || y.h-x.h);
  const pit=ps.filter(x=>x.outs>0||x.pg>0).sort((x,y)=>y.outs-x.outs);
  const lead=(key,fmt,filter)=>{ const c=ps.filter(filter||(x=>x[key]>0)).sort((x,y)=>fmt(y)-fmt(x))[0]; return c; };
  const ldAvg=ps.filter(x=>x.ab>0).sort((x,y)=>y.h/y.ab-x.h/x.ab || y.ab-x.ab)[0];
  const ldH=lead("h",x=>x.h), ldRbi=lead("rbi",x=>x.rbi), ldSo=lead("pso",x=>x.pso);
  const nm=x=>x?`${x.p.number?"#"+esc(x.p.number)+" ":""}${esc(x.p.name)}`:"—";
  const name=x=>`<span class="num">${esc(x.p.number||"")}</span><span class="pl">${esc(x.p.name)}</span>`;
  const H=(es,en)=>T2(es,en);
  const batRows=bat.map(x=>`<tr><td>${name(x)}</td><td>${x.g}</td><td>${x.ab}</td><td>${x.r}</td><td>${x.h}</td><td>${x.d}</td><td>${x.t}</td><td>${x.hr}</td><td>${x.rbi}</td><td>${x.bb}</td><td>${x.so}</td><td>${x.sb}</td><td class="k">${rate(x.h,x.ab)}</td><td>${rate(x.h+x.bb,x.ab+x.bb)}</td><td>${rate(x.h+x.d+2*x.t+3*x.hr,x.ab)}</td></tr>`).join("");
  const pitRows=pit.map(x=>`<tr><td>${name(x)}</td><td>${x.pg}</td><td>${outsToIP(x.outs)}</td><td>${x.ph}</td><td>${x.pr}</td><td>${x.er}</td><td>${x.pbb}</td><td>${x.pso}</td><td class="k">${x.outs?(x.er*9/(x.outs/3)).toFixed(2):"—"}</td><td>${x.outs?((x.ph+x.pbb)/(x.outs/3)).toFixed(2):"—"}</td></tr>`).join("");
  return `<article class="board noxl ${editing?"edit":""}" id="poster" style="--p-navy:${esc(a.navy||"#0e1d4c")};--p-home:${esc(homeColor())};--p-away:${esc(a.away||"#6b7280")}">
    ${boardHead(H("Estadísticas","Stats"), H("Récord","Record")+" "+recStr(r)+" · "+ps.length+" "+H("jugadores","players"))}
    <div class="b-body">
      <h3 class="sh">${H("Equipo","Team")}</h3>
      <div class="tiles">
        <div class="tile"><small>${H("Récord","Record")}</small><b>${recStr(r)}</b></div>
        <div class="tile"><small>${H("% de victorias","Win %")}</small><b>${pct}</b></div>
        <div class="tile"><small>${H("Carreras a favor","Runs scored")}</small><b>${r.rs}</b></div>
        <div class="tile"><small>${H("Carreras en contra","Runs allowed")}</small><b>${r.ra}</b></div>
        <div class="tile"><small>${H("Diferencia","Run diff")}</small><b>${r.rs-r.ra>0?"+":""}${r.rs-r.ra}</b></div>
        <div class="tile"><small>${H("En casa","Home")}</small><b>${r.hw}-${r.hl}</b></div>
        <div class="tile"><small>${H("De visitante","Away")}</small><b>${r.aw}-${r.al}</b></div>
        <div class="tile"><small>${H("Racha","Streak")}</small><b>${r.streak||"—"}</b></div>
      </div>
      ${ps.some(x=>x.ab||x.outs)?`<h3 class="sh">${H("Líderes","Leaders")}</h3>
      <div class="leaders">
        <div class="leader"><small>${H("Promedio (AVG)","Batting avg")}</small><b>${ldAvg?rate(ldAvg.h,ldAvg.ab):"—"}</b><span>${nm(ldAvg)}</span></div>
        <div class="leader"><small>Hits</small><b>${ldH?ldH.h:"—"}</b><span>${nm(ldH)}</span></div>
        <div class="leader"><small>${H("Impulsadas","RBI")}</small><b>${ldRbi?ldRbi.rbi:"—"}</b><span>${nm(ldRbi)}</span></div>
        <div class="leader"><small>${H("Ponches (pitcher)","Strikeouts (P)")}</small><b>${ldSo?ldSo.pso:"—"}</b><span>${nm(ldSo)}</span></div>
      </div>`:""}
      <h3 class="sh">${H("Bateo","Batting")}</h3>
      ${bat.length?`<div class="stwrap"><table class="stbl"><thead><tr><th>${H("Jugador","Player")}</th><th>${H("J","G")}</th><th>${H("VB","AB")}</th><th>${H("C","R")}</th><th>H</th><th>2B</th><th>3B</th><th>HR</th><th>${H("CI","RBI")}</th><th>BB</th><th>${H("K","SO")}</th><th>${H("BR","SB")}</th><th>AVG</th><th>OBP</th><th>SLG</th></tr></thead><tbody>${batRows}</tbody></table></div>
      <div class="legend2">${H("J juegos · VB veces al bate · C carreras · H hits · CI carreras impulsadas · BB boletos · K ponches · BR bases robadas · AVG promedio · OBP en base · SLG slugging","G games · AB at bats · R runs · H hits · RBI runs batted in · BB walks · SO strikeouts · SB stolen bases · AVG average · OBP on-base · SLG slugging")}</div>`
      :`<div class="empty"><b>${H("Sin jugadores todavía","No players yet")}</b>${editing?H("Toca “Jugadores” para agregar el roster de esta categoría.","Tap “Players” to add this division's roster."):H("Pronto publicaremos las estadísticas.","Stats coming soon.")}</div>`}
      ${pit.length?`<h3 class="sh">${H("Pitcheo","Pitching")}</h3>
      <div class="stwrap"><table class="stbl"><thead><tr><th>${H("Jugador","Player")}</th><th>${H("J","G")}</th><th>IP</th><th>H</th><th>${H("C","R")}</th><th>${H("CL","ER")}</th><th>BB</th><th>${H("K","SO")}</th><th>ERA</th><th>WHIP</th></tr></thead><tbody>${pitRows}</tbody></table></div>
      <div class="legend2">${H("IP entradas lanzadas · CL carreras limpias · ERA carreras limpias por 9 entradas · WHIP boletos + hits por entrada","IP innings pitched · ER earned runs · ERA earned runs per 9 innings · WHIP walks + hits per inning")}</div>`:""}
    </div>
    <footer class="p-foot"><div class="msg">${esc(footerText())}</div></footer>
  </article>`;
}

function scoreDialog(g){
  const t=team(g.opp), pls=playersOf(g.cat), box=g.box||{}, pit=g.pit||{};
  const v=(o,k)=>o&&o[k]!=null&&o[k]!==0&&o[k]!==""?o[k]:"";
  const BK=["ab","r","h","d","t","hr","rbi","bb","so","sb"], BH=["VB","C","H","2B","3B","HR","CI","BB","K","BR"];
  const PK=["ip","h","r","er","bb","so"], PH=["IP","H","C","CL","BB","K"];
  const row=(p,o,keys,grp)=>`<tr><td><b>${esc(p.number||"")}</b> ${esc(p.name)}</td>${keys.map(k=>`<td><input type="${k==="ip"?"text":"number"}" ${k==="ip"?'inputmode="decimal" placeholder="0.0"':'min="0" inputmode="numeric"'} data-g="${grp}" data-p="${p.id}" data-k="${k}" value="${esc(v(o[p.id],k))}" aria-label="${esc(p.name)} ${k}"></td>`).join("")}</tr>`;
  const d=parseDate(g.date);
  dialog({title:"Marcador y estadísticas", wide:"xl", body:`
    <p class="small" style="margin:0">${esc(L().dowLong[d.getDay()])} ${d.getDate()} · ${g.ha==="home"?L().vs:L().at} ${esc(t.name)}</p>
    <div class="scorein">
      <label class="fld"><span>${esc(S.academy.name)}</span><input type="number" min="0" inputmode="numeric" id="scUs" value="${hasScore(g)?N(g.score.us):""}"></label>
      <div class="vs2">–</div>
      <label class="fld"><span>${esc(t.name)}</span><input type="number" min="0" inputmode="numeric" id="scThem" value="${hasScore(g)?N(g.score.them):""}"></label>
    </div>
    <label class="fld"><span>Resumen del juego (opcional)</span><input type="text" id="scRecap" value="${esc(g.recap||"")}" placeholder="Ej. Jonrón de Carlos en la 5ta"></label>
    ${pls.length?`
    <div class="sect"><h3>Bateo</h3><p class="small" style="margin:0">Deja en blanco a quien no jugó. VB veces al bate · C carreras · CI impulsadas · K ponches · BR bases robadas.</p>
      <div class="bulk"><table class="boxtbl"><thead><tr><th>Jugador</th>${BH.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${pls.map(p=>row(p,box,BK,"b")).join("")}</tbody></table></div></div>
    <div class="sect"><h3>Pitcheo</h3><p class="small" style="margin:0">Solo quien lanzó. IP en entradas: 3.1 = 3 entradas y 1 out. CL carreras limpias.</p>
      <div class="bulk"><table class="boxtbl"><thead><tr><th>Jugador</th>${PH.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${pls.map(p=>row(p,pit,PK,"p")).join("")}</tbody></table></div></div>`
    :`<div class="notice"><span>Para cargar estadísticas, primero agrega los <b>jugadores</b> de ${esc(cat(g.cat).name)}.</span><button class="btn" id="scRoster">Agregar jugadores</button></div>`}`,
    footer:`${hasScore(g)?`<div class="left"><button class="btn danger" id="scClear">Borrar marcador</button></div>`:""}<button class="btn" data-close>Cancelar</button><button class="btn primary" id="scSave">Guardar</button>`,
    onMount:(s,close)=>{
      const rb=s.querySelector("#scRoster"); if(rb) rb.onclick=()=>{ close(); rosterDialog(()=>scoreDialog(g)); };
      const clr=s.querySelector("#scClear"); if(clr) clr.onclick=()=>{ close(); confirmBox("¿Borrar el marcador?","Se borran el marcador y las estadísticas de este juego.","Borrar",()=>{ delete g.score; delete g.box; delete g.pit; delete g.recap; touch(); }); };
      s.querySelector("#scSave").onclick=()=>{
        const us=s.querySelector("#scUs").value, them=s.querySelector("#scThem").value;
        const nb={}, np={}; let warn="";
        s.querySelectorAll("input[data-g]").forEach(i=>{ const val=i.value.trim(); if(val==="") return; const tgt=i.dataset.g==="b"?nb:np; (tgt[i.dataset.p]=tgt[i.dataset.p]||{})[i.dataset.k]= i.dataset.k==="ip" ? val.replace(",",".") : N(val); });
        Object.values(nb).forEach(b=>{ if(N(b.h)>N(b.ab)) warn="Hay un jugador con más hits que veces al bate. Revísalo."; });
        if((us==="")!==(them==="")){ toast("Escribe el marcador de los dos equipos"); return; }
        if(us!==""){ g.score={us:N(us), them:N(them)}; } else delete g.score;
        g.box=nb; g.pit=np; g.recap=s.querySelector("#scRecap").value.trim();
        close(); touch(); toast(warn||"Marcador guardado");
      };
    }});
}
function rosterDialog(after){
  const c=cat(curCat); let list=S.players.filter(p=>p.cat===curCat).map(p=>Object.assign({},p));
  dialog({title:"Jugadores · "+c.name, wide:true, body:`
    <p class="small" style="margin:0">Número, nombre y posición. Para agregar muchos de una vez, pega la lista abajo (un jugador por línea, ej. “27 Carlos Pérez”).</p>
    <div class="list" id="rList"></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="rAdd">+ Agregar jugador</button></div>
    <label class="fld"><span>Pegar lista de jugadores</span><textarea id="rPaste" rows="3" placeholder="27 Carlos Pérez&#10;8 Luis Gómez"></textarea></label>
    <div><button class="btn" id="rParse">Agregar la lista</button></div>`,
    footer:`<button class="btn" data-close>Cancelar</button><button class="btn primary" id="rSave">Guardar</button>`,
    onMount:(s,close)=>{
      const used=id=>S.games.some(g=>(g.box&&g.box[id])||(g.pit&&g.pit[id]));
      const draw=()=>{ s.querySelector("#rList").innerHTML=list.map(p=>`<div class="li">
          <input type="text" data-rf="number" data-id="${p.id}" value="${esc(p.number||"")}" placeholder="#" style="max-width:64px;flex:none" aria-label="Número">
          <input type="text" data-rf="name" data-id="${p.id}" value="${esc(p.name||"")}" placeholder="Nombre" aria-label="Nombre">
          <input type="text" data-rf="pos" data-id="${p.id}" value="${esc(p.pos||"")}" placeholder="Pos." style="max-width:90px;flex:none" aria-label="Posición">
          <button class="x" data-rrm="${p.id}" aria-label="Eliminar jugador">×</button></div>`).join("") || `<p class="small" style="margin:0">Aún no hay jugadores en esta categoría.</p>`;
        s.querySelectorAll("[data-rf]").forEach(i=>i.oninput=()=>{ const p=list.find(x=>x.id===i.dataset.id); if(p) p[i.dataset.rf]=i.value; });
        s.querySelectorAll("[data-rrm]").forEach(b=>b.onclick=()=>{ if(used(b.dataset.rrm)){ toast("Este jugador tiene estadísticas guardadas. Bórralas de los juegos primero."); return; } list=list.filter(x=>x.id!==b.dataset.rrm); draw(); });
      };
      draw();
      s.querySelector("#rAdd").onclick=()=>{ list.push({id:uid(),cat:curCat,name:"",number:"",pos:""}); draw(); const ins=s.querySelectorAll('[data-rf="name"]'); ins[ins.length-1].focus(); };
      s.querySelector("#rParse").onclick=()=>{ const ta=s.querySelector("#rPaste"); let n=0; ta.value.split(/\n+/).map(l=>l.trim()).filter(Boolean).forEach(l=>{ const m=l.match(/^#?(\d{1,3})[\s.,-]+(.+)$/); list.push({id:uid(),cat:curCat,number:m?m[1]:"",name:(m?m[2]:l).trim(),pos:""}); n++; }); ta.value=""; draw(); if(n) toast(n+(n===1?" jugador agregado":" jugadores agregados")); };
      s.querySelector("#rSave").onclick=()=>{ const keep=list.filter(p=>(p.name||"").trim()||used(p.id)).map(p=>Object.assign(p,{name:(p.name||"").trim()||"Sin nombre",number:(p.number||"").trim(),pos:(p.pos||"").trim()}));
        S.players=S.players.filter(p=>p.cat!==curCat).concat(keep); close(); touch(); toast("Jugadores guardados"); if(after) after(); };
    }});
}

/* ---------- bindings ---------- */
function on(id, fn){ const el=document.getElementById(id); if(el) el.addEventListener("click", fn); }
function bind(){
  document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>{ view=b.dataset.view; ls(()=>localStorage.setItem("bb-cal-tab",view)); render(); }));
  on("openRoster", ()=>rosterDialog());
  document.querySelectorAll("button[data-score]").forEach(b=>b.addEventListener("click",()=>{ const g=S.games.find(x=>x.id===b.dataset.score); if(g) scoreDialog(g); }));
  on("prevM", ()=>{ if(curMonth>MIN_MONTH){ curMonth=addMonth(curMonth,-1); saveView(); render(); } });
  on("nextM", ()=>{ curMonth=addMonth(curMonth,1); saveView(); render(); });
  document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{ viewLang=b.dataset.lang; try{ localStorage.setItem(LANG_KEY, viewLang); }catch(e){} render(); }));
  document.querySelectorAll("[data-cat]").forEach(b=>b.addEventListener("click",()=>{ curCat=b.dataset.cat; saveView(); render(); }));
  on("editOn", ()=>{ editing=true; render(); });
  on("editOff", ()=>{ editing=false; render(); if(dirty && mode==="writer") toast("Tienes cambios sin publicar"); });
  on("publish", publish);
  on("discard", ()=>confirmBox("¿Descartar los cambios sin publicar?","Se borran los cambios que no has publicado. Esto no se puede deshacer.","Descartar",()=>{ ls(()=>localStorage.removeItem(DRAFT_KEY)); S = embedded || sampleState(); dirty=false; restored=false; render(); toast("Cambios descartados"); }));
  on("clearSample", ()=>confirmBox("¿Borrar todos los juegos de ejemplo?","Se eliminan todos los juegos de todas las categorías. Equipos y categorías se mantienen.","Borrar juegos",()=>{ S.games=[]; S.sample=false; touch(); }));
  on("addGame", ()=>gameDialog(null, null));
  on("bulkAdd", bulkDialog);
  on("openSettings", settingsDialog);
  on("openTeams", teamsDialog);
  on("openCats", catsDialog);
  on("openCats2", catsDialog);
  on("copyMonth", copyMonthDialog);
  on("exportData", ()=>exportData());
  on("siteUpdate", siteUpdateDialog);
  on("importData", importData);
  on("copyTxt", copyText);
  on("exportImg", exportImage);
  on("upPhoto", async ()=>{ const src=await uploadTo(1000,false); if(src) cropDialog(src, null); });
  on("adjPhoto", ()=>{ const f=S.features[fkey()]||{}; if(f.photo) cropDialog(f.src||f.photo, f.src?f.crop:null); });
  { const fr=document.getElementById("pFrame"); if(fr && editing) dropFile(fr, async f=>{ const src=await readImage(f,1000,false); if(src) cropDialog(src,null); }); }
  { const fr=document.getElementById("pFrame"); if(fr && editing && fr.classList.contains("has")) fr.addEventListener("click",e=>{ if(e.target.closest(".upl")) return; const f=S.features[fkey()]||{}; cropDialog(f.src||f.photo, f.src?f.crop:null); }); }
  on("rmPhoto", ()=>{ const k=fkey(); if(S.features[k]){ delete S.features[k].photo; delete S.features[k].src; delete S.features[k].crop; touch(); } });
  on("editPlayer", playerDialog);
  document.querySelectorAll("button[data-game]").forEach(b=>b.addEventListener("click",()=>gameDialog(S.games.find(g=>g.id===b.dataset.game))));
  document.querySelectorAll("button[data-day]").forEach(b=>b.addEventListener("click",()=>{
    const date = curMonth+"-"+String(b.dataset.day).padStart(2,"0");
    const ex = gamesFor(curMonth,curCat).filter(g=>g.date===date);
    gameDialog(ex.length===1?ex[0]:null, date);
  }));
}

/* ---------- dialogs ---------- */
function dialog({title, body, footer, onMount, wide}){
  const s=document.createElement("div"); s.className="scrim";
  s.innerHTML=`<div class="dlg" role="dialog" aria-modal="true" aria-label="${esc(title)}" ${wide?`style="max-width:${wide==="xl"?"960px":"680px"}"`:""}><header><h2>${esc(title)}</h2><button class="x" data-close aria-label="Cerrar">×</button></header><div class="body">${body}</div>${footer?`<footer>${footer}</footer>`:""}</div>`;
  const close=()=>{ s.remove(); document.removeEventListener("keydown",esc_); };
  const esc_=e=>{ if(e.key==="Escape") close(); };
  s.addEventListener("click",e=>{ if(e.target===s || e.target.closest("[data-close]")) close(); });
  document.addEventListener("keydown",esc_);
  (document.getElementById("root")||document.body).appendChild(s);
  translateDOM(s);
  if(lang()==="en"){ const mo=new MutationObserver(()=>translateDOM(s)); mo.observe(s,{childList:true,subtree:true}); }
  if(onMount) onMount(s, close);
  const f=s.querySelector("input,select,textarea"); if(f) f.focus();
  return {el:s, close};
}
function confirmBox(title, text, okLabel, fn){
  dialog({title, body:`<p style="margin:0">${esc(text)}</p>`, footer:`<button class="btn" data-close>Cancelar</button><button class="btn primary" id="okC" style="background:#b3261e;border-color:#b3261e;color:#fff">${esc(okLabel)}</button>`,
    onMount:(s,close)=>{ s.querySelector("#okC").onclick=()=>{ close(); fn(); }; }});
}

function gameDialog(g, presetDate, prefill){
  const isNew = !g;
  const d = g ? Object.assign({},g) : prefill ? Object.assign({},prefill,{id:uid()}) : {id:uid(), date:presetDate||curMonth+"-01", time:"10:00", cat:curCat, opp:S.teams[0]?S.teams[0].id:"", ha:"home", venue:S.academy.homeVenue||"", address:S.academy.homeAddress||"", status:"sched", note:""};
  const teamOpts = S.teams.map(t=>`<option value="${t.id}" ${t.id===d.opp?"selected":""}>${esc(t.name)}</option>`).join("") + `<option value="__new">+ Nuevo equipo…</option>`;
  const body = `
    <div class="row">
      <label class="fld"><span>Fecha</span><input type="date" id="gDate" min="${MIN_MONTH}-01" value="${esc(d.date)}"></label>
      <label class="fld"><span>Hora (primer lanzamiento)</span><input type="time" id="gTime" value="${esc(d.time)}"></label>
    </div>
    <div class="row">
      <label class="fld"><span>Categoría</span><select id="gCat">${S.categories.map(c=>`<option value="${c.id}" ${c.id===d.cat?"selected":""}>${esc(c.name)}</option>`).join("")}</select></label>
      <label class="fld"><span>Rival</span><select id="gOpp">${teamOpts}</select></label>
    </div>
    <label class="fld" id="newTeamWrap" hidden><span>Nombre del nuevo equipo</span><input type="text" id="gNewTeam" placeholder="Ej. Toros"></label>
    <div class="fld"><span>¿Dónde jugamos?</span>
      <div class="seg"><button type="button" class="h" id="gH" aria-pressed="${d.ha==="home"}">LOCAL (HOME)</button><button type="button" class="a" id="gA" aria-pressed="${d.ha==="away"}">VISITANTE (AWAY)</button></div>
    </div>
    <div class="row">
      <label class="fld"><span>Estadio / campo</span><input type="text" id="gVenue" value="${esc(d.venue)}" list="venues"></label>
      <label class="fld"><span>Dirección</span><input type="text" id="gAddr" value="${esc(d.address)}"></label>
    </div>
    <datalist id="venues">${[...new Set(S.games.map(x=>x.venue).filter(Boolean))].map(v=>`<option value="${esc(v)}">`).join("")}</datalist>
    <div class="row">
      <label class="fld"><span>Estado</span><select id="gStatus">${Object.entries(STATUS).map(([k,v])=>`<option value="${k}" ${k===d.status?"selected":""}>${v}</option>`).join("")}</select></label>
      <label class="fld"><span>Nota para los papás (opcional)</span><input type="text" id="gNote" value="${esc(d.note)}" placeholder="Ej. Traer uniforme blanco"></label>
    </div>`;
  const footer = `${!isNew?`<div class="left"><button class="btn danger" id="gDel">Eliminar</button><button class="btn" id="gDup">Duplicar</button></div>`:""}<button class="btn" data-close>Cancelar</button><button class="btn primary" id="gSave">${isNew?"Agregar juego":"Guardar"}</button>`;
  dialog({title:isNew?(prefill?"Copia del juego":"Nuevo juego"):"Editar juego", body, footer, onMount:(s,close)=>{
    const H=s.querySelector("#gH"), A=s.querySelector("#gA"), V=s.querySelector("#gVenue"), AD=s.querySelector("#gAddr");
    const setHA=v=>{ const was=d.ha; d.ha=v; H.setAttribute("aria-pressed",v==="home"); A.setAttribute("aria-pressed",v==="away");
      if(v==="home" && (!V.value || was!=="home")){ V.value=S.academy.homeVenue||""; AD.value=S.academy.homeAddress||""; }
      if(v==="away" && V.value===S.academy.homeVenue){ V.value=""; AD.value=""; } };
    H.onclick=()=>setHA("home"); A.onclick=()=>setHA("away");
    V.addEventListener("change",()=>{ const prev=S.games.find(x=>x.venue===V.value && x.address); if(prev && !AD.value) AD.value=prev.address; });
    const O=s.querySelector("#gOpp"), NW=s.querySelector("#newTeamWrap");
    const syncNew=()=>{ NW.hidden = O.value!=="__new"; if(!NW.hidden) s.querySelector("#gNewTeam").focus(); };
    O.onchange=syncNew; if(!S.teams.length){ O.value="__new"; syncNew(); }
    const collect=()=>{
      let opp=O.value;
      if(opp==="__new"){ const n=s.querySelector("#gNewTeam").value.trim(); if(!n){ toast("Escribe el nombre del equipo rival"); return null; } const t={id:uid(),name:n,logo:""}; S.teams.push(t); opp=t.id; }
      const date=s.querySelector("#gDate").value; if(!date){ toast("Elige la fecha del juego"); return null; }
      if(date < MIN_MONTH+"-01"){ toast("El calendario empieza en septiembre 2026"); return null; }
      return Object.assign(d,{date, time:s.querySelector("#gTime").value, cat:s.querySelector("#gCat").value, opp, venue:V.value.trim(), address:AD.value.trim(), status:s.querySelector("#gStatus").value, note:s.querySelector("#gNote").value.trim()});
    };
    s.querySelector("#gSave").onclick=()=>{ const r=collect(); if(!r) return;
      if(isNew) S.games.push(r); else S.games[S.games.findIndex(x=>x.id===r.id)]=r;
      curMonth=r.date.slice(0,7); curCat=r.cat; close(); touch(); toast(isNew?"Juego agregado":"Juego actualizado"); };
    const del=s.querySelector("#gDel"); if(del) del.onclick=()=>{ close(); confirmBox("¿Eliminar este juego?", `${team(d.opp).name} · ${d.date}`, "Eliminar", ()=>{ S.games=S.games.filter(x=>x.id!==d.id); touch(); toast("Juego eliminado"); }); };
    const dup=s.querySelector("#gDup"); if(dup) dup.onclick=()=>{ const r=collect(); if(!r) return; S.games[S.games.findIndex(x=>x.id===r.id)]=r; const dt=parseDate(r.date); dt.setDate(dt.getDate()+7); const c=Object.assign({},r,{date:dt.getFullYear()+"-"+String(dt.getMonth()+1).padStart(2,"0")+"-"+String(dt.getDate()).padStart(2,"0"),status:"sched",note:""}); close(); gameDialog(null,null,c); const sc=document.querySelectorAll(".scrim .dlg h2"); sc[sc.length-1].textContent="Copia del juego (+7 días)"; };
  }});
}
function bulkDialog(){
  const c=cat(curCat);
  const teamOpts=sel=>S.teams.map(t=>`<option value="${t.id}" ${t.id===sel?"selected":""}>${esc(t.name)}</option>`).join("");
  const venues=[...new Set(S.games.map(x=>x.venue).filter(Boolean))];
  let n=0;
  const row=(date)=>{ n++; return `<tr data-r>
    <td><input type="date" data-f="date" min="${MIN_MONTH}-01" value="${date||""}" aria-label="Fecha"></td>
    <td><input type="time" data-f="time" value="10:00" aria-label="Hora"></td>
    <td><select data-f="opp" aria-label="Rival"><option value="">Rival…</option>${teamOpts("")}</select><input type="text" data-f="newopp" placeholder="o escribe uno nuevo" style="margin-top:4px" aria-label="Rival nuevo"></td>
    <td><select data-f="ha" aria-label="Local o visitante"><option value="home">Local</option><option value="away">Visitante</option></select></td>
    <td><input type="text" data-f="venue" list="bvenues" placeholder="Estadio (vacío = el nuestro si es local)" aria-label="Estadio"></td>
    <td><button class="x" data-rm aria-label="Quitar fila">×</button></td></tr>`; };
  // suggest the month's weekends without games as starting dates
  const [y,mo]=curMonth.split("-").map(Number), days=new Date(y,mo,0).getDate(), taken=new Set(gamesFor(curMonth,curCat).map(g=>g.date));
  const sugg=[]; for(let d=1; d<=days && sugg.length<4; d++){ const dt=new Date(y,mo-1,d); const ds=curMonth+"-"+String(d).padStart(2,"0"); if(dt.getDay()===6 && !taken.has(ds)) sugg.push(ds); }
  while(sugg.length<4) sugg.push("");
  dialog({title:"Agregar varios juegos", wide:true, body:`
    <p class="small" style="margin:0">Categoría <b>${esc(c.name)}</b> · ${esc(monthLabel(curMonth))}. Llena una fila por juego; las filas sin rival se ignoran. La dirección de visitante la puedes completar después tocando el juego.</p>
    <div class="bulk"><table><thead><tr><th style="width:140px">Fecha</th><th style="width:100px">Hora</th><th>Rival</th><th style="width:96px">Dónde</th><th>Estadio</th><th style="width:36px"></th></tr></thead><tbody id="bRows">${sugg.map(row).join("")}</tbody></table></div>
    <datalist id="bvenues">${venues.map(v=>`<option value="${esc(v)}">`).join("")}</datalist>
    <div><button class="btn" id="bMore">+ Otra fila</button></div>`,
    footer:`<button class="btn" data-close>Cancelar</button><button class="btn primary" id="bSave">Agregar juegos</button>`,
    onMount:(s,close)=>{
      const tb=s.querySelector("#bRows");
      const wire=()=>tb.querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>b.closest("tr").remove());
      wire();
      s.querySelector("#bMore").onclick=()=>{ const last=[...tb.querySelectorAll('[data-f="date"]')].map(i=>i.value).filter(Boolean).pop(); let nd=""; if(last){ const d=parseDate(last); d.setDate(d.getDate()+7); nd=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); } tb.insertAdjacentHTML("beforeend",row(nd)); wire(); };
      s.querySelector("#bSave").onclick=()=>{
        const add=[]; let bad="";
        tb.querySelectorAll("tr[data-r]").forEach(tr=>{
          const v=f=>tr.querySelector(`[data-f="${f}"]`).value.trim();
          if(!v("date")) return;
          if(v("date")<MIN_MONTH+"-01"){ bad="El calendario empieza en septiembre 2026"; return; }
          let opp=v("opp"); const nn=v("newopp");
          if(nn){ let t=S.teams.find(t=>t.name.toLowerCase()===nn.toLowerCase()); if(!t){ t={id:uid(),name:nn,logo:""}; S.teams.push(t); } opp=t.id; }
          if(!opp){ if(v("venue")) bad="Falta el rival en el juego del "+v("date"); return; }
          const ha=v("ha"); let venue=v("venue"), address="";
          if(ha==="home" && !venue){ venue=S.academy.homeVenue||""; address=S.academy.homeAddress||""; }
          else if(venue){ const prev=S.games.find(x=>x.venue===venue && x.address); if(prev) address=prev.address; else if(venue===S.academy.homeVenue) address=S.academy.homeAddress||""; }
          add.push({id:uid(),date:v("date"),time:v("time"),cat:curCat,opp,ha,venue,address,status:"sched",note:""});
        });
        if(bad){ toast(bad); return; }
        if(!add.length){ toast("Elige el rival de al menos un juego"); return; }
        S.games.push(...add); close(); touch(); toast(add.length+(add.length===1?" juego agregado":" juegos agregados"));
      };
    }});
}
function cropDialog(src, crop){
  const k=fkey();
  dialog({title:"Ajustar foto", body:`<div class="cropwrap">
      <p class="small" style="margin:0;text-align:center">Arrastra la foto para moverla y usa el control para acercar o alejar. Lo que ves en el recuadro es lo que sale en el calendario.</p>
      <div class="cropbox" id="cBox"><img id="cImg" alt="" draggable="false"></div>
      <div class="zoomrow"><span aria-hidden="true">−</span><input type="range" id="cZoom" min="1" max="4" step="0.01" value="1" aria-label="Zoom"><span aria-hidden="true">+</span></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center"><button class="btn" id="cFit">Ajustar al recuadro</button><button class="btn" id="cNew">Elegir otra foto</button></div>
    </div>`,
    footer:`<button class="btn" data-close>Cancelar</button><button class="btn primary" id="cSave">Usar foto</button>`,
    onMount:(s,close)=>{
      const box=s.querySelector("#cBox"), img=s.querySelector("#cImg"), zr=s.querySelector("#cZoom");
      let W=0,H=0,FW=0,FH=0,base=1,z=1,ox=0,oy=0,ready=false;
      const kk=()=>base*z;
      const clamp=()=>{ const k=kk(); ox=Math.min(0,Math.max(FW-W*k,ox)); oy=Math.min(0,Math.max(FH-H*k,oy)); };
      const draw=()=>{ clamp(); img.style.transform=`translate(${ox}px,${oy}px) scale(${kk()})`; zr.value=z; };
      const fit=()=>{ z=1; const k=kk(); ox=(FW-W*k)/2; oy=(FH-H*k)/2; if(H*k>FH) oy=Math.max(FH-H*k,-(H*k-FH)*0.2); draw(); };
      const setup=(cr)=>{ FW=box.clientWidth; FH=box.clientHeight; base=Math.max(FW/W,FH/H);
        if(cr && cr.sw){ const k=FW/cr.sw; z=Math.min(4,Math.max(1,k/base)); ox=-cr.sx*kk(); oy=-cr.sy*kk(); draw(); } else fit(); ready=true; };
      const load=(u,cr)=>{ ready=false; src=u; img.onload=()=>{ W=img.naturalWidth; H=img.naturalHeight; img.style.width=W+"px"; img.style.height=H+"px"; const go=(n=0)=>{ if(box.clientWidth>0 || n>40) setup(cr); else setTimeout(()=>go(n+1),50); }; setTimeout(go,0); }; img.onerror=()=>toast("No se pudo leer esa imagen. Prueba con una foto JPG o PNG."); img.src=u; };
      load(src,crop);
      const zoomTo=(nz,cx=FW/2,cy=FH/2)=>{ const k0=kk(); const px=(cx-ox)/k0, py=(cy-oy)/k0; z=Math.min(4,Math.max(1,nz)); const k1=kk(); ox=cx-px*k1; oy=cy-py*k1; draw(); };
      zr.addEventListener("input",()=>zoomTo(parseFloat(zr.value)));
      box.addEventListener("wheel",e=>{ if(!ready) return; e.preventDefault(); const r=box.getBoundingClientRect(); zoomTo(z*(e.deltaY<0?1.08:1/1.08), e.clientX-r.left, e.clientY-r.top); },{passive:false});
      const pts=new Map(); let last=null, pinch=null;
      box.addEventListener("pointerdown",e=>{ if(!ready) return; box.setPointerCapture(e.pointerId); pts.set(e.pointerId,{x:e.clientX,y:e.clientY}); box.classList.add("drag");
        if(pts.size===2){ const [a,b]=[...pts.values()]; pinch={d:Math.hypot(a.x-b.x,a.y-b.y), z}; } last={x:e.clientX,y:e.clientY}; });
      box.addEventListener("pointermove",e=>{ if(!pts.has(e.pointerId)) return; pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
        if(pts.size===2 && pinch){ const [a,b]=[...pts.values()]; const r=box.getBoundingClientRect(); zoomTo(pinch.z*Math.hypot(a.x-b.x,a.y-b.y)/pinch.d,(a.x+b.x)/2-r.left,(a.y+b.y)/2-r.top); return; }
        ox+=e.clientX-last.x; oy+=e.clientY-last.y; last={x:e.clientX,y:e.clientY}; draw(); });
      const up=e=>{ pts.delete(e.pointerId); if(pts.size<2) pinch=null; if(!pts.size) box.classList.remove("drag"); else last=[...pts.values()][0]; };
      box.addEventListener("pointerup",up); box.addEventListener("pointercancel",up);
      box.addEventListener("keydown",e=>{ const st=10; if(e.key==="ArrowLeft") ox+=st; else if(e.key==="ArrowRight") ox-=st; else if(e.key==="ArrowUp") oy+=st; else if(e.key==="ArrowDown") oy-=st; else return; e.preventDefault(); draw(); });
      box.tabIndex=0;
      s.querySelector("#cFit").onclick=fit;
      dropFile(box, async f=>{ const u=await readImage(f,1000,false); if(u) load(u,null); });
      s.querySelector("#cNew").onclick=async()=>{ const u=await uploadTo(1000,false); if(u) load(u,null); };
      let pendingSave=false;
      s.querySelector("#cSave").onclick=()=>{ if(!ready){ if(!pendingSave){ pendingSave=true; const t=setInterval(()=>{ if(ready){ clearInterval(t); s.querySelector("#cSave").click(); } },100); setTimeout(()=>clearInterval(t),5000); } return; }
        const k=kk(), cr={sx:-ox/k, sy:-oy/k, sw:FW/k, sh:FH/k};
        const c=document.createElement("canvas"); const OW=600, OH=800; c.width=OW; c.height=OH;
        const x=c.getContext("2d"); x.fillStyle="#0b1f3a"; x.fillRect(0,0,OW,OH); x.imageSmoothingQuality="high";
        x.drawImage(img, cr.sx, cr.sy, cr.sw, cr.sh, 0, 0, OW, OH);
        S.features[k_]=Object.assign({},S.features[k_],{photo:c.toDataURL("image/jpeg",0.86), src, crop:cr});
        close(); touch(); toast("Foto ajustada"); };
      const k_=k;
    }});
}
function playerDialog(){
  const k=fkey(), f=S.features[k]||{};
  dialog({title:"Jugador destacado", body:`
    <p class="small" style="margin:0">Aparece junto al calendario de ${esc(cat(curCat).name)} en ${esc(monthLabel(curMonth))}. Cada mes y categoría puede tener su propio jugador.</p>
    <div class="row">
      <label class="fld"><span>Nombre</span><input type="text" id="pName" value="${esc(f.name||"")}" placeholder="Ej. Carlos Pérez"></label>
      <label class="fld"><span>Número</span><input type="text" id="pNum" value="${esc(f.number||"")}" maxlength="3" inputmode="numeric" placeholder="27"></label>
    </div>
    <div class="row">
      <label class="fld"><span>Posición</span><input type="text" id="pPos" value="${esc(f.pos||"")}" placeholder="Ej. Lanzador · SS"></label>
      <label class="fld"><span>Etiqueta</span><input type="text" id="pTag" value="${esc(f.tag||"")}" placeholder="Ej. Jugador del mes"></label>
    </div>`,
    footer:`<button class="btn" data-close>Cancelar</button><button class="btn primary" id="pSave">Guardar</button>`,
    onMount:(s,close)=>{ s.querySelector("#pSave").onclick=()=>{ S.features[k]=Object.assign({},f,{name:s.querySelector("#pName").value.trim(),number:s.querySelector("#pNum").value.trim(),pos:s.querySelector("#pPos").value.trim(),tag:s.querySelector("#pTag").value.trim()}); close(); touch(); }; }});
}

function settingsDialog(){
  const a=S.academy;
  const spons=()=>S.sponsors.map(sp=>`<div class="li"><span class="thumb" style="border-radius:6px;background:#fff"><img src="${sp.logo}" alt=""></span><input type="text" data-spn="${sp.id}" value="${esc(sp.name||"")}" placeholder="Nombre del patrocinador"><button class="x" data-sprm="${sp.id}" aria-label="Quitar">×</button></div>`).join("") || `<p class="small" style="margin:0">Sin logos todavía.</p>`;
  dialog({title:"Academia", wide:true, body:`
    <div class="sect"><h3>Identidad</h3>
      <div class="li"><button class="thumb" id="sLogoBtn" style="width:64px;height:64px;background:#fff" aria-label="Cambiar logo">${a.logo?`<img src="${a.logo}" alt="">`:`<span class="ini" style="color:#0b1f3a">${esc(initials(a.name))}</span>`}</button>
        <div style="display:flex;flex-direction:column;gap:6px;flex:1;min-width:0"><label class="fld"><span>Nombre de la academia</span><input type="text" id="sName" value="${esc(a.name)}"></label></div></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="sLogoUp">${a.logo?"Cambiar logo":"Subir logo"}</button>${a.logo?`<button class="btn danger" id="sLogoRm">Quitar logo</button>`:""}</div>
      <div class="colors"><label><input type="color" id="sNavy" value="${esc(a.navy||"#0b1f3a")}"> Color principal</label><label><input type="color" id="sRed" value="${esc(homeColor())}"> Color de local</label><label><input type="color" id="sAway" value="${esc(a.away||"#6b7280")}"> Color de visitante</label><button class="btn" id="sColReset">Colores del uniforme JBR</button></div>
    </div>
    <div class="sect"><h3>Nuestro estadio (local)</h3>
      <div class="row"><label class="fld"><span>Nombre</span><input type="text" id="sHV" value="${esc(a.homeVenue||"")}"></label><label class="fld"><span>Dirección</span><input type="text" id="sHA" value="${esc(a.homeAddress||"")}"></label></div>
      <p class="small" style="margin:0">Se llena solo cuando marcas un juego como local.</p>
    </div>
    <div class="sect"><h3>Idioma del calendario</h3>
      <label class="fld" style="max-width:420px"><span>Idioma predeterminado (lo que ven los papás al abrir)</span><select id="sLang"><option value="es" ${(a.lang||"es")==="es"?"selected":""}>Español</option><option value="en" ${a.lang==="en"?"selected":""}>English</option></select></label>
    </div>
    <div class="sect"><h3>Mensaje para los papás</h3>
      <label class="fld"><span>Pie del calendario (español)</span><textarea id="sFoot" rows="2">${esc(a.footer||"")}</textarea></label>
      <label class="fld"><span>Pie del calendario (inglés)</span><textarea id="sFootEn" rows="2">${esc(a.footerEn||"")}</textarea></label>
      <label class="fld" style="max-width:240px"><span>Llegar antes del juego (minutos)</span><input type="number" id="sArr" min="0" max="180" step="5" value="${esc(a.arrive==null?30:a.arrive)}"></label>
    </div>
    <div class="sect"><h3>Logos de patrocinadores</h3>
      <div class="list" id="spList">${spons()}</div>
      <div><button class="btn" id="spAdd">+ Agregar logo</button></div>
    </div>`,
    footer:`<button class="btn" data-close>Cancelar</button><button class="btn primary" id="sSave">Guardar</button>`,
    onMount:(s,close)=>{
      let logo=a.logo, sponsors=S.sponsors.map(x=>Object.assign({},x));
      const upLogo=async()=>{ const img=await uploadTo(400,true); if(img){ logo=img; s.querySelector("#sLogoBtn").innerHTML=`<img src="${img}" alt="">`; } };
      s.querySelector("#sLogoBtn").onclick=upLogo; s.querySelector("#sLogoUp").onclick=upLogo;
      const rm=s.querySelector("#sLogoRm"); if(rm) rm.onclick=()=>{ logo=""; s.querySelector("#sLogoBtn").innerHTML=`<span class="ini" style="color:#0b1f3a">${esc(initials(s.querySelector("#sName").value))}</span>`; };
      s.querySelector("#sColReset").onclick=()=>{ s.querySelector("#sNavy").value="#0e1d4c"; s.querySelector("#sRed").value="#0e1d4c"; s.querySelector("#sAway").value="#6b7280"; };
      const drawSp=()=>{ const tmp=S.sponsors; S.sponsors=sponsors; s.querySelector("#spList").innerHTML=spons(); S.sponsors=tmp;
        s.querySelectorAll("[data-sprm]").forEach(b=>b.onclick=()=>{ sponsors=sponsors.filter(x=>x.id!==b.dataset.sprm); drawSp(); });
        s.querySelectorAll("[data-spn]").forEach(i=>i.oninput=()=>{ const sp=sponsors.find(x=>x.id===i.dataset.spn); if(sp) sp.name=i.value; }); };
      drawSp();
      s.querySelector("#spAdd").onclick=async()=>{ const img=await uploadTo(360,true); if(img){ sponsors.push({id:uid(),name:"",logo:img}); drawSp(); } };
      s.querySelector("#sSave").onclick=()=>{
        Object.assign(S.academy,{name:s.querySelector("#sName").value.trim()||"Mi Academia", logo, navy:s.querySelector("#sNavy").value, red:s.querySelector("#sRed").value, away:s.querySelector("#sAway").value,
          homeVenue:s.querySelector("#sHV").value.trim(), homeAddress:s.querySelector("#sHA").value.trim(), footer:s.querySelector("#sFoot").value.trim(), footerEn:s.querySelector("#sFootEn").value.trim(), lang:s.querySelector("#sLang").value, arrive:Math.max(0,parseInt(s.querySelector("#sArr").value)||0)});
        S.sponsors=sponsors; close(); touch(); toast("Academia actualizada"); };
    }});
}

function teamsDialog(){
  let teams=S.teams.map(t=>Object.assign({},t));
  dialog({title:"Equipos rivales", body:`<p class="small" style="margin:0">Toca el círculo para subir el logo de cada equipo.</p><div class="list" id="tList"></div><div><button class="btn" id="tAdd">+ Agregar equipo</button></div>`,
    footer:`<button class="btn" data-close>Cancelar</button><button class="btn primary" id="tSave">Guardar</button>`,
    onMount:(s,close)=>{
      const draw=()=>{ s.querySelector("#tList").innerHTML = teams.map(t=>{ const used=S.games.filter(g=>g.opp===t.id).length; return `<div class="li">
          <button class="thumb" data-tlogo="${t.id}" style="${logoBG(t)}" aria-label="Logo de ${esc(t.name)}">${logoHTML(t)}</button>
          <input type="text" data-tname="${t.id}" value="${esc(t.name)}" aria-label="Nombre del equipo">
          ${t.logo?`<button class="x" data-tlrm="${t.id}" title="Quitar logo" aria-label="Quitar logo">⊘</button>`:""}
          <button class="x" data-trm="${t.id}" aria-label="Eliminar equipo" title="${used?used+" juegos usan este equipo":"Eliminar"}">×</button></div>`; }).join("") || `<p class="small">Aún no hay equipos.</p>`;
        s.querySelectorAll("[data-tname]").forEach(i=>i.oninput=()=>{ teams.find(t=>t.id===i.dataset.tname).name=i.value; });
        s.querySelectorAll("[data-tlogo]").forEach(b=>b.onclick=async()=>{ const img=await uploadTo(300,true); if(img){ teams.find(t=>t.id===b.dataset.tlogo).logo=img; draw(); } });
        s.querySelectorAll("[data-tlrm]").forEach(b=>b.onclick=()=>{ teams.find(t=>t.id===b.dataset.tlrm).logo=""; draw(); });
        s.querySelectorAll("[data-trm]").forEach(b=>b.onclick=()=>{ const used=S.games.filter(g=>g.opp===b.dataset.trm).length; if(used){ toast(`No se puede borrar: ${used} juego(s) usan este equipo`); return; } teams=teams.filter(t=>t.id!==b.dataset.trm); draw(); });
      };
      draw();
      s.querySelector("#tAdd").onclick=()=>{ teams.push({id:uid(),name:"",logo:""}); draw(); const ins=s.querySelectorAll("[data-tname]"); ins[ins.length-1].focus(); };
      s.querySelector("#tSave").onclick=()=>{ S.teams=teams.filter(t=>t.name.trim() || S.games.some(g=>g.opp===t.id)).map(t=>Object.assign(t,{name:t.name.trim()||"Sin nombre"})); close(); touch(); toast("Equipos guardados"); };
    }});
}

function catsDialog(){
  let cats=S.categories.map(c=>Object.assign({},c));
  dialog({title:"Categorías", body:`<p class="small" style="margin:0">Escribe para cambiar el nombre, usa las flechas para cambiar el orden y × para borrar. Ej. T Ball, 8U, 12U, JV.</p><div class="list" id="cList"></div><div><button class="btn" id="cAdd">+ Agregar categoría</button></div>`,
    footer:`<button class="btn" data-close>Cancelar</button><button class="btn primary" id="cSave">Guardar</button>`,
    onMount:(s,close)=>{
      const draw=()=>{ s.querySelector("#cList").innerHTML=cats.map((c,i)=>`<div class="li"><input type="text" data-cn="${c.id}" value="${esc(c.name)}" aria-label="Nombre de la categoría"><button class="x" data-cup="${i}" aria-label="Subir" ${i===0?"disabled":""}>↑</button><button class="x" data-cdn="${i}" aria-label="Bajar" ${i===cats.length-1?"disabled":""}>↓</button><button class="x" data-crm="${c.id}" aria-label="Eliminar">×</button></div>`).join("");
        s.querySelectorAll("[data-cn]").forEach(i=>i.oninput=()=>{ cats.find(c=>c.id===i.dataset.cn).name=i.value; });
        s.querySelectorAll("[data-cdn]").forEach(b=>b.onclick=()=>{ const i=+b.dataset.cdn; if(i<cats.length-1){ [cats[i+1],cats[i]]=[cats[i],cats[i+1]]; draw(); } });
        s.querySelectorAll("[data-cup]").forEach(b=>b.onclick=()=>{ const i=+b.dataset.cup; if(i>0){ [cats[i-1],cats[i]]=[cats[i],cats[i-1]]; draw(); } });
        s.querySelectorAll("[data-crm]").forEach(b=>b.onclick=()=>{ const n=S.games.filter(g=>g.cat===b.dataset.crm).length; if(n){ toast(`Tiene ${n} juego(s). Muévelos o bórralos primero.`); return; } cats=cats.filter(c=>c.id!==b.dataset.crm); draw(); });
      };
      draw();
      s.querySelector("#cAdd").onclick=()=>{ cats.push({id:uid(),name:""}); draw(); const ins=s.querySelectorAll("[data-cn]"); ins[ins.length-1].focus(); };
      s.querySelector("#cSave").onclick=()=>{ S.categories=cats.filter(c=>c.name.trim()||S.games.some(g=>g.cat===c.id)).map(c=>Object.assign(c,{name:c.name.trim()||"Sin nombre"})); close(); touch(); toast("Categorías guardadas"); };
    }});
}

function copyMonthDialog(){
  const src=gamesFor(curMonth,curCat);
  if(!src.length){ toast("Esta categoría no tiene juegos este mes"); return; }
  const others=S.categories.filter(c=>c.id!==curCat);
  dialog({title:"Copiar juegos", body:`<p style="margin:0">Copia los ${src.length} juegos de <b>${esc(cat(curCat).name)}</b> de ${esc(monthLabel(curMonth))}. Después puedes ajustar horas y rivales.</p>
    <label class="fld"><span>Destino</span><select id="cpTo">${others.map(c=>`<option value="cat:${c.id}">Categoría ${esc(c.name)} · mismo mes</option>`).join("")}<option value="month:1">${esc(cat(curCat).name)} · ${esc(monthLabel(addMonth(curMonth,1)))} (mismo día de la semana)</option></select></label>`,
    footer:`<button class="btn" data-close>Cancelar</button><button class="btn primary" id="cpGo">Copiar</button>`,
    onMount:(s,close)=>{ s.querySelector("#cpGo").onclick=()=>{
      const [kind,val]=s.querySelector("#cpTo").value.split(":");
      if(kind==="cat"){ src.forEach(g=>S.games.push(Object.assign({},g,{id:uid(),cat:val}))); curCat=val; }
      else { const nm=addMonth(curMonth,1); src.forEach(g=>{ const d=parseDate(g.date); d.setDate(d.getDate()+28); const ds=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); if(ds.startsWith(nm)) S.games.push(Object.assign({},g,{id:uid(),date:ds,status:"sched",note:""})); }); curMonth=nm; }
      close(); touch(); toast("Juegos copiados"); }; }});
}

/* ---------- backup ---------- */
async function exportData(fname){
  const json=JSON.stringify(S), name=fname||"jbr-calendario-respaldo.json";
  if(downloadsNS){ try{ const r=await downloadsNS.save({filename:name, data:new Blob([json],{type:"application/json"})}); if(r && r.status==="saved") toast("Respaldo guardado"); return; }catch(e){ if(e && e.code==="cancelled") return; } }
  try{ const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([json],{type:"application/json"})); a.download=name; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },1000); toast("Respaldo guardado"); }
  catch(e){ toast("No se pudo guardar el respaldo"); }
}
function siteUpdateDialog(){
  const repo="https://github.com/jeangelandres-pixel/jbr-academy/upload/main/site/juegos";
  dialog({title:"Actualizar jbracademy.net", wide:true, body:`
    <p style="margin:0">La sección <b>Juegos</b> de tu página web muestra el calendario, los resultados y las estadísticas desde un archivo llamado <b>juegos.json</b>. Para actualizarla:</p>
    <ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px">
      <li>Toca <b>“Descargar juegos.json”</b> aquí abajo.</li>
      <li>Abre este enlace (inicia sesión en GitHub si te lo pide):<br><span style="user-select:all;word-break:break-all;font-family:ui-monospace,Menlo,monospace;font-size:13px">${repo}</span></li>
      <li>Arrastra el archivo <b>juegos.json</b> a la página y toca <b>“Commit changes”</b>.</li>
      <li>En 1 o 2 minutos jbracademy.net/juegos.html muestra lo nuevo.</li>
    </ol>
    <p class="small" style="margin:0">Primero publica tus cambios aquí para no perderlos.</p>`,
    footer:`<a class="btn" href="${repo}" target="_blank" rel="noopener">Abrir GitHub</a><button class="btn" id="suCopy">Copiar enlace</button><button class="btn primary" id="suDl">Descargar juegos.json</button>`,
    onMount:(s)=>{ s.querySelector("#suDl").onclick=()=>exportData("juegos.json"); s.querySelector("#suCopy").onclick=async()=>{ try{ await navigator.clipboard.writeText(repo); toast("Enlace copiado"); }catch(e){ toast("Selecciona el enlace y cópialo"); } }; }});
}
async function importData(){
  const f=await pickImage(".json,application/json"); if(!f) return;
  let data=null; try{ data=JSON.parse(await f.text()); }catch(e){}
  if(!data || !Array.isArray(data.games) || !Array.isArray(data.categories) || !data.academy){ toast("Ese archivo no es un respaldo del calendario."); return; }
  confirmBox("¿Cargar este respaldo?", `Trae ${data.games.length} juegos y ${data.categories.length} categorías. Reemplaza lo que ves ahora.`, "Cargar respaldo", ()=>{
    const base=sampleState(); S=Object.assign(base, data, {sample:false, academy:Object.assign({}, base.academy, data.academy)}); curCat=S.categories[0]?S.categories[0].id:null; touch(); toast("Respaldo cargado. Toca “Publicar cambios” para que los papás lo vean."); });
}

/* ---------- share: text + image ---------- */
function buildText(){
  const list=gamesFor(curMonth,curCat), a=S.academy, l=L(), [y,mo]=curMonth.split("-").map(Number);
  let t=`⚾ *${a.name}*\n📅 ${l.wa} ${l.months[mo-1]} ${y} · ${l.waCat} ${cat(curCat).name}\n`;
  if(!list.length) return t+"\n"+l.waNone;
  list.forEach(g=>{ const d=parseDate(g.date), tm=fmtTime(g.time), home=g.ha==="home";
    t+=`\n${home?"🏠 "+l.home:"🚌 "+l.away} · *${l.dowLong[d.getDay()]} ${d.getDate()}*\n${home?l.vs:l.at} ${team(g.opp).name} · ${tm.h} ${tm.ap}`;
    if(g.time && a.arrive) t+=` (${l.arrive.toLowerCase()} ${arrival(g.time)})`;
    if(g.status && g.status!=="sched") t+=` · ⚠️ ${l.status[g.status].toUpperCase()}`;
    t+="\n"; if(g.venue) t+=`📍 ${g.venue}${g.address?" — "+g.address:""}\n`; if(g.note) t+=`📝 ${g.note}\n`; });
  if(footerText()) t+=`\n${footerText()}`;
  return t;
}
async function copyText(){
  const txt=buildText();
  try{ await navigator.clipboard.writeText(txt); toast("Copiado. Pégalo en WhatsApp."); }
  catch(e){ dialog({title:"Texto para WhatsApp", body:`<p class="small" style="margin:0">Selecciona todo y cópialo.</p><textarea class="copy" id="cpTxt" readonly>${esc(txt)}</textarea>`, onMount:s=>{ const t=s.querySelector("#cpTxt"); t.focus(); t.select(); }}); }
}
async function exportImage(){
  const p=$("#poster"); if(!p) return;
  if(typeof html2canvas!=="function"){ toast("La imagen no está disponible ahora. Usa “Copiar para WhatsApp”."); return; }
  toast("Generando imagen…");
  const wasEdit=editing; if(wasEdit){ editing=false; render(); }
  const el=$("#poster"); el.classList.add("exporting");
  try{ if(document.fonts && document.fonts.ready) await document.fonts.ready; }catch(e){}
  let canvas;
  try{ canvas=await html2canvas(el,{scale:2,backgroundColor:"#ffffff",useCORS:true,logging:false,windowWidth:1200}); }
  catch(e){ toast("No se pudo generar la imagen"); }
  el.classList.remove("exporting"); if(wasEdit){ editing=true; render(); }
  if(!canvas) return;
  const name=`calendario-${cat(curCat).name}-${curMonth}.png`.replace(/\s+/g,"-");
  const blob=await new Promise(r=>canvas.toBlob(r,"image/png"));
  if(downloadsNS && blob){
    try{ const r=await downloadsNS.save({filename:name,data:blob}); if(r && r.status==="saved") toast("Imagen guardada"); return; }
    catch(e){ if(e && e.code==="cancelled") return; }
  }
  if(VIEWER && blob){ try{ const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },1500); toast("Imagen guardada"); return; }catch(e){} }
  const url=canvas.toDataURL("image/png");
  dialog({title:"Imagen lista", wide:true, body:`<p class="small" style="margin:0">Mantén presionada la imagen (o clic derecho) y elige “Guardar imagen”.</p><div class="preview"><img src="${url}" alt="Calendario ${esc(monthLabel(curMonth))}"></div>`});
}

/* ---------- publish ---------- */
function buildDoc(){
  const reset = (document.head.querySelector("style")||{}).textContent || ":root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px/1.4 system-ui,sans-serif;background:#fafafa}img{max-width:100%}[hidden]{display:none!important}";
  const style=document.getElementById("app-style").textContent;
  const shell=document.getElementById("app-shell").innerHTML;
  const script=document.getElementById("app-script").textContent;
  const json=JSON.stringify(S).replace(/</g,"\\u003c");
  const fonts=document.querySelector('link[href*="fonts.googleapis.com/css2"]');
  return '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>'+reset+'</style></head><body>'
    + '<title>Calendario de Juegos</title>\n'
    + '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
    + '<link rel="stylesheet" href="'+(fonts?fonts.getAttribute("href"):"")+'">\n'
    + '<style id="app-style">'+style+'</style>\n'
    + '<template id="app-shell">'+shell+'</template>\n<div id="root"></div>\n'
    + '<script type="application/json" id="app-state">'+json+'<\/script>\n'
    + '<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"><\/script>\n'
    + '<script id="app-script">'+script+'<\/script>\n</body></html>';
}
let publishing=false;
async function publish(){
  if(mode==="local"){ ls(()=>localStorage.setItem(DRAFT_KEY, JSON.stringify({base:baseStamp,state:S}))); dirty=false; render(); toast("Guardado en este navegador"); return; }
  if(publishing || !artifactNS) return;
  publishing=true; const b=$("#publish"); if(b){ b.disabled=true; b.textContent="Publicando…"; }
  S.updatedAt=Date.now();
  const html=buildDoc();
  ls(()=>localStorage.removeItem(DRAFT_KEY));
  try{ await artifactNS.publish(html); toast("Publicado. Los papás ya ven la nueva versión."); dirty=false; restored=false; }
  catch(e){
    const code=e&&e.code;
    if(code==="conflict"){ toast("Había una versión más nueva. Recargando…"); }
    else if(code==="not_writer"||code==="not_granted"||code==="consent_required"||code==="capability_disabled"){ ls(()=>localStorage.setItem(DRAFT_KEY, JSON.stringify({base:baseStamp,state:S}))); mode="reader"; editing=false; toast("Este enlace es de solo lectura."); }
    else if(code==="too_large"){ ls(()=>localStorage.setItem(DRAFT_KEY, JSON.stringify({base:baseStamp,state:S}))); toast("Demasiadas fotos grandes. Quita algunas e intenta de nuevo."); }
    else if(code==="rate_limited"){ ls(()=>localStorage.setItem(DRAFT_KEY, JSON.stringify({base:baseStamp,state:S}))); toast("Espera un momento antes de volver a publicar."); }
    else { ls(()=>localStorage.setItem(DRAFT_KEY, JSON.stringify({base:baseStamp,state:S}))); toast("No se pudo publicar. Intenta de nuevo."); }
  }
  publishing=false; render();
}
window.addEventListener("beforeunload",e=>{ if(dirty && editing && mode==="writer"){ e.preventDefault(); e.returnValue=""; } });

/* ---------- boot ---------- */
const root=document.getElementById("root");
root.appendChild(document.getElementById("app-shell").content.cloneNode(true));
render();
if(VIEWER){
  mode="reader"; render();
  document.addEventListener("click",e=>{ const b=e.target.closest(".lang-btn"); if(b){ viewLang=b.getAttribute("data-lang"); render(); } });
}
if(!VIEWER) (async()=>{
  let C=window.claude;
  for(let i=0;i<15 && !(C && typeof C.use==="function");i++){ await new Promise(r=>setTimeout(r,100)); C=window.claude; }
  if(!C || typeof C.use!=="function"){ mode="local"; render(); return; }
  const [art, usr, dl]=await Promise.all([C.use("artifact").catch(()=>null), C.use("user").catch(()=>null), C.use("downloads").catch(()=>null)]);
  artifactNS=art; downloadsNS=dl;
  let can=false; try{ can = usr ? (!!(await usr.canEdit()) || !!(await usr.isOwner())) : false; }catch(e){}
  mode = art && can ? "writer" : "reader";
  render();
})();
})();
