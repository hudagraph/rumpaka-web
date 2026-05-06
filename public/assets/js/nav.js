/* ════════════════════════════════════════════════════════════
   NAV — scroll state + hamburger / mobile menu wiring
   ════════════════════════════════════════════════════════════ */
(function () {
  // Scroll state on top nav (sub-pages with fixed nav)
  const nav = document.getElementById("mainNav");
  if (nav && !nav.classList.contains("nav-hero")) {
    const onScroll = () => nav.classList.toggle("scrolled", scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Hamburger
  const hamBtn = document.getElementById("hamBtn");
  const mobMenu = document.getElementById("mobMenu");
  if (!hamBtn || !mobMenu) return;

  function setMobOpen(isOpen) {
    hamBtn.classList.toggle("open", isOpen);
    mobMenu.classList.toggle("open", isOpen);
    hamBtn.setAttribute("aria-expanded", String(isOpen));
    mobMenu.setAttribute("aria-hidden", String(!isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
    // Notify other modules (e.g. autoplay) so they can pause
    window.dispatchEvent(new CustomEvent("mobMenuToggle", { detail: { isOpen } }));
  }

  hamBtn.addEventListener("click", () => {
    setMobOpen(!hamBtn.classList.contains("open"));
  });

  // Close on link click
  mobMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setMobOpen(false));
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && hamBtn.classList.contains("open")) {
      setMobOpen(false);
      hamBtn.focus();
    }
  });
})();
