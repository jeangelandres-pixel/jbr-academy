(function () {
  var ACADEMY_WHATSAPP = "14076864956";
  var MIN_AGE = 12;

  var TEXT = {
    es: {
      ageHint: "Edad: {n} años.", ageWarn: "Ojo: el programa es para jugadores de 12 años en adelante.",
      years: "años",
      rPlayer: "Jugador/a", rAge: "Edad", rGrade: "Grado", rPosition: "Posición", rBatsThrows: "Batea / Lanza",
      rLevel: "Nivel", rParent: "Padre/Madre", rPhone: "Teléfono", rEmail: "Correo", rStepUp: "Step Up",
      rEmerg: "Emergencia", rMedical: "Información médica"
    },
    en: {
      ageHint: "Age: {n} years old.", ageWarn: "Note: the program is for players 12 and older.",
      years: "years old",
      rPlayer: "Player", rAge: "Age", rGrade: "Grade", rPosition: "Position", rBatsThrows: "Bats / Throws",
      rLevel: "Level", rParent: "Parent", rPhone: "Phone", rEmail: "Email", rStepUp: "Step Up",
      rEmerg: "Emergency", rMedical: "Medical"
    }
  };

  function lang() { return (window.JBR_I18N && window.JBR_I18N.getLang) ? window.JBR_I18N.getLang() : "es"; }
  function tx(key) { return TEXT[lang()][key]; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Un día en JBR Elite ---------- */
  document.querySelectorAll(".day-step").forEach(function (btn, i, all) {
    btn.addEventListener("click", function () {
      all.forEach(function (b) { b.classList.toggle("active", b === btn); });
    });
  });

  /* ---------- Registro ---------- */
  var form = document.getElementById("hsForm");
  if (!form) return;
  var steps = form.querySelectorAll(".camp-step");
  var stepperItems = document.querySelectorAll("#hsStepper li");
  var prevBtn = document.getElementById("hsPrev");
  var nextBtn = document.getElementById("hsNext");
  var submitBtn = document.getElementById("hsSubmit");
  var current = 0;

  function val(id) { return document.getElementById(id).value.trim(); }
  function radioVal(name) { var r = form.querySelector('input[name="' + name + '"]:checked'); return r ? r.value : ""; }

  function age() {
    var b = val("hBirth");
    if (!b) return null;
    var p = b.split("-"), bd = new Date(+p[0], +p[1] - 1, +p[2]), now = new Date();
    var a = now.getFullYear() - bd.getFullYear();
    if (now.getMonth() < bd.getMonth() || (now.getMonth() === bd.getMonth() && now.getDate() < bd.getDate())) a--;
    return a >= 0 && a < 40 ? a : null;
  }
  function updateAgeHint() {
    var hint = document.getElementById("hAgeHint"), a = age();
    if (a == null) { hint.classList.remove("visible"); return; }
    hint.textContent = a < MIN_AGE ? tx("ageWarn") : tx("ageHint").replace("{n}", a);
    hint.classList.add("visible");
  }

  function validateStep(i) {
    var step = steps[i], firstBad = null;
    step.querySelectorAll("input, select, textarea").forEach(function (el) {
      if (el.type === "radio") return;
      var bad = !el.checkValidity() || (el.required && el.type !== "checkbox" && !el.value.trim());
      el.classList.toggle("is-invalid", bad);
      if (bad && !firstBad) firstBad = el;
    });
    step.querySelectorAll(".pill-choices").forEach(function (group) {
      if (!group.querySelector("input[required]")) return;
      var bad = !group.querySelector("input:checked");
      group.classList.toggle("is-invalid", bad);
      if (bad && !firstBad) firstBad = group.querySelector("input");
    });
    if (firstBad) {
      firstBad.focus();
      if (firstBad.type !== "radio" && firstBad.type !== "checkbox" && firstBad.reportValidity) firstBad.reportValidity();
      return false;
    }
    return true;
  }

  function renderReview() {
    var a = age();
    var rows = [
      [tx("rPlayer"), val("hPlayer")],
      [tx("rAge"), a != null ? a + " " + tx("years") : ""],
      [tx("rGrade"), val("hGrade")],
      [tx("rPosition"), val("hPosition")],
      [tx("rBatsThrows"), radioVal("hBats") + " / " + radioVal("hThrows")],
      [tx("rLevel"), radioVal("hLevel")],
      [tx("rParent"), val("hParent")],
      [tx("rPhone"), val("hPhone")],
      [tx("rEmail"), val("hEmail")],
      [tx("rStepUp"), radioVal("hStepUp")],
      [tx("rEmerg"), val("hEmergName") + " · " + val("hEmergPhone")],
      [tx("rMedical"), val("hMedical")]
    ];
    document.getElementById("hsReview").innerHTML = rows.map(function (r) {
      return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>";
    }).join("");
  }

  function goTo(i) {
    current = i;
    steps.forEach(function (s, k) { s.classList.toggle("active", k === i); });
    stepperItems.forEach(function (li, k) {
      li.classList.toggle("active", k === i);
      li.classList.toggle("done", k < i);
    });
    prevBtn.hidden = i === 0;
    nextBtn.hidden = i === steps.length - 1;
    submitBtn.hidden = i !== steps.length - 1;
    if (i === steps.length - 1) renderReview();
    document.getElementById("registro").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  nextBtn.addEventListener("click", function () { if (validateStep(current)) goTo(current + 1); });
  prevBtn.addEventListener("click", function () { goTo(current - 1); });
  document.getElementById("hBirth").addEventListener("change", updateAgeHint);
  form.addEventListener("change", function (e) {
    if (e.target.classList.contains("is-invalid") && e.target.checkValidity()) e.target.classList.remove("is-invalid");
    var group = e.target.closest(".pill-choices");
    if (group) group.classList.remove("is-invalid");
  });
  form.addEventListener("input", function (e) {
    if (e.target.classList.contains("is-invalid") && e.target.value.trim()) e.target.classList.remove("is-invalid");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateStep(current)) return;
    var a = age();
    var reg = {
      type: "homeschool",
      program: "JBR Elite Homeschool",
      playerName: val("hPlayer"),
      birthDate: val("hBirth"),
      age: a,
      grade: val("hGrade"),
      position: val("hPosition"),
      shirtSize: val("hShirt"),
      bats: radioVal("hBats"),
      throws: radioVal("hThrows"),
      level: radioVal("hLevel"),
      currentTeam: val("hTeam") || "Ninguno",
      parentName: val("hParent"),
      phone: val("hPhone"),
      email: val("hEmail"),
      city: val("hCity"),
      stepUp: radioVal("hStepUp"),
      emergencyName: val("hEmergName"),
      emergencyPhone: val("hEmergPhone"),
      medical: val("hMedical"),
      howFound: val("hHow") || "No indicado",
      waiverAccepted: document.getElementById("hWaiver").checked,
      photoConsent: document.getElementById("hPhotos").checked,
      language: lang(),
      page: window.location.pathname
    };

    fetch("/api/homeschool-registrations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reg)
    }).catch(function (err) {
      console.warn("No se pudo guardar el registro en el servidor:", err);
    });

    var message = "¡Hola! Quiero registrar a mi hijo/a en el JBR Elite Homeschool Program.\n\n" +
      "Jugador/a: " + reg.playerName + "\n" +
      "Fecha de nacimiento: " + reg.birthDate + (a != null ? " (" + a + " años)" : "") + "\n" +
      "Grado: " + reg.grade + "\n" +
      "Posición: " + reg.position + "\n" +
      "Batea / Lanza: " + reg.bats + " / " + reg.throws + "\n" +
      "Nivel: " + reg.level + "\n" +
      "Equipo actual: " + reg.currentTeam + "\n" +
      "Talla de camiseta: " + reg.shirtSize + "\n\n" +
      "Padre/Madre: " + reg.parentName + "\n" +
      "Teléfono: " + reg.phone + "\n" +
      "Correo: " + reg.email + "\n" +
      "Ciudad: " + reg.city + "\n" +
      "Beca Step Up: " + reg.stepUp + "\n" +
      "Emergencia: " + reg.emergencyName + " — " + reg.emergencyPhone + "\n" +
      "Información médica: " + reg.medical + "\n" +
      "Nos conoció por: " + reg.howFound + "\n" +
      "Waiver aceptado: " + (reg.waiverAccepted ? "Sí" : "No") + "\n" +
      "Autoriza fotos: " + (reg.photoConsent ? "Sí" : "No") + "\n\n" +
      "Por favor envíenme el precio y la fecha de inicio.";

    window.open("https://wa.me/" + ACADEMY_WHATSAPP + "?text=" + encodeURIComponent(message), "_blank");

    form.style.display = "none";
    document.getElementById("hsStepper").style.display = "none";
    document.getElementById("hsSuccess").classList.add("visible");
  });

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      setTimeout(function () {
        if (current === steps.length - 1) renderReview();
        updateAgeHint();
      }, 0);
    });
  });
})();
