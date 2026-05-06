/* ════════════════════════════════════════════════════════════
   CURSOR — custom dot+ring follower (auto-disabled on touch)
   ════════════════════════════════════════════════════════════ */
(function () {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const curEl = document.getElementById("cur");
  const ringEl = document.getElementById("ring");
  if (!curEl || !ringEl) return;

  let mx = innerWidth / 2,
    my = innerHeight / 2,
    rx = mx,
    ry = my;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    curEl.style.left = mx + "px";
    curEl.style.top = my + "px";
    const h = e.target.closest("a,button,select,input,textarea,.card,.dot,.tag-int,[role='button']");
    curEl.classList.toggle("expand", !!h);
  });

  (function lerpRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ringEl.style.left = rx + "px";
    ringEl.style.top = ry + "px";
    requestAnimationFrame(lerpRing);
  })();
})();
