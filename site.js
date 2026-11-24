/* ============================================================
   site.js — 全站共享的一点点脚本
   - 顶栏滚动后的描边状态
   - 进入视口时的渐显（尊重 prefers-reduced-motion）
   - 页脚年份
   没有依赖，defer 加载，失败时页面依然完整可用。
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1. 顶栏状态 ---- */
  var header = document.querySelector(".site-header");

  if (header) {
    var ticking = false;

    var syncHeader = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(syncHeader);
        }
      },
      { passive: true }
    );

    syncHeader();
  }

  /* ---- 2. 渐显 ---- */
  var revealItems = document.querySelectorAll(".reveal");

  if (revealItems.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach(function (el) {
        el.classList.add("is-in");
      });
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );

      revealItems.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  /* ---- 3. 年份 ---- */
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
