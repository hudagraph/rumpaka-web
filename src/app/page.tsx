'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const SLIDES = [
  {
    num: "01",
    cat: "Jasa Pertunjukan",
    title: ["SENI", "PANGGUNG"],
    desc: "Persembahan tari tradisional yang memukau untuk pernikahan, penyambutan tamu kehormatan, dan perayaan budaya.",
    href: "/layanan",
    tone: "linear-gradient(135deg,#1a0800,#4a1500,#7a2800)",
    accent: "#c47b3a",
    img: "/assets/img/hero-1.png",
  },
  {
    num: "02",
    cat: "Arum Kostum",
    title: ["BUSANA", "ADAT"],
    desc: "Koleksi kostum tari tradisional premium dengan detail handmade — tersedia untuk sewa maupun pembelian bagi keperluan panggung profesional.",
    href: "/kostum",
    tone: "linear-gradient(135deg,#0a1a08,#183012,#2a5020)",
    accent: "#7ab050",
    img: "/assets/img/hero-2.png",
  },
  {
    num: "03",
    cat: "Arum Art School",
    title: ["SEKOLAH", "SENI TARI"],
    desc: "Program belajar tari untuk anak dan remaja dengan metode kreatif yang memadukan nilai tradisi Sunda dengan ekspresi seni kontemporer.",
    href: "/art-school",
    tone: "linear-gradient(135deg,#080e1a,#101a30,#1a2a50)",
    accent: "#5080d0",
    img: "/assets/img/hero-3.png",
  },
  {
    num: "04",
    cat: "Portofolio Event",
    title: ["FESTIVAL", "GETASANDIK"],
    desc: "Rekam jejak kami menghadirkan seni budaya di berbagai panggung bergengsi — dari festival nasional hingga panggung budaya internasional.",
    href: "/layanan",
    tone: "linear-gradient(135deg,#1a1300,#3a2800,#604500)",
    accent: "#c89e40",
    img: "/assets/img/hero-4.png",
  },
];

