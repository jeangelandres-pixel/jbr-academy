(function () {
  var STORAGE_KEY = "jbr_lang";

  function detectDefaultLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "en" || saved === "es") return saved;
    var nav = (navigator.language || "es").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "es";
  }

  var currentLang = detectDefaultLang();

  function dict() {
    return (window.JBR_TRANSLATIONS && window.JBR_TRANSLATIONS[currentLang]) || {};
  }

  function t(key) {
    return dict()[key];
  }

  function applyTranslations() {
    document.documentElement.setAttribute("lang", currentLang);
    var d = dict();

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = d[el.getAttribute("data-i18n")];
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var val = d[el.getAttribute("data-i18n-html")];
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var val = d[el.getAttribute("data-i18n-placeholder")];
      if (val !== undefined) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "es") return;
    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyTranslations();
  }

  function init() {
    applyTranslations();
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.JBR_I18N = { getLang: function () { return currentLang; }, setLang: setLang, t: t };
})();
