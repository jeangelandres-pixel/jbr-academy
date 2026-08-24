(function () {
  var ACADEMY_WHATSAPP = "14076864956";

  var ageInput = document.getElementById("childAge");
  var hint = document.getElementById("scheduleHint");
  var form = document.getElementById("tryoutForm");
  var success = document.getElementById("formSuccess");

  function scheduleForAge(age) {
    if (age >= 4 && age <= 9) {
      return "Grupo 4-9 años: Martes y Viernes, 6:00 PM";
    }
    if (age >= 10 && age <= 16) {
      return "Grupo 10-16 años: Martes 7:30 PM o Viernes 6:00 PM";
    }
    return null;
  }

  if (ageInput) {
    ageInput.addEventListener("input", function () {
      var age = parseInt(ageInput.value, 10);
      var text = scheduleForAge(age);
      if (text) {
        hint.textContent = "Horario asignado — " + text;
        hint.classList.add("visible");
      } else {
        hint.classList.remove("visible");
      }
    });
  }

  function getUtmParams() {
    var params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "directo",
      utm_medium: params.get("utm_medium") || "ninguno",
      utm_campaign: params.get("utm_campaign") || "ninguna"
    };
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var parentName = document.getElementById("parentName").value;
      var phone = document.getElementById("phone").value;
      var childName = document.getElementById("childName").value;
      var childAge = document.getElementById("childAge").value;
      var schedule = scheduleForAge(parseInt(childAge, 10)) || "Por confirmar según edad";
      var utm = getUtmParams();
      var waiverAccepted = document.getElementById("waiverAccept").checked;
      var lang = (window.JBR_I18N && window.JBR_I18N.getLang) ? window.JBR_I18N.getLang() : "es";

      var lead = {
        type: "tryout",
        parentName: parentName,
        phone: phone,
        childName: childName,
        childAge: childAge,
        assignedSchedule: schedule,
        waiverAccepted: waiverAccepted,
        language: lang,
        source: utm,
        page: window.location.pathname
      };

      // Guarda el lead en el backend local (server.py -> web/data/leads.json).
      // Si el servidor no está corriendo (ej. abriste el HTML directamente),
      // esto falla en silencio y el registro por WhatsApp sigue funcionando.
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead)
      }).catch(function (err) {
        console.warn("No se pudo guardar el lead en el servidor local (¿está corriendo server.py?):", err);
      });

      var message = "Hola! Quiero registrar a mi hijo/a para el Free Tryout de JBR Academy.\n\n" +
        "Padre/Madre: " + parentName + "\n" +
        "Teléfono: " + phone + "\n" +
        "Niño/a: " + childName + "\n" +
        "Edad: " + childAge + "\n" +
        "Horario correspondiente: " + schedule + "\n" +
        "Waiver aceptado: " + (waiverAccepted ? "Sí" : "No") + "\n" +
        "(Origen: " + utm.utm_source + " / " + utm.utm_campaign + ")";

      window.open("https://wa.me/" + ACADEMY_WHATSAPP + "?text=" + encodeURIComponent(message), "_blank");

      form.style.display = "none";
      success.classList.add("visible");
    });
  }
})();
