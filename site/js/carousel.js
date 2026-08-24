(function () {
  function initCarousel(root) {
    var track = root.querySelector(".carousel-track");
    var slides = Array.prototype.slice.call(root.querySelectorAll(".carousel-slide"));
    if (!track || slides.length === 0) return;

    var interval = parseInt(root.getAttribute("data-interval"), 10) || 4500;
    var index = 0;
    var timer = null;

    var dotsWrap = root.querySelector(".carousel-dots");
    var dots = [];
    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.className = "carousel-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Ir a la diapositiva " + (i + 1));
        dot.addEventListener("click", function () { goTo(i); restart(); });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
    }

    function update() {
      track.style.transform = "translateX(-" + (index * 100) + "%)";
      dots.forEach(function (d, i) { d.classList.toggle("active", i === index); });
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function start() {
      if (slides.length > 1) {
        timer = setInterval(next, interval);
      }
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    function restart() { stop(); start(); }

    var nextBtn = root.querySelector(".carousel-arrow.next");
    var prevBtn = root.querySelector(".carousel-arrow.prev");
    if (nextBtn) nextBtn.addEventListener("click", function () { next(); restart(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); restart(); });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);

    update();
    start();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel").forEach(initCarousel);
  });
})();
