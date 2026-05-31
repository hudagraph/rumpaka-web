"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (curRef.current) {
        curRef.current.style.left = `${e.clientX}px`;
        curRef.current.style.top = `${e.clientY}px`;
        
        const target = e.target as HTMLElement;
        const isHoverable = target.closest("a,button,select,input,textarea,.card,.dot,.tag-int,[role='button']");
        curRef.current.classList.toggle("expand", !!isHoverable);
      }
    };

    const lerpRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      requestRef.current = requestAnimationFrame(lerpRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(lerpRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef} />
      <div id="ring" ref={ringRef} />
    </>
  );
}
