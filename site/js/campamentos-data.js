/*
 * JBR Academy — Lista de campamentos.
 *
 * Para agregar o cambiar un campamento, edita esta lista. Cada campamento:
 *   id        identificador corto sin espacios (no cambiarlo despues de abrir inscripciones)
 *   status    "open" (inscripciones abiertas), "soon" (proximamente) o "full" (lleno)
 *   start/end fechas en formato AAAA-MM-DD. Cuando pasa la fecha "end", el campamento
 *             deja de mostrarse solo.
 *   price     numero en dolares, o null si todavia no esta definido ("Por confirmar")
 *   capacity  cupos totales (opcional) — spotsLeft: cupos que quedan (opcional)
 *   es / en   textos en espanol e ingles
 */

// Forma de pago: el cupo queda asegurado al enviar el pago
window.JBR_PAYMENT = {
  zelle: "407-520-8206",
  name: "JBR Academy LLC"
};

window.JBR_CAMPS = [
  {
    id: "thanksgiving-2026",
    status: "open",
    start: "2026-11-23",
    end: "2026-11-26",
    ages: "7+",
    price: 220,
    capacity: 25,
    spotsLeft: 25,
    es: {
      name: "Campamento de Thanksgiving",
      season: "Thanksgiving 2026",
      time: "Lunes a jueves · 9:00 AM – 12:00 PM",
      location: "South Orange Little League, Orlando",
      highlights: ["Bateo y mecánica de swing", "Defensa por posición", "Juegos y competencias", "Camiseta oficial del campamento"]
    },
    en: {
      name: "Thanksgiving Camp",
      season: "Thanksgiving 2026",
      time: "Mon – Thu · 9:00 AM – 12:00 PM",
      location: "South Orange Little League, Orlando",
      highlights: ["Hitting & swing mechanics", "Position-specific defense", "Games & competitions", "Official camp t-shirt"]
    }
  },
  {
    id: "winter-2026",
    status: "soon",
    start: "2026-12-21",
    end: "2026-12-23",
    ages: "7+",
    price: null,
    capacity: 40,
    spotsLeft: 40,
    es: {
      name: "Winter Camp 2026",
      season: "Invierno",
      time: "9:00 AM – 1:00 PM",
      location: "South Orange Little League Complex, Orlando",
      highlights: ["Bateo y mecánica de swing", "Defensa por posición", "Juegos y competencias", "Camiseta oficial del campamento"]
    },
    en: {
      name: "Winter Camp 2026",
      season: "Winter",
      time: "9:00 AM – 1:00 PM",
      location: "South Orange Little League Complex, Orlando",
      highlights: ["Hitting & swing mechanics", "Position-specific defense", "Games & competitions", "Official camp t-shirt"]
    }
  },
  {
    id: "spring-2027",
    status: "soon",
    start: "2027-03-15",
    end: "2027-03-19",
    ages: "7+",
    price: null,
    es: {
      name: "Spring Break Camp 2027",
      season: "Primavera",
      time: "9:00 AM – 1:00 PM",
      location: "South Orange Little League Complex, Orlando",
      highlights: ["Preparación para la temporada", "Pitcheo y catcheo", "Juegos simulados", "Camiseta oficial del campamento"]
    },
    en: {
      name: "Spring Break Camp 2027",
      season: "Spring",
      time: "9:00 AM – 1:00 PM",
      location: "South Orange Little League Complex, Orlando",
      highlights: ["Pre-season preparation", "Pitching & catching", "Simulated games", "Official camp t-shirt"]
    }
  },
  {
    id: "summer-2027",
    status: "soon",
    start: "2027-06-14",
    end: "2027-07-23",
    ages: "7+",
    price: null,
    es: {
      name: "Summer Camp 2027",
      season: "Verano",
      time: "Por semanas · horario por confirmar",
      location: "South Orange Little League Complex, Orlando",
      highlights: ["Inscripción por semana", "Desarrollo técnico completo", "Torneo interno al final", "Camiseta oficial del campamento"]
    },
    en: {
      name: "Summer Camp 2027",
      season: "Summer",
      time: "Weekly sessions · schedule TBA",
      location: "South Orange Little League Complex, Orlando",
      highlights: ["Sign up by the week", "Full technical development", "End-of-camp tournament", "Official camp t-shirt"]
    }
  }
];
