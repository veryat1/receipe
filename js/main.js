// Andrews Recipe Secrets Restaurant — shared behavior

(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  function initNav() {
    var toggle = document.querySelector(".hamburger");
    var nav = document.querySelector(".nav");
    if (!toggle || !nav) return;

    function setOpen(isOpen) {
      nav.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Active nav link highlighting ---------- */
  function initActiveLink() {
    var current = (location.pathname.split("/").pop() || "index.html");
    document.querySelectorAll(".nav-links a").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === current || (current === "" && href === "index.html")) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ---------- Fade-in on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Generic client-side form validation ---------- */
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showError(row, show) {
    row.classList.toggle("has-error", show);
  }

  function validateField(field) {
    var row = field.closest(".form-row");
    if (!row) return true;
    var valid = true;

    if (field.hasAttribute("required") && !field.value.trim()) {
      valid = false;
    } else if (field.type === "email" && field.value.trim() && !isValidEmail(field.value.trim())) {
      valid = false;
    } else if (field.type === "date" && field.value) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var chosen = new Date(field.value + "T00:00:00");
      if (chosen < today) valid = false;
    }

    showError(row, !valid);
    return valid;
  }

  function initForms() {
    document.querySelectorAll("form[data-validate]").forEach(function (form) {
      var success = form.parentElement.querySelector(".form-success") ||
        form.querySelector(".form-success");

      var fields = form.querySelectorAll("input, select, textarea");
      fields.forEach(function (field) {
        field.addEventListener("blur", function () { validateField(field); });
      });

      form.addEventListener("submit", function (event) {
        var allValid = true;
        fields.forEach(function (field) {
          if (!validateField(field)) allValid = false;
        });

        if (!allValid) {
          event.preventDefault();
          var firstError = form.querySelector(".form-row.has-error input, .form-row.has-error select, .form-row.has-error textarea");
          if (firstError) firstError.focus();
          return;
        }

        // Static hosting + Formspree: let the browser submit normally,
        // but show an optimistic success message for same-page demos.
        if (form.getAttribute("action") && form.getAttribute("action").indexOf("YOUR_FORM_ID") !== -1) {
          event.preventDefault();
          if (success) {
            success.classList.add("is-visible");
            success.setAttribute("tabindex", "-1");
            success.focus();
          }
          form.reset();
        }
      });
    });
  }

  /* ---------- Min date = today for date inputs ---------- */
  function initDateMin() {
    var today = new Date().toISOString().split("T")[0];
    document.querySelectorAll('input[type="date"]').forEach(function (input) {
      input.setAttribute("min", today);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initActiveLink();
    initReveal();
    initForms();
    initDateMin();
  });
})();
