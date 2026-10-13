(function () {
  var ACADEMY_WHATSAPP = "14076864956";
  var CAMPS = window.JBR_CAMPS || [];
  var ICON = {"calendar": "<svg class=\"ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/></svg>", "clock": "<svg class=\"ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/></svg>", "users": "<svg class=\"ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5\"/><path d=\"M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.8c1.6.8 2.7 2.6 3 5.2\"/></svg>", "pin": "<svg class=\"ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/></svg>", "hourglass": "<svg class=\"ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9\"/></svg>", "card": "<svg class=\"ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M3 10h18M7 15h4\"/></svg>"};
  var PAY = window.JBR_PAYMENT || { zelle: "407-520-8206", name: "JBR Academy LLC" };

  var TEXT = {
    es: {
      open: "Inscripciones abiertas", soon: "Próximamente", full: "Lleno",
      dates: "Fechas", time: "Horario", ages: "Edades", place: "Lugar", years: "años",
      priceTbd: "Precio por confirmar", perPlayer: "por jugador/a",
      spotsLeft: "cupos disponibles de", fewSpots: "¡Últimos cupos!",
      register: "Inscribir a este campamento", notify: "Avísame cuando abra", isFull: "Campamento lleno",
      startsIn: "Empieza en", day: "día", days: "días", today: "¡Empieza hoy!", running: "¡En curso!",
      noCamps: "Pronto anunciaremos nuevos campamentos. Escríbenos por WhatsApp para recibir el aviso.",
      noOpen: "No hay campamentos con inscripciones abiertas en este momento.",
      ageHint: "Tendrá {n} años durante el campamento.", ageWarn: "Ojo: la edad para este campamento es {r} años.",
      rCamp: "Campamento", rPlayer: "Jugador/a", rAge: "Edad", rShirt: "Camiseta", rLevel: "Nivel",
      rParent: "Padre/Madre", rPhone: "Teléfono", rEmail: "Correo", rEmerg: "Emergencia", rMedical: "Información médica",
      notifyMsg: "¡Hola! Quiero que me avisen cuando abran las inscripciones del {c} de JBR Academy.",
      copied: "¡Copiado!", payLine: "Asegura tu cupo enviando el pago por Zelle"
    },
    en: {
      open: "Registration open", soon: "Coming soon", full: "Full",
      dates: "Dates", time: "Time", ages: "Ages", place: "Location", years: "years",
      priceTbd: "Price TBA", perPlayer: "per player",
      spotsLeft: "spots left of", fewSpots: "Last spots!",
      register: "Register for This Camp", notify: "Notify Me When It Opens", isFull: "Camp Is Full",
      startsIn: "Starts in", day: "day", days: "days", today: "Starts today!", running: "Happening now!",
      noCamps: "New camps will be announced soon. Message us on WhatsApp to get notified.",
      noOpen: "There are no camps open for registration right now.",
      ageHint: "Will be {n} years old at camp.", ageWarn: "Note: this camp is for ages {r}.",
      rCamp: "Camp", rPlayer: "Player", rAge: "Age", rShirt: "T-shirt", rLevel: "Level",
      rParent: "Parent", rPhone: "Phone", rEmail: "Email", rEmerg: "Emergency", rMedical: "Medical",
      notifyMsg: "Hi! Please let me know when registration opens for the JBR Academy {c}.",
      copied: "Copied!", payLine: "Secure your spot by paying with Zelle"
    }
  };

  function lang() { return (window.JBR_I18N && window.JBR_I18N.getLang) ? window.JBR_I18N.getLang() : "es"; }
  function tx(key) { return TEXT[lang()][key]; }
  function loc(camp) { return camp[lang()] || camp.es; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function parseDate(iso) { var p = iso.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function today() { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

  function formatRange(camp) {
    var locale = lang() === "en" ? "en-US" : "es-US";
    var s = parseDate(camp.start), e = parseDate(camp.end);
    var md = { month: "short", day: "numeric" };
    var a = s.toLocaleDateString(locale, md);
    var b = e.toLocaleDateString(locale, md);
    if (s.getTime() === e.getTime()) return a + ", " + s.getFullYear();
    return a + " – " + b + ", " + e.getFullYear();
  }
  function priceText(camp) { return camp.price == null ? tx("priceTbd") : "$" + camp.price; }
  function ageRange(camp) { var m = String(camp.ages).match(/\d+/g) || []; return { min: +m[0] || 0, max: +m[1] || 99 }; }

  // Campamentos que todavía no terminaron, ordenados por fecha
  var visible = CAMPS.filter(function (c) { return parseDate(c.end) >= today(); })
    .sort(function (a, b) { return parseDate(a.start) - parseDate(b.start); });
  var openCamps = visible.filter(function (c) { return c.status === "open"; });
  var nextCamp = openCamps[0] || visible[0];

  /* ---------- Próximo campamento + cuenta regresiva ---------- */
  var cdTimer;
  function renderNext() {
    var box = document.getElementById("campNext");
    if (!nextCamp || !box) return;
    box.hidden = false;
    document.getElementById("campNextName").textContent = loc(nextCamp).name;
    document.getElementById("campNextDates").textContent = formatRange(nextCamp) + " · " + loc(nextCamp).time;
    var start = parseDate(nextCamp.start); start.setHours(9);
    function tick() {
      var ms = Math.max(0, start - new Date());
      var d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60;
      box.querySelector('[data-cd="d"]').textContent = d;
      box.querySelector('[data-cd="h"]').textContent = h;
      box.querySelector('[data-cd="m"]').textContent = m;
    }
    tick();
    clearInterval(cdTimer);
    cdTimer = setInterval(tick, 30000);
  }

  /* ---------- Tarjetas ---------- */
  function startsInLabel(camp) {
    var diff = Math.round((parseDate(camp.start) - today()) / 864e5);
    if (diff > 0) return tx("startsIn") + " " + diff + " " + (diff === 1 ? tx("day") : tx("days"));
    return diff === 0 ? tx("today") : tx("running");
  }

  function renderCards() {
    var grid = document.getElementById("campGrid");
    if (!grid) return;
    if (!visible.length) {
      grid.innerHTML = '<p class="camp-empty">' + esc(tx("noCamps")) + "</p>";
      return;
    }
    grid.innerHTML = visible.map(function (camp) {
      var t = loc(camp);
      var st = camp.status;
      var spots = "";
      if (st === "open" && camp.capacity && camp.spotsLeft != null) {
        var pct = Math.max(4, Math.round(100 * (camp.capacity - camp.spotsLeft) / camp.capacity));
        var few = camp.spotsLeft <= Math.max(3, camp.capacity * 0.2);
        spots = '<div class="camp-spots">' + (few ? "<b>" + esc(tx("fewSpots")) + "</b> " : "") +
          "<b>" + camp.spotsLeft + "</b> " + esc(tx("spotsLeft")) + " " + camp.capacity +
          '<div class="camp-spots-bar"><i style="width:' + pct + '%"></i></div></div>';
      }
      var btn;
      if (st === "open") btn = '<button type="button" class="btn btn-navy" data-register="' + esc(camp.id) + '">' + esc(tx("register")) + "</button>";
      else if (st === "full") btn = '<button type="button" class="btn btn-ghost" disabled>' + esc(tx("isFull")) + "</button>";
      else btn = '<a class="btn btn-ghost" target="_blank" rel="noopener" href="https://wa.me/' + ACADEMY_WHATSAPP + "?text=" +
        encodeURIComponent(tx("notifyMsg").replace("{c}", t.name)) + '">' + esc(tx("notify")) + "</a>";

      return '<article class="camp-card' + (camp === nextCamp && st === "open" ? " is-featured" : "") + (st === "soon" ? " is-soon" : "") + '">' +
        '<div class="camp-card-top">' +
          '<span class="camp-status ' + st + '">' + esc(tx(st)) + "</span>" +
          '<div class="camp-season">' + esc(t.season) + "</div>" +
          "<h3>" + esc(t.name) + "</h3>" +
          '<div class="camp-date-badge">' + ICON.calendar + ' ' + esc(formatRange(camp)) + "</div>" +
        "</div>" +
        '<div class="camp-card-body">' +
          '<div class="camp-meta">' +
            "<div>" + ICON.clock + "<span><b>" + esc(tx("time")) + ":</b> " + esc(t.time) + "</span></div>" +
            "<div>" + ICON.users + "<span><b>" + esc(tx("ages")) + ":</b> " + esc(camp.ages) + " " + esc(tx("years")) + "</span></div>" +
            "<div>" + ICON.pin + "<span>" + esc(t.location) + "</span></div>" +
            (st !== "full" ? "<div>" + ICON.hourglass + "<span><b>" + esc(startsInLabel(camp)) + "</b></span></div>" : "") +
          "</div>" +
          '<ul class="camp-highlights">' + (t.highlights || []).map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>" +
          spots +
          '<div class="camp-price"><strong>' + esc(priceText(camp)) + "</strong>" + (camp.price != null ? "<span>" + esc(tx("perPlayer")) + "</span>" : "") + "</div>" +
          (st === "open" && camp.price != null ? '<div class="camp-pay-line">' + ICON.card + ' ' + esc(tx("payLine")) + "</div>" : "") +
          btn +
        "</div>" +
      "</article>";
    }).join("");
  }

  /* ---------- Formulario por pasos ---------- */
  var form = document.getElementById("campForm");
  var steps = form ? form.querySelectorAll(".camp-step") : [];
  var stepperItems = document.querySelectorAll("#stepper li");
  var prevBtn = document.getElementById("campPrev");
  var nextBtn = document.getElementById("campNextBtn");
  var submitBtn = document.getElementById("campSubmit");
  var current = 0;

  function renderChoices() {
    var box = document.getElementById("campChoices");
    if (!box) return;
    var selected = selectedCampId();
    if (!openCamps.length) {
      box.innerHTML = '<p class="camp-empty">' + esc(tx("noOpen")) + "</p>";
      nextBtn.disabled = true;
      return;
    }
    box.innerHTML = openCamps.map(function (camp) {
      return '<label class="camp-choice"><input type="radio" name="cCamp" value="' + esc(camp.id) + '"' +
        (camp.id === selected || openCamps.length === 1 ? " checked" : "") + ">" +
        '<span class="camp-choice-box"><span><span class="camp-choice-name">' + esc(loc(camp).name) + "</span>" +
        '<span class="camp-choice-sub">' + esc(formatRange(camp)) + " · " + esc(loc(camp).time) + "</span></span>" +
        '<span class="camp-choice-price">' + esc(priceText(camp)) + "</span></span></label>";
    }).join("");
  }

  function selectedCampId() {
    var r = form && form.querySelector('input[name="cCamp"]:checked');
    return r ? r.value : null;
  }
  function selectedCamp() {
    var id = selectedCampId();
    for (var i = 0; i < CAMPS.length; i++) if (CAMPS[i].id === id) return CAMPS[i];
    return null;
  }
  function radioVal(name) { var r = form.querySelector('input[name="' + name + '"]:checked'); return r ? r.value : ""; }
  function val(id) { return document.getElementById(id).value.trim(); }

  function ageAtCamp() {
    var b = val("cBirth"), camp = selectedCamp();
    if (!b || !camp) return null;
    var bd = parseDate(b), at = parseDate(camp.start);
    var age = at.getFullYear() - bd.getFullYear();
    if (at.getMonth() < bd.getMonth() || (at.getMonth() === bd.getMonth() && at.getDate() < bd.getDate())) age--;
    return age >= 0 && age < 40 ? age : null;
  }
  function updateAgeHint() {
    var hint = document.getElementById("cAgeHint");
    var age = ageAtCamp(), camp = selectedCamp();
    if (age == null) { hint.classList.remove("visible"); return; }
    var r = ageRange(camp);
    hint.textContent = (age < r.min || age > r.max) ? tx("ageWarn").replace("{r}", camp.ages) : tx("ageHint").replace("{n}", age);
    hint.classList.add("visible");
  }

  function validateStep(i) {
    var step = steps[i];
    var firstBad = null;
    if (i === 0) {
      var ok = !!selectedCampId();
      document.getElementById("campChoiceError").hidden = ok;
      return ok;
    }
    step.querySelectorAll("input, select, textarea").forEach(function (el) {
      if (el.type === "radio") return;
      var bad = !el.checkValidity() || (el.required && el.type !== "checkbox" && !el.value.trim());
      el.classList.toggle("is-invalid", bad);
      if (bad && !firstBad) firstBad = el;
    });
    step.querySelectorAll(".pill-choices").forEach(function (group) {
      var req = group.querySelector("input[required]");
      if (!req) return;
      var bad = !group.querySelector("input:checked");
      group.classList.toggle("is-invalid", bad);
      if (bad && !firstBad) firstBad = req;
    });
    if (firstBad) {
      if (firstBad.type === "checkbox" || firstBad.type === "radio") firstBad.focus();
      else { firstBad.focus(); if (firstBad.reportValidity) firstBad.reportValidity(); }
      return false;
    }
    return true;
  }

  function renderReview() {
    var camp = selectedCamp();
    var age = ageAtCamp();
    var rows = [
      [tx("rCamp"), camp ? loc(camp).name + " (" + formatRange(camp) + ")" : ""],
      [tx("rPlayer"), val("cPlayerName")],
      [tx("rAge"), age != null ? age + " " + tx("years") : ""],
      [tx("rShirt"), val("cShirt")],
      [tx("rLevel"), radioVal("cLevel")],
      [tx("rParent"), val("cParent")],
      [tx("rPhone"), val("cPhone")],
      [tx("rEmail"), val("cEmail")],
      [tx("rEmerg"), val("cEmergName") + " · " + val("cEmergPhone")],
      [tx("rMedical"), val("cMedical")]
    ];
    document.getElementById("campReview").innerHTML = rows.map(function (r) {
      return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>";
    }).join("");
  }

  function renderPayBoxes() {
    var camp = selectedCamp();
    document.querySelectorAll("[data-pay-box]").forEach(function (box) {
      box.querySelector("[data-pay-amount]").textContent = camp ? priceText(camp) : "";
      box.querySelector("[data-pay-zelle]").textContent = PAY.zelle;
      box.querySelector("[data-pay-name]").textContent = PAY.name;
    });
  }

  document.querySelectorAll("[data-pay-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var done = function () {
        btn.textContent = tx("copied");
        setTimeout(function () { btn.textContent = window.JBR_I18N ? window.JBR_I18N.t("camps.pay.copy") : "Copiar"; }, 1800);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(PAY.zelle.replace(/\D/g, "")).then(done, done);
      else done();
    });
  });

  function goTo(i, scroll) {
    current = i;
    steps.forEach(function (s, k) { s.classList.toggle("active", k === i); });
    stepperItems.forEach(function (li, k) {
      li.classList.toggle("active", k === i);
      li.classList.toggle("done", k < i);
    });
    prevBtn.hidden = i === 0;
    nextBtn.hidden = i === steps.length - 1;
    submitBtn.hidden = i !== steps.length - 1;
    if (i === steps.length - 1) { renderReview(); renderPayBoxes(); }
    if (i === 1) updateAgeHint();
    if (scroll) document.getElementById("inscripcion").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function selectCamp(id) {
    var r = form.querySelector('input[name="cCamp"][value="' + id + '"]');
    if (!r) return false;
    r.checked = true;
    document.getElementById("campChoiceError").hidden = true;
    return true;
  }

  if (form) {
    nextBtn.addEventListener("click", function () {
      if (validateStep(current)) goTo(current + 1, true);
    });
    prevBtn.addEventListener("click", function () { goTo(current - 1, true); });
    document.getElementById("cBirth").addEventListener("change", updateAgeHint);
    form.addEventListener("change", function (e) {
      if (e.target.name === "cCamp") { document.getElementById("campChoiceError").hidden = true; updateAgeHint(); }
      if (e.target.classList.contains("is-invalid") && e.target.checkValidity()) e.target.classList.remove("is-invalid");
      var group = e.target.closest(".pill-choices");
      if (group) group.classList.remove("is-invalid");
    });
    form.addEventListener("input", function (e) {
      if (e.target.classList.contains("is-invalid") && e.target.value.trim()) e.target.classList.remove("is-invalid");
    });

    document.getElementById("campGrid").addEventListener("click", function (e) {
      var b = e.target.closest("[data-register]");
      if (!b) return;
      if (selectCamp(b.getAttribute("data-register"))) goTo(1, true);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateStep(current)) return;
      var camp = selectedCamp();
      var age = ageAtCamp();
      var reg = {
        type: "camp",
        campId: camp.id,
        campName: camp.es.name,
        campDates: camp.start + " a " + camp.end,
        playerName: val("cPlayerName"),
        birthDate: val("cBirth"),
        ageAtCamp: age,
        shirtSize: val("cShirt"),
        level: radioVal("cLevel"),
        jbrStudent: radioVal("cJbr"),
        position: val("cPosition") || "No especificada",
        parentName: val("cParent"),
        phone: val("cPhone"),
        email: val("cEmail"),
        emergencyName: val("cEmergName"),
        emergencyPhone: val("cEmergPhone"),
        medical: val("cMedical"),
        pickup: val("cPickup") || "Solo padre/madre",
        waiverAccepted: document.getElementById("cWaiver").checked,
        photoConsent: document.getElementById("cPhotos").checked,
        language: lang(),
        page: window.location.pathname
      };

      fetch("/api/camp-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reg)
      }).catch(function (err) {
        console.warn("No se pudo guardar la inscripción en el servidor:", err);
      });

      var message = "¡Hola! Quiero inscribir a mi hijo/a en el " + reg.campName + " de JBR Academy.\n\n" +
        "Campamento: " + reg.campName + " (" + formatRange(camp) + ")\n" +
        "Jugador/a: " + reg.playerName + "\n" +
        "Fecha de nacimiento: " + reg.birthDate + (age != null ? " (" + age + " años)" : "") + "\n" +
        "Talla de camiseta: " + reg.shirtSize + "\n" +
        "Nivel: " + reg.level + "\n" +
        "Ya entrena en JBR: " + reg.jbrStudent + "\n" +
        "Posición: " + reg.position + "\n\n" +
        "Padre/Madre: " + reg.parentName + "\n" +
        "Teléfono: " + reg.phone + "\n" +
        "Correo: " + reg.email + "\n" +
        "Emergencia: " + reg.emergencyName + " — " + reg.emergencyPhone + "\n" +
        "Información médica: " + reg.medical + "\n" +
        "Autorizados a recoger: " + reg.pickup + "\n" +
        "Waiver aceptado: " + (reg.waiverAccepted ? "Sí" : "No") + "\n" +
        "Autoriza fotos: " + (reg.photoConsent ? "Sí" : "No") + "\n\n" +
        "Pago: " + priceText(camp) + " por Zelle a " + PAY.zelle + " (" + PAY.name + ")";

      window.open("https://wa.me/" + ACADEMY_WHATSAPP + "?text=" + encodeURIComponent(message), "_blank");

      form.style.display = "none";
      document.getElementById("stepper").style.display = "none";
      renderPayBoxes();
      document.getElementById("campSuccess").classList.add("visible");
    });

    // "Inscribir otro hermano/a": conserva campamento y datos de la familia
    document.getElementById("campAnother").addEventListener("click", function () {
      ["cPlayerName", "cBirth", "cShirt", "cPosition"].forEach(function (id) { document.getElementById(id).value = ""; });
      form.querySelectorAll('input[name="cLevel"], input[name="cJbr"]').forEach(function (r) { r.checked = false; });
      document.getElementById("cWaiver").checked = false;
      document.getElementById("campSuccess").classList.remove("visible");
      form.style.display = "";
      document.getElementById("stepper").style.display = "";
      goTo(1, true);
    });
  }

  /* ---------- Un día en el camp ---------- */
  document.querySelectorAll(".day-step").forEach(function (btn, i, all) {
    btn.addEventListener("click", function () {
      all.forEach(function (b) { b.classList.toggle("active", b === btn); });
    });
  });

  function renderAll() {
    renderNext();
    renderCards();
    renderChoices();
    if (form && current === steps.length - 1) renderReview();
    if (form) renderPayBoxes();
    if (form && current === 1) updateAgeHint();
  }

  renderAll();

  // Enlace directo: campamentos.html?camp=thanksgiving-2026#inscripcion
  var pre = new URLSearchParams(window.location.search).get("camp");
  if (pre && form && selectCamp(pre)) goTo(1, false);

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { setTimeout(renderAll, 0); });
  });
})();
