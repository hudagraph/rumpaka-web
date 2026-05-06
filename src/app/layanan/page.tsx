'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    num: "01",
    cat: "Jasa Pertunjukan",
    title: "Seni\nPanggung",
    desc: "Persembahan tari tradisional Sunda yang memukau untuk pernikahan adat, penyambutan tamu kehormatan, wisuda, dan berbagai perayaan budaya nusantara. Kami menghadirkan penari terlatih dengan kostum premium dan tata panggung profesional.",
    tags: ["Tari Penyambutan", "Tari Klasik Sunda", "Tari Kreasi", "Pertunjukan Kolosal", "Pernikahan Adat"],
    imgLabel: "PHOTO · TARI PENYAMBUTAN",
    img: "/assets/img/svc-1.png",
  },
  {
    num: "02",
    cat: "Arum Kostum",
    title: "Busana\nAdat",
    desc: "Koleksi kostum tari tradisional premium dengan detail handmade yang dikerjakan oleh pengrajin berpengalaman. Tersedia untuk sewa maupun pembelian bagi keperluan panggung profesional, festival budaya, dan dokumentasi.",
    tags: ["Sewa Kostum", "Beli Kostum", "Tari Sunda", "Handmade", "Custom Order"],
    imgLabel: "PHOTO · KOSTUM HANDMADE",
    rev: true,
    img: "/assets/img/svc-2.png",
  },
  {
    num: "03",
    cat: "Arum Art School",
    title: "Sekolah\nSeni Tari",
    desc: "Program belajar tari untuk anak dan remaja dengan metode kreatif yang memadukan nilai tradisi Sunda dengan ekspresi seni kontemporer. Dibimbing langsung oleh penari senior berpengalaman lebih dari dua dekade.",
    tags: ["Anak 5–12 Tahun", "Remaja 13–18 Tahun", "Tari Dasar", "Tari Sunda Klasik", "Tari Kreasi"],
    imgLabel: "PHOTO · KELAS TARI ANAK",
    img: "/assets/img/svc-3.png",
  },
  {
    num: "04",
    cat: "Portofolio Event",
    title: "Festival &\nPanggung",
    desc: "Rekam jejak kami menghadirkan seni budaya di berbagai panggung bergengsi — dari festival nasional seperti Getasandik hingga panggung budaya internasional. Kami siap menjadi mitra kebudayaan untuk event Anda.",
    tags: ["Festival Nasional", "Panggung Internasional", "Event Korporat", "Cultural Diplomacy"],
    imgLabel: "PHOTO · FESTIVAL GETASANDIK",
    rev: true,
    img: "/assets/img/svc-4.png",
  },
];

const STATS = [
  { num: "20+", label: "Tahun Berpengalaman" },
  { num: "500+", label: "Pertunjukan Sukses" },
  { num: "300+", label: "Alumni Art School" },
  { num: "15+", label: "Festival Bergengsi" },
];

