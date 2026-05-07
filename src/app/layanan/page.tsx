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

      {/* SERVICES GRID */}
      <section className="svc-wrap">
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.num}
              className="svc-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="svc-img-wrap">
                <span className="svc-num">{s.num}</span>
                <div className="img-ph" style={{ backgroundImage: `url("${s.img}")` }} />
                <div className="img-overlay" />
                <div className="ph-label">{s.imgLabel}</div>
              </div>
              <div className="svc-body">
                <div className="svc-cat">{s.cat}</div>
                <h2>{s.title.split('\n').map((line, idx) => (
                  <span key={idx}>{line}<br /></span>
                ))}</h2>
                <p>{s.desc}</p>
                <div className="svc-tags">
                  {s.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <Link href="/kontak" className="link-arrow">
                  Konsultasi Gratis
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
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
          height: 45vh;
          min-height: 400px;
          display: flex;
          align-items: center;
          padding: 0px 50px;
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

        /* ── SERVICE GRID ── */
        .svc-wrap { padding: 32px 50px 96px; max-width: 1400px; margin: 0 auto; }
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .svc-card {
          display: flex;
          flex-direction: column;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.35s ease, border-color 0.35s ease;
        }
        .svc-card:hover { transform: translateY(-6px); border-color: rgba(200,169,110,0.25); }

        /* image */
        .svc-img-wrap { position: relative; aspect-ratio: 3 / 4; flex-shrink: 0; }
        .svc-num { position: absolute; top: 12px; left: 12px; font-family: var(--font-serif); font-size: 10px; font-weight: 700; color: var(--gold); letter-spacing: 0.12em; background: rgba(7,7,7,0.72); backdrop-filter: blur(8px); border: 1px solid var(--gold-dim); padding: 3px 10px; border-radius: 100px; z-index: 2; }
        .img-ph { width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform 0.8s ease; }
        .svc-card:hover .img-ph { transform: scale(1.04); }
        .img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(7,7,7,0.75) 0%, transparent 50%); pointer-events: none; }
        .ph-label { position: absolute; bottom: 12px; left: 12px; font-size: 8px; font-weight: 700; color: #fff; opacity: 0.7; letter-spacing: 0.14em; text-transform: uppercase; z-index: 2; }

        /* body */
        .svc-body { padding: 20px 20px 24px; display: flex; flex-direction: column; flex: 1; }
        .svc-cat { font-size: 8.5px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
        .svc-cat::before { content: ""; width: 14px; height: 1px; background: var(--gold); flex-shrink: 0; }
        .svc-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 1.6vw, 26px); font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 10px; color: #fff; }
        .svc-body p { font-size: 12px; line-height: 1.75; color: var(--text-mute); margin-bottom: 14px; flex: 1; }
        .svc-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 18px; }
        .tag { font-size: 8px; font-weight: 600; padding: 4px 10px; border: 1px solid rgba(255,255,255,0.08); border-radius: 100px; color: var(--text-soft); letter-spacing: 0.04em; }
        .link-arrow { display: inline-flex; align-items: center; gap: 7px; font-size: 10px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.14em; transition: gap 0.3s; margin-top: auto; }
        .link-arrow:hover { gap: 12px; }

        /* stats */
        .stats { background: var(--surface-2); padding: 64px 50px; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .stats-inner { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        .stat-num { font-family: var(--font-serif); font-size: 42px; font-weight: 900; color: var(--gold); margin-bottom: 8px; line-height: 1; }
        .stat-lbl { font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.14em; color: var(--text-mute); }

        /* cta */
        .cta-strip { padding: 96px 50px; text-align: center; background: var(--dark); }
        .cta-inner h2 { font-family: var(--font-serif); font-size: clamp(34px, 4vw, 58px); font-weight: 900; line-height: 1.1; color: #fff; margin-bottom: 18px; }
        .cta-inner h2 em { color: var(--gold); font-style: italic; }
        .cta-inner p { font-size: 14px; color: var(--text-mute); margin-bottom: 36px; }
        .btn-gold { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; background: var(--gold); color: #070707; font-weight: 700; font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.14em; border-radius: 100px; transition: transform 0.3s, box-shadow 0.3s; }
        .btn-gold:hover { transform: translateY(-3px); box-shadow: 0 10px 40px var(--gold-glow); }

        /* responsive */
        @media (max-width: 1100px) {
          .page-hero { padding: 0 32px; }
          .svc-wrap { padding: 24px 32px 72px; }
          .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .stats { padding: 56px 32px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .cta-strip { padding: 80px 32px; }
        }
        @media (max-width: 768px) {
          .page-hero { padding: 0 20px; height: auto; min-height: unset; padding-top: 110px; padding-bottom: 48px; }
          .svc-wrap { padding: 0px 20px 56px; }
          .svc-grid { grid-template-columns: 1fr; gap: 14px; }
          .svc-img-wrap { aspect-ratio: 16 / 9; }
          .svc-body h2 { font-size: clamp(22px, 7vw, 32px); }
          .stats { padding: 48px 20px; }
          .stats-inner { gap: 20px; grid-template-columns: repeat(2, 1fr); }
          .stat-num { font-size: 32px; }
          .cta-strip { padding: 64px 20px; }
        }
      `}</style>
    </main>
  );
}
