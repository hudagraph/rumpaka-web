"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const SLIDES = [
  {
    num: "01",
    cat: "Highlight Event",
    title: ["LITTLE", "ASIA"],
    desc: "Berkompetisi dan berkolaborasi dengan negara Asia lainnya pada festival Little Asia di Jeddah, Arab Saudi (2023-2024), menampilkan lima tarian Nusantara yang memukau.",
    href: "/portofolio",
    img: "/assets/img/seni-panggung.png",
    tone: "linear-gradient(135deg,#1a0800,#4a1500,#7a2800)",
    accent: "#c47b3a",
  },
  {
    num: "02",
    cat: "Highlight Event",
    title: ["OSAKA", "EXPO"],
    desc: "Sebagai delegasi resmi mewakili Kabupaten Bogor di World Expo 2025 Osaka, Jepang, menghadirkan pertunjukan interaktif Tari Kaulinan Barudak di kancah global.",
    href: "/portofolio",
    img: "/assets/img/festival.png",
    tone: "linear-gradient(135deg,#0a1a08,#183012,#2a5020)",
    accent: "#7ab050",
  },
  {
    num: "03",
    cat: "Highlight Event",
    title: ["BOULEVARD", "WORLD"],
    desc: "Membawa keindahan Tari Janger, Jaipong, dan Merak di panggung Boulevard World Riyadh, Arab Saudi (2025-2026), memperkuat citra budaya Indonesia di dunia.",
    href: "/portofolio",
    img: "/assets/img/busana-adat.png",
    tone: "linear-gradient(135deg,#080e1a,#101a30,#1a2a50)",
    accent: "#5080d0",
  },
  {
    num: "04",
    cat: "Tentang Kami",
    title: ["PROFIL", "SANGGAR"],
    desc: "Institusi seni pertunjukan yang berfokus pada pelestarian, pengembangan, dan internasionalisasi budaya Indonesia melalui karya tari yang inovatif.",
    href: "/tentang",
    img: "/assets/img/seni-panggung.png",
    tone: "linear-gradient(135deg,#1a1300,#3a2800,#604500)",
    accent: "#c89e40",
  },
];

export default function HeroSlider() {
  const [cur, setCur] = useState(0);
  const [busy, setBusy] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const autoT = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const touchX = useRef(0);

  const go = useCallback((newIdx: number) => {
    if (busy || newIdx === cur) return;
    setBusy(true);
    setCur(newIdx);
    setAnimKey(prev => prev + 1);

    setTimeout(() => {
      setBusy(false);
    }, 1000); // Wait for animations
  }, [busy, cur]);

  const goNext = useCallback(() => go((cur + 1) % SLIDES.length), [cur, go]);
  const goPrev = useCallback(() => go((cur - 1 + SLIDES.length) % SLIDES.length), [cur, go]);

  const startAuto = useCallback(() => {
    if (autoT.current) clearInterval(autoT.current);
    autoT.current = setInterval(goNext, 6200);
  }, [goNext]);

  const stopAuto = useCallback(() => {
    if (autoT.current) clearInterval(autoT.current);
  }, []);

  useEffect(() => {
    startAuto();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      stopAuto();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [startAuto, goNext, goPrev, stopAuto]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 52) dx < 0 ? goNext() : goPrev();
  };

  const slide = SLIDES[cur];

  return (
    <section 
      className="hero" 
      ref={heroRef} 
      onMouseEnter={stopAuto} 
      onMouseLeave={startAuto}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Beranda — Sanggar Seni Annisa Rumpaka"
    >
      <div className="bg-wrap" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div 
            key={i}
            className={`bg-s ${i === cur ? "on" : ""}`}
            style={{ backgroundImage: `url("${s.img}"), ${s.tone}` }}
          />
        ))}
      </div>
      
      <div className="grain" aria-hidden="true"></div>
      <div className="vig" aria-hidden="true"></div>
      
      <div key={`ghost-${animKey}`} className="ghost" aria-hidden="true">
        {slide.title[slide.title.length - 1]}
      </div>

      <div className="content" key={`content-${animKey}`}>
        <div className="txt">
          <div className="s-cat">
            <span className="dash" style={{ animation: "fin .5s .18s forwards" }}></span>
            <span className="lbl" style={{ animation: "up .7s .22s cubic-bezier(.34,1.56,.64,1) forwards" }}>
              {slide.cat}
            </span>
          </div>
          <h1 className="s-title">
            {slide.title.map((w, i) => (
              <span className="ln" key={i}>
                <span 
                  className="ln-in" 
                  style={{ animation: `up .85s ${0.28 + i * 0.13}s cubic-bezier(.76,0,.24,1) forwards` }}
                >
                  {w}
                </span>
              </span>
            ))}
          </h1>
          <p className="s-desc" style={{ animation: "fup .7s .58s ease forwards" }}>
            {slide.desc}
          </p>
          <div className="s-acts" style={{ animation: "fup .7s .7s ease forwards" }}>
            <button className="btn-play" aria-label="Tonton Video">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <Link href={slide.href} className="btn-more">Selengkapnya</Link>
          </div>
        </div>
      </div>

      <div className="cards-zone">
        <div className="cards-row" key={`cards-${animKey}`}>
          {SLIDES.map((_, i) => {
            const idx = (cur + 1 + i) % SLIDES.length;
            if (i === SLIDES.length - 1) return null; // Only show other slides
            const s = SLIDES[idx];
            return (
              <button 
                key={idx}
                className="card"
                type="button"
                onClick={() => go(idx)}
                style={{ animation: `cardIn .65s ${i * 0.1}s cubic-bezier(.34,1.2,.64,1) both` }}
              >
                <div className="card-inner">
                  <div 
                    className="card-img" 
                    style={{ backgroundImage: `url("${s.img}"), ${s.tone}` }}
                  ></div>
                  <div className="card-shade" aria-hidden="true"></div>
                  <span className="play-btn" aria-label="Tonton di YouTube">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <div className="card-foot">
                    <span className="card-sub">{s.cat}</span>
                    <div className="card-name">{s.title.join(" ")}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="controls">
        <div className="arr-g">
          <button className="arr" onClick={goPrev} aria-label="Slide sebelumnya">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="arr" onClick={goNext} aria-label="Slide berikutnya">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
        <div className="prog">
          <div 
            className="prog-fill" 
            style={{ width: `${((cur + 1) / SLIDES.length) * 100}%` }}
          ></div>
        </div>
        <div className="dots">
          {SLIDES.map((_, i) => (
            <button 
              key={i}
              className={`dot ${i === cur ? "on" : ""}`}
              onClick={() => go(i)}
              aria-label={`Ke slide ${i + 1}`}
              aria-selected={i === cur}
            ></button>
          ))}
        </div>
        <div className="counter">
          <div 
            key={`counter-${animKey}`}
            className="cnt-n"
            style={{ animation: "fup .52s ease forwards" }}
          >
            {slide.num}
          </div>
        </div>
      </div>
    </section>
  );
}
