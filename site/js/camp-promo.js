// Aviso del próximo campamento en la página de inicio (usa js/campamentos-data.js)
(function () {
  var box = document.getElementById("campPromo");
  var camps = window.JBR_CAMPS || [];
  if (!box) return;
  function parseDate(iso) { var p = iso.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  var now = new Date(); now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var open = camps.filter(function (c) { return c.status === "open" && parseDate(c.end) >= now; })
    .sort(function (a, b) { return parseDate(a.start) - parseDate(b.start); });
  var camp = open[0];
  if (!camp) return;

  function render() {
    var lang = (window.JBR_I18N && window.JBR_I18N.getLang()) || "es";
    var t = camp[lang] || camp.es;
    var locale = lang === "en" ? "en-US" : "es-US";
    var s = parseDate(camp.start), e = parseDate(camp.end), md = { month: "short", day: "numeric" };
    box.querySelector("[data-promo-name]").textContent = t.name;
    box.querySelector("[data-promo-dates]").textContent =
      s.toLocaleDateString(locale, md) + " – " + e.toLocaleDateString(locale, md) + " · " + t.time +
      " · " + (lang === "en" ? "Ages " : "Edades ") + camp.ages;
  }
  box.querySelector("a").href = "campamentos.html?camp=" + encodeURIComponent(camp.id) + "#inscripcion";
  box.hidden = false;
  render();
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { setTimeout(render, 0); });
  });
})();