export default function Layanan() {
  return (
    <main className="layanan-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="ph-bg" />
        <div className="ph-grain" />
        <div className="ph-vig" />
        <div className="ph-content">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow"
          >
            <span className="dash" />
            <span>Layanan</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Yang Kami<br /><em>Tawarkan</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Dari pertunjukan panggung hingga pendidikan seni — kami hadir untuk melestarikan dan merayakan keindahan budaya Sunda.
          </motion.p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="svc-wrap">
        {SERVICES.map((s, i) => (
          <motion.article 
            key={s.num} 
            className={`svc-item ${s.rev ? 'rev' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="svc-img-wrap">
              <span className="svc-num">{s.num}</span>
              <div 
                className="img-ph" 
                style={{ backgroundImage: `url("${s.img}")` }}
              />
              <div className="img-overlay" />
              <div className="ph-label">{s.imgLabel}</div>
            </div>
            <div className="svc-body">
              <div className="svc-cat">{s.cat}</div>
              <h2>{s.title.split('\n').map((line, idx) => (
                <span key={idx}>{line}<br/></span>
              ))}</h2>
              <p>{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <Link href="/kontak" className="link-arrow">
                Konsultasi Gratis
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stats-inner">
          {STATS.map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className="stat"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="stat-num">{stat.num}</div>
              <div className="stat-lbl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <motion.div 
          className="cta-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Siap Berkolaborasi<br /><em>Bersama Kami?</em></h2>
          <p>Ceritakan kebutuhan Anda dan tim kami akan menghubungi dalam waktu 1×24 jam.</p>
          <Link href="/kontak" className="btn-gold">
            Hubungi Kami Sekarang
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <style jsx>{`
        .page-hero {
          position: relative;
          height: 60vh;
          min-height: 480px;
          display: flex;
          align-items: center;
          padding: 0 50px;
          overflow: hidden;
          background: #0a0a0a;
        }
        .ph-bg {
          position: absolute; inset: 0;
          background: linear-gradient(45deg, #1a1410 0%, #070707 100%);
        }
        .ph-grain {
          position: absolute; inset: 0; z-index: 1; opacity: 0.04; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .ph-vig {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(to bottom, rgba(7,7,7,0.4) 0%, transparent 40%, rgba(7,7,7,0.9) 100%);
        }
        .ph-content { position: relative; z-index: 10; max-width: 650px; }
        .eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .eyebrow .dash { width: 32px; height: 1px; background: var(--gold); }
        .eyebrow span { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); }
        .ph-content h1 { font-family: var(--font-serif); font-size: clamp(48px, 6vw, 84px); font-weight: 900; line-height: 1; color: #fff; letter-spacing: -0.02em; margin-bottom: 24px; }
        .ph-content em { font-family: var(--font-serif); font-style: italic; color: var(--gold); font-weight: 700; }
        .ph-content p { font-size: 15px; color: var(--text-mute); max-width: 480px; line-height: 1.7; }

        .svc-wrap { padding: 100px 50px; max-width: 1300px; margin: 0 auto; }
        .svc-item { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; padding: 80px 0; border-top: 1px solid rgba(255, 255, 255, 0.06); }
        .svc-item.rev .svc-img { order: 2; }
        .svc-item.rev .svc-body { order: 1; }
        .svc-img-wrap { position: relative; border-radius: 24px; overflow: hidden; aspect-ratio: 4 / 3; border: 1px solid rgba(255, 255, 255, 0.08); }
        .svc-num { position: absolute; top: 20px; left: 20px; font-family: var(--font-serif); font-size: 12px; font-weight: 700; color: var(--gold); letter-spacing: 0.12em; background: rgba(7, 7, 7, 0.65); backdrop-filter: blur(8px); border: 1px solid var(--gold-dim); padding: 5px 13px; border-radius: 100px; z-index: 2; }
        .img-ph { width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform 0.8s ease; }
        .svc-img-wrap:hover .img-ph { transform: scale(1.05); }
        .img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(7,7,7,0.7) 0%, transparent 60%); pointer-events: none; }
        .ph-label { position: absolute; bottom: 20px; left: 20px; font-family: var(--font-sans); font-size: 9px; font-weight: 700; color: #fff; opacity: 0.8; letter-spacing: 0.15em; text-transform: uppercase; z-index: 2; }

        .svc-cat { font-size: 9.5px; font-weight: 700; letter-spacing: 0.26em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
        .svc-cat::before { content: ""; width: 20px; height: 1px; background: var(--gold); }
        .svc-body h2 { font-family: var(--font-serif); font-size: clamp(34px, 3.6vw, 54px); font-weight: 900; line-height: 1; letter-spacing: -0.025em; margin-bottom: 22px; color: #fff; }
        .svc-body p { font-size: 13.5px; line-height: 1.85; color: var(--text-mute); margin-bottom: 28px; }
        .svc-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 36px; }
        .tag { font-size: 9px; font-weight: 600; padding: 6px 14px; border: 1px solid rgba(255,255,255,0.08); border-radius: 100px; color: var(--text-soft); }
        .link-arrow { display: flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.15em; }

        .stats { background: var(--surface-2); padding: 80px 50px; border-top: 1px solid rgba(255, 255, 255, 0.06); border-bottom: 1px solid rgba(255, 255, 255, 0.06); }
        .stats-inner { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
        .stat-num { font-family: var(--font-serif); font-size: 48px; font-weight: 900; color: var(--gold); margin-bottom: 10px; line-height: 1; }
        .stat-lbl { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-mute); }

        .cta-strip { padding: 120px 50px; text-align: center; background: var(--dark); }
        .cta-inner h2 { font-family: var(--font-serif); font-size: clamp(38px, 4.5vw, 64px); font-weight: 900; line-height: 1.1; color: #fff; margin-bottom: 24px; }
        .cta-inner h2 em { color: var(--gold); font-style: italic; }
        .cta-inner p { font-size: 15px; color: var(--text-mute); margin-bottom: 40px; }
        .btn-gold { display: inline-flex; align-items: center; gap: 12px; padding: 16px 36px; background: var(--gold); color: #070707; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; border-radius: 100px; transition: transform 0.3s, box-shadow 0.3s; }
        .btn-gold:hover { transform: translateY(-3px); box-shadow: 0 10px 40px var(--gold-glow); }

        @media (max-width: 1100px) {
          .page-hero { padding: 0 32px; }
          .svc-wrap { padding: 80px 32px; }
          .svc-item { gap: 48px; padding: 64px 0; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .page-hero { padding: 0 24px; height: 55vh; }
          .svc-wrap { padding: 50px 24px; }
          .svc-item { grid-template-columns: 1fr; gap: 32px; padding: 48px 0; }
          .svc-body h2 { font-size: clamp(30px, 10vw, 42px); }
          .svc-item.rev .svc-img, .svc-item.rev .svc-body { order: unset; }
          .stats { padding: 60px 24px; }
          .stats-inner { gap: 24px; grid-template-columns: repeat(2, 1fr); }
          .stat-num { font-size: 34px; }
          .cta-strip { padding: 80px 24px; }
        }
      `}</style>
    </main>
  );
}
