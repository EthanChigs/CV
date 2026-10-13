/* ==========================================================================
   John Doe — Personal CV Website
   Shared interactions: mobile nav, gallery lightbox, scroll reveal,
   footer year.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Gallery lightbox ---------- */
  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML =
    '<button class="lb-close" aria-label="Close image">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6.2 6.4c3.9 3.8 7.7 7.7 11.4 11.3M17.9 6.2c-3.9 4-7.7 7.8-11.6 11.5"/></svg>' +
    "</button>" +
    '<img alt="" />' +
    '<div class="lb-caption"></div>';
  document.body.appendChild(lightbox);

  var lbImg = lightbox.querySelector("img");
  var lbCaption = lightbox.querySelector(".lb-caption");

  function openLightbox(src, caption, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lbCaption.textContent = caption || "";
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      var img = item.querySelector("img");
      var captionEl = item.querySelector("figcaption strong");
      if (img) {
        openLightbox(img.src, captionEl ? captionEl.textContent : "", img.alt);
      }
    });
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox || event.target.closest(".lb-close")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("revealed");
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