const CINZEL = 'var(--font-cinzel), "Cinzel", Georgia, serif';
const HEADLINE_SIZE = 'clamp(44px, 9.8vw, 100px)';
const CONTENT_TOP = '50vh';

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide, current, isPaused]);

  // Animasi huruf split-text
  const splitText = (text: string, wordIndex: number) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={`${wordIndex}-${i}`}
        initial={{ y: '120%', rotate: 15, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ delay: 0.1 + wordIndex * 0.1 + i * 0.04, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        style={{ display: 'inline-block', whiteSpace: 'pre' }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <main className="hero-page">
      <section 
        className="hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* ── BACKGROUND ── */}
        <div className="bg-wrap">
          <div className="bg-tone" style={{ background: SLIDES[current].tone }} />
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current}
              initial={{ clipPath: 'inset(0 100% 0 0)', scale: 1.05 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', scale: 1 }}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 1.2 } }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="bg-img"
              style={{ zIndex: 1 }}
            >
              <Image 
                src={SLIDES[current].img} 
                alt={SLIDES[current].title.join(' ')}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="grain" aria-hidden="true" />
        <div className="vig"  aria-hidden="true" />

        {/* ── GHOST WATERMARK ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`ghost-${current}`}
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="ghost"
            style={{ fontFamily: CINZEL }}
          >
            {SLIDES[current].title[SLIDES[current].title.length - 1]}
          </motion.div>
        </AnimatePresence>

        {/* ── LEFT CONTENT ── */}
        <div className="content">
          <div className="txt" style={{ paddingTop: CONTENT_TOP, transform: 'translateY(-50%)' }}>
            {/* Category label */}
            <motion.div
              key={`cat-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="s-cat"
            >
              <span className="dash" style={{ background: SLIDES[current].accent }} />
              <span className="lbl"  style={{ color: SLIDES[current].accent }}>
                {SLIDES[current].cat}
              </span>
            </motion.div>

            {/* Big headline with split text */}
            <div className="s-title">
              {SLIDES[current].title.map((word, i) => (
                <div key={`${current}-t-${i}`} className="ln">
                  <div className="ln-in" style={{ fontFamily: CINZEL, fontSize: HEADLINE_SIZE }}>
                    {splitText(word, i)}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="s-desc"
            >
              {SLIDES[current].desc}
            </motion.p>

            {/* CTA */}
            <motion.div
              key={`acts-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="s-acts"
              style={{ marginTop: '20px' }}
            >
              <Link
                href={SLIDES[current].href}
                className="btn-cta"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: '10px',
                  padding: '12px 24px 12px 20px',
                  borderRadius: '100px',
                }}
              >
                <Play size={15} fill="currentColor" style={{ flexShrink: 0 }} />
                <span>Jelajahi Lebih</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT/BOTTOM CARDS ── */}
        <div className="cards-wrapper">
          <div className="swipe-hint" aria-hidden="true">
            <span className="sh-line" />
            Geser untuk melihat ➔
          </div>
          <div className="cards-zone">
            <div className="cards-row">
            {SLIDES.map((s, i) => {
              if (i === current) return null;
              return (
                <button
                  key={`card-${i}`}
                  onClick={() => setCurrent(i)}
                  className="card"
                  aria-label={`Lihat ${s.title.join(' ')}`}
                >
                  <div className="card-img-wrap">
                    <Image src={s.img} alt="" fill sizes="280px" style={{ objectFit: 'cover' }} className="card-img" />
                  </div>
                  <div className="card-shade" />
                  <div className="play-btn">
                    <Play size={14} fill="white" />
                  </div>
                  <div className="card-foot">
                    <span className="card-sub">{s.cat}</span>
                    <div className="card-name" style={{ fontFamily: CINZEL }}>
                      {s.title.join('\n')}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        </div>

        {/* ── BOTTOM CONTROLS ── */}
        <div className="controls">
          <div className="arr-g">
            <button onClick={prevSlide} className="arr" aria-label="Slide sebelumnya">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="arr" aria-label="Slide berikutnya">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="prog">
            <motion.div
              className="prog-fill"
              initial={false}
              animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              style={{
                background:  SLIDES[current].accent,
                boxShadow: `0 0 10px ${SLIDES[current].accent}88`,
              }}
            />
          </div>

          <div className="counter" style={{ fontFamily: CINZEL }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0,      opacity: 1 }}
                exit={{    y: '-100%', opacity: 0 }}
                className="cnt-n"
              >
                {SLIDES[current].num}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

      </section>

      <style jsx>{`
        /* ── PAGE & HERO ── */
        .hero-page { width: 100%; height: 100vh; overflow: hidden; }
        .hero {
          position: relative;
          width: 100vw; height: 100vh;
          overflow: hidden;
          background: #070707;
        }

        /* ── BACKGROUND ── */
        .bg-wrap { position: absolute; inset: 0; z-index: 0; }
        .bg-tone {
          position: absolute; inset: 0; z-index: 0;
          transition: background 1.4s cubic-bezier(0.76,0,0.24,1);
        }
        .bg-img {
          position: absolute; inset: 0; z-index: 1;
        }

        .grain {
          position: absolute; inset: 0; z-index: 1;
          pointer-events: none; opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* Vignette: kuat di kiri (teks), ringan di kanan (gambar tetap keliatan) */
        .vig {
          position: absolute; inset: 0; z-index: 2;
          background:
            linear-gradient(to right,  rgba(7,7,7,0.88) 0%, rgba(7,7,7,0.52) 34%, rgba(7,7,7,0.08) 54%, transparent 68%),
            linear-gradient(to top,    rgba(7,7,7,0.55) 0%, transparent 28%),
            linear-gradient(to bottom, rgba(7,7,7,0.28) 0%, transparent 18%);
        }

        /* ── GHOST WATERMARK ── */
        .ghost {
          position: absolute;
          left: -4px; top: 50%;
          transform: translateY(-52%);
          z-index: 3;
          font-size: clamp(90px,16vw,220px);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.055);
          letter-spacing: 0.06em;
          line-height: 0.9;
          pointer-events: none; user-select: none;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ── LEFT CONTENT ── */
        .content {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 50%;
          z-index: 10;
          display: flex;
          align-items: flex-start;
          padding: 0 54px;
          overflow: visible;
        }
        .txt { width: 100%; position: relative; }

        .s-cat {
          display: flex; align-items: center;
          gap: 16px; margin-bottom: 20px;
        }
        .s-cat .dash  { width: 32px; height: 2px; flex-shrink: 0; border-radius: 2px; }
        .s-cat .lbl   {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.34em; text-transform: uppercase;
        }

        .s-title { margin-bottom: 0; }
        .s-title .ln    { display: block; overflow: hidden; line-height: 1; padding-bottom: 10px; margin-bottom: -10px; }
        .s-title .ln-in {
          display: block;
          font-weight: 900;
          color: #fff;
          letter-spacing: 0.04em;
          line-height: 1;
          text-transform: uppercase;
          text-shadow: 0 2px 40px rgba(0,0,0,0.6);
        }

        .s-desc {
          font-size: 10px; line-height: 1.82;
          color: var(--text-mute);
          max-width: 380px;
          margin: 22px 0 60px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }

        .s-acts { display: flex; align-items: center; }
        .btn-cta {
          padding: 16px 36px 16px 28px;
          border-radius: 100px;
          color: #fff;
          font-size: 11.5px; font-weight: 800;
          letter-spacing: 0.18em; text-transform: uppercase;
          white-space: nowrap;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-cta:hover { transform: scale(1.06); }

        /* ── RIGHT CARDS ZONE ── */
        .cards-wrapper {
          position: absolute;
          left: 50%; top: 0; bottom: 90px;
          right: -90px;
          z-index: 20;
          display: flex;
          align-items: flex-end;
        }
        .cards-zone {
          display: flex;
          align-items: flex-end;
          padding-left: 20px;
          padding-bottom: 18px;
          width: 100%;
        }
        .cards-row { display: flex; gap: 16px; }

        .card {
          flex: 0 0 280px;
          height: min(320px, calc(100vh - 180px));
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          background: #111;
          text-align: left;
          transition: transform 0.45s cubic-bezier(0.34,1.2,0.64,1),
                      box-shadow 0.45s ease;
          cursor: none; /* Custom cursor */
        }
        .card:hover {
          transform: translateY(-7px) scale(1.025);
          box-shadow: 0 28px 70px rgba(0,0,0,0.55);
        }
        .card-img-wrap {
          position: absolute; inset: 0;
          transition: transform 0.5s ease;
        }
        .card:hover .card-img-wrap { transform: scale(1.04); }
        
        .card-shade {
          position: absolute; inset: 0;
          background: linear-gradient(to top,
            rgba(0,0,0,0.92) 0%,
            rgba(0,0,0,0.2)  50%,
            transparent      100%);
        }
        .play-btn {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%) scale(0);
          width: 42px; height: 42px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.55);
          background: rgba(0,0,0,0.22); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
          transition: opacity 0.3s, transform 0.4s cubic-bezier(0.34,1.5,0.64,1);
        }
        .card:hover .play-btn { opacity: 1; transform: translate(-50%,-50%) scale(1); }
        .card-foot {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 18px 20px 22px;
        }
        .card-sub {
          display: block;
          font-size: 7.5px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .card-name {
          font-size: 15px; font-weight: 900;
          color: #fff; line-height: 1.12;
          white-space: pre-line;
          letter-spacing: 0.04em; text-transform: uppercase;
        }

        /* ── BOTTOM CONTROLS ── */
        .controls {
          position: absolute;
          bottom: 26px;
          left: 50%;
          right: 48px;
          z-index: 30;
          display: flex;
          align-items: center;
          gap: 18px;
          padding-left: 20px;
        }
        .arr-g { display: flex; gap: 8px; flex-shrink: 0; }
        .arr {
          width: 46px; height: 46px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(14px);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.72);
          transition: border-color 0.3s, background 0.3s, color 0.3s;
          cursor: none;
        }
        .arr:hover {
          border-color: var(--gold-dim);
          background: var(--gold-glow);
          color: var(--gold);
        }
        .prog {
          flex: 1; height: 1px;
          background: rgba(255,255,255,0.13);
          position: relative; overflow: hidden;
        }
        .prog-fill { position: absolute; top: 0; left: 0; height: 100%; }

        .counter {
          font-size: 40px; font-weight: 900;
          color: rgba(255,255,255,0.13);
          width: 66px; text-align: right;
          overflow: hidden; height: 48px; position: relative;
          flex-shrink: 0;
        }
        .cnt-n { position: absolute; right: 0; top: 0; line-height: 48px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .content    { width: 52%; padding: 0 36px; }
          .cards-zone { left: 52%; padding-left: 14px; }
          .controls   { left: 52%; padding-left: 14px; }
          .card       { flex: 0 0 200px; }
        }
        @media (max-width: 768px) {
          .content    {
            width: 100%;
            align-items: flex-start;
            padding: 100px 24px 0;
            bottom: 0;
            z-index: 10;
          }
          .txt { transform: translateY(0) !important; padding-top: 0 !important; }
          .s-cat .lbl     { font-size: 10px; }
          .s-title .ln-in { font-size: clamp(24px, 7vw, 64px) !important; }
          .s-desc { max-width: 80%; margin-bottom: 20px; font-size: 12px; line-height: 1.2; transform: scale(0.65); transform-origin: left top; }
          
          .controls       { left: 24px; right: 24px; padding-left: 0; bottom: 20px; }
          .ghost          { font-size: clamp(86px, 28vw, 148px); }

          /* MOBILE CAROUSEL */
          .cards-wrapper {
            position: absolute;
            left: 0; right: 0; bottom: 84px;
            width: 100%;
            z-index: 20;
          }
          .swipe-hint {
            display: flex; align-items: center; gap: 6px;
            position: absolute; top: -24px; right: 24px;
            font-size: 8.5px; font-weight: 700; color: var(--gold);
            text-transform: uppercase; letter-spacing: 0.15em;
            z-index: 10;
          }
          .sh-line { width: 14px; height: 1px; background: var(--gold); }
          .cards-zone {
            width: 100%;
            padding: 0 24px;
            display: flex;
            align-items: flex-end;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
          }
          .cards-zone::-webkit-scrollbar { display: none; } /* Chrome */
          .cards-row { gap: 12px; padding-right: 24px; } /* padding for last card scroll */
          .card { 
            flex: 0 0 180px; 
            height: 180px; 
            scroll-snap-align: center; 
          }
        }
        @media (max-width: 380px) {
          .s-desc   { font-size: 5px; line-height: 1.2; margin-bottom: 12px; }
          .btn-cta { padding: 12px 20px; font-size: 10px; }
          .card { flex: 0 0 160px; height: 160px; }
        }
      `}</style>
    </main>
  );
}
