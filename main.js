/* Your Fotobox – Interaktionen */
(function () {
  "use strict";

  // Jahr im Footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header-Schatten beim Scrollen
  var header = document.getElementById("header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobiles Menü
  var burger = document.getElementById("burger");
  var navMobile = document.getElementById("navMobile");
  function closeMenu() {
    if (!burger || !navMobile) return;
    burger.classList.remove("open");
    navMobile.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
  if (burger && navMobile) {
    burger.addEventListener("click", function () {
      var open = burger.classList.toggle("open");
      navMobile.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navMobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // FAQ-Akkordeon
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var answer = item.querySelector(".faq-a");
      var isOpen = item.classList.toggle("open");
      answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : null;
    });
  });

  // Scroll-Reveal via IntersectionObserver
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
