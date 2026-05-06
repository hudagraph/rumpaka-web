'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const PROGRAMS = [
  {
    num: "01",
    sub: "8 Sesi · 2 Bulan",
    title: "Reguler",
    desc: "Kelas mingguan dalam kelompok kecil. Cocok untuk yang ingin belajar santai sambil mengenal kebudayaan.",
    features: ["2× pertemuan/minggu (60 menit)", "Maks. 8 murid per kelas", "Materi terstruktur per level", "Sertifikat penyelesaian"],
    price: "650K",
    unit: "/bulan",
    href: "/kontak?topic=artschool&prog=reguler",
  },
  {
    num: "02",
    sub: "12 Sesi · 1 Bulan",
    title: "Intensif",
    desc: "Program akselerasi untuk yang sudah memiliki dasar atau ingin cepat mahir. Frekuensi tinggi dengan materi mendalam.",
    features: ["3× pertemuan/minggu (90 menit)", "Maks. 6 murid per kelas", "Praktek panggung mini", "Sertifikat & rekomendasi"],
    price: "1.4Jt",
    unit: "/bulan",
    href: "/kontak?topic=artschool&prog=intensif",
    featured: true,
  },
  {
    num: "03",
    sub: "Fleksibel · Per Sesi",
    title: "Privat",
    desc: "Pelatihan one-on-one dengan kurikulum custom. Ideal untuk persiapan audisi, kompetisi, atau performa khusus.",
    features: ["1-on-1 dengan instruktur senior", "Jadwal & lokasi fleksibel", "Materi disesuaikan tujuan", "Konsultasi karir seni"],
    price: "350K",
    unit: "/sesi 90 menit",
    href: "/kontak?topic=artschool&prog=privat",
  },
];

const CURRICULUM = [
  { num: 1, name: "Pengenalan", age: "5+ Tahun · Pemula", desc: "Pengenalan postur dasar, ritme gendang, dan gerakan tangan utama. Fokus pada kepercayaan diri." },
  { num: 2, name: "Dasar", age: "Lanjutan Pemula", desc: "Penguasaan tari pendek seperti Kembang Tanjung. Latihan koordinasi tangan-kaki dan musikalitas." },
  { num: 3, name: "Menengah", age: "Intermediate", desc: "Tari berdurasi penuh seperti Jaipong dan Ronggeng. Pemahaman teori budaya dan karakter tari." },
  { num: 4, name: "Mahir", age: "Advanced", desc: "Tari klasik kompleks seperti Tari Merak dan Topeng. Persiapan panggung profesional dan koreografi." },
];

const INSTRUCTORS = [
  { initial: "AR", name: "Annisa R.", role: "Founder · Klasik", bio: "Maestro tari klasik Sunda dengan 25+ tahun pengalaman. Lulusan ISBI Bandung." },
  { initial: "DM", name: "Dewi M.", role: "Tari Anak", bio: "Spesialis pedagogi anak. Berpengalaman mengajar 15 tahun di sekolah dasar." },
  { initial: "RS", name: "Rinda S.", role: "Tari Kreasi", bio: "Koreografer aktif yang menggabungkan tari Sunda dengan unsur kontemporer." },
  { initial: "BP", name: "Bagas P.", role: "Topeng & Wayang", bio: "Spesialis tari topeng tradisional. Pernah tampil di festival Asia Tenggara." },
];

const FAQS = [
  { q: "Apakah harus memiliki pengalaman menari sebelumnya?", a: "Tidak. Program Reguler kami dirancang untuk pemula total. Kami akan memulai dari postur dan gerakan dasar." },
  { q: "Berapa usia minimum untuk mendaftar?", a: "Kelas anak dimulai dari usia 5 tahun. Untuk dewasa, tidak ada batas usia atas." },
  { q: "Apakah disediakan kostum saat pertunjukan?", a: "Ya. Murid mendapatkan akses sewa khusus dari Arum Kostum dengan harga spesial pelajar." },
  { q: "Apakah ada kelas trial sebelum mendaftar?", a: "Ya. Kami menyediakan satu sesi trial gratis untuk calon murid baru." },
];

export default function ArtSchool() {
  return (
    <main className="art-school-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="ph-bg" />
        <div className="ph-grain" />
        <div className="ph-vig" />
        <div className="ph-content">
          <div className="eyebrow">
            <span className="dash" />
            <span>Art School</span>
          </div>
          <h1>Sekolah<br /><em>Tari Sunda</em></h1>
          <p>Belajar tari Sunda dari pengajar berpengalaman lebih dari 20 tahun. Program lengkap untuk anak, remaja, hingga dewasa — dari pemula hingga lanjutan.</p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs">
        <header className="section-head">
          <h2>Program <em>Pelatihan</em></h2>
          <p>Tiga jalur belajar yang dirancang untuk menyesuaikan ritme dan tujuan setiap murid — dari pengenalan dasar hingga persiapan kompetisi profesional.</p>
        </header>

        <div className="programs-grid">
          {PROGRAMS.map((p, i) => (
            <motion.article 
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`prog-card ${p.featured ? 'featured' : ''}`}
            >
              {p.featured && <span className="prog-badge">Populer</span>}
              <div className="prog-num">{p.num}</div>
              <div className="prog-sub">{p.sub}</div>
              <h3 className="prog-title">{p.title}</h3>
              <p className="prog-desc">{p.desc}</p>
              <ul className="prog-list">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <div className="prog-foot">
                <div>
                  <div className="prog-price"><span className="cur">Rp</span>{p.price}</div>
                  <div className="prog-price-unit">{p.unit}</div>
                </div>
                <Link href={p.href} className="prog-cta">
                  Daftar
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="curriculum">
        <div className="curr-grid">
          <div className="curr-side">
            <div className="eyebrow">
              <span className="dash" />
              <span>Kurikulum</span>
            </div>
            <h2>Empat Tahap<br /><em>Penguasaan</em></h2>
            <p>Kurikulum kami dibagi menjadi empat tahap progresif. Setiap murid menjalani penilaian sebelum naik ke tahap berikutnya.</p>
            <p className="quote">"Tari bukan sekadar gerak — ia adalah cara tubuh memahami sejarah."</p>
          </div>

          <div className="curr-stages">
            {CURRICULUM.map((s, i) => (
              <motion.div 
                key={s.num} 
                className="stage"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="stage-num">{s.num}</div>
                <div>
                  <div className="stage-name">{s.name}</div>
                  <div className="stage-age">{s.age}</div>
                  <p className="stage-desc">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="instructors">
        <header className="section-head">
          <h2>Tim <em>Pengajar</em></h2>
          <p>Pengajar bersertifikat dengan pengalaman panggung nasional dan internasional.</p>
        </header>

        <div className="inst-grid">
          {INSTRUCTORS.map((inst, i) => (
            <motion.div 
              key={inst.name} 
              className="inst-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="inst-photo">{inst.initial}</div>
              <div className="inst-name">{inst.name}</div>
              <div className="inst-role">{inst.role}</div>
              <p className="inst-bio">{inst.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <header className="section-head" style={{ marginBottom: '40px' }}>
          <h2>Pertanyaan <em>Umum</em></h2>
          <p>Hal-hal yang sering ditanyakan calon murid dan orang tua.</p>
        </header>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <motion.details 
              key={i} 
              className="faq-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <summary className="faq-q">{faq.q}</summary>
              <div className="faq-a">{faq.a}</div>
            </motion.details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="cta-inner">
          <h2>Siap Memulai<br /><em>Perjalananmu?</em></h2>
          <p>Daftar sesi trial gratis untuk merasakan kelas kami secara langsung — tanpa biaya, tanpa komitmen.</p>
          <Link href="/kontak?topic=artschool&trial=1" className="btn-gold">
            Daftar Trial Gratis
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .art-school-page { background: var(--dark); }
        .page-hero { position: relative; height: 50vh; min-height: 400px; display: flex; align-items: center; padding: 0 50px; overflow: hidden; }
        .ph-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #1a1410 0%, #070707 100%); }
        .ph-grain { position: absolute; inset: 0; z-index: 1; opacity: 0.04; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .ph-vig { position: absolute; inset: 0; z-index: 2; background: linear-gradient(to bottom, rgba(7,7,7,0.4) 0%, transparent 40%, rgba(7,7,7,0.9) 100%); }
        .ph-content { position: relative; z-index: 10; max-width: 650px; }
        .eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .eyebrow .dash { width: 32px; height: 1px; background: var(--gold); }
        .eyebrow span { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); }
        .ph-content h1 { font-family: var(--font-serif); font-size: clamp(48px, 6vw, 84px); font-weight: 900; line-height: 1; color: #fff; letter-spacing: -0.02em; margin-bottom: 24px; }
        .ph-content em { font-family: var(--font-serif); font-style: italic; color: var(--gold); font-weight: 700; }
        .ph-content p { font-size: 15px; color: var(--text-mute); max-width: 480px; line-height: 1.7; }

        .programs { padding: 100px 50px 60px; max-width: 1300px; margin: 0 auto; }
        .section-head { max-width: 660px; margin-bottom: 56px; }
        .section-head h2 { font-family: var(--font-serif); font-size: clamp(32px, 4vw, 50px); font-weight: 900; letter-spacing: -0.025em; line-height: 1.05; margin-bottom: 20px; color: #fff; }
        .section-head h2 em { font-style: italic; color: var(--gold); }
        .section-head p { font-size: 13.5px; line-height: 1.75; color: var(--text-mute); }

        .programs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        .prog-card { position: relative; padding: 34px 30px 32px; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 22px; background: var(--surface-2); display: flex; flex-direction: column; overflow: hidden; }
        .prog-card.featured { background: linear-gradient(180deg, rgba(200, 169, 110, 0.08) 0%, var(--surface-2) 60%); border-color: var(--gold-dim); }
        .prog-badge { position: absolute; top: 18px; right: 18px; padding: 5px 12px; border-radius: 100px; background: var(--gold); color: #070707; font-size: 8.5px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }
        .prog-num { font-family: var(--font-serif); font-size: 50px; font-weight: 900; color: rgba(200, 169, 110, 0.18); line-height: 1; letter-spacing: -0.04em; margin-bottom: 24px; }
        .prog-title { font-family: var(--font-serif); font-size: 26px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 8px; color: #fff; }
        .prog-sub { font-size: 9.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); margin-bottom: 18px; }
        .prog-desc { font-size: 13px; line-height: 1.7; color: var(--text-mute); margin-bottom: 22px; flex: 1; }
        .prog-list { list-style: none; padding: 0; margin: 0 0 22px; display: flex; flex-direction: column; gap: 10px; }
        .prog-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 12.5px; line-height: 1.55; color: var(--text); }
        .prog-list li::before { content: ""; width: 5px; height: 5px; background: var(--gold); border-radius: 50%; margin-top: 7px; flex-shrink: 0; }
        .prog-foot { padding-top: 22px; border-top: 1px solid rgba(255, 255, 255, 0.06); display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; }
        .prog-price { font-family: var(--font-serif); font-size: 22px; font-weight: 700; color: var(--text); line-height: 1; }
        .prog-price .cur { font-size: 12px; font-weight: 500; color: var(--text-mute); }
        .prog-price-unit { font-size: 10px; color: var(--text-soft); margin-top: 4px; font-weight: 500; letter-spacing: 0.04em; }
        .prog-cta { display: inline-flex; align-items: center; gap: 6px; font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); text-decoration: none; padding: 10px 16px; border: 1px solid var(--gold-dim); border-radius: 100px; transition: background 0.3s; }
        .prog-cta:hover { background: var(--gold); color: #070707; border-color: var(--gold); }

        .curriculum { padding: 80px 50px; max-width: 1300px; margin: 0 auto; }
        .curr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .curr-side h2 { font-family: var(--font-serif); font-size: clamp(28px, 3vw, 42px); font-weight: 900; letter-spacing: -0.02em; line-height: 1.05; margin-bottom: 18px; color: #fff; }
        .curr-side h2 em { font-style: italic; color: var(--gold); }
        .curr-side p { font-size: 13.5px; line-height: 1.75; color: var(--text-mute); margin-bottom: 26px; }
        .quote { font-size:11.5px; color:var(--text-soft); font-style:italic; }

        .curr-stages { display: flex; flex-direction: column; gap: 14px; }
        .stage { display: flex; gap: 22px; padding: 22px 24px; border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; background: var(--glass); backdrop-filter: blur(8px); transition: border-color 0.3s; }
        .stage:hover { border-color: var(--gold-dim); background: var(--gold-glow); }
        .stage-num { flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--gold-dim); display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 16px; font-weight: 700; color: var(--gold); }
        .stage-name { font-family: var(--font-serif); font-size: 18px; font-weight: 700; margin-bottom: 4px; color: #fff; }
        .stage-age { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
        .stage-desc { font-size: 12.5px; line-height: 1.65; color: var(--text-mute); }

        .instructors { padding: 80px 50px; max-width: 1300px; margin: 0 auto; }
        .inst-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .inst-card { padding: 28px 24px 26px; border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 18px; background: var(--surface-2); text-align: center; transition: border-color 0.3s, transform 0.3s; }
        .inst-card:hover { border-color: var(--gold-dim); transform: translateY(-4px); }
        .inst-photo { width: 90px; height: 90px; border-radius: 50%; border: 1px solid var(--gold-dim); margin: 0 auto 18px; display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 30px; font-weight: 700; color: var(--gold); background: var(--gold-glow); }
        .inst-name { font-family: var(--font-serif); font-size: 16px; font-weight: 700; margin-bottom: 4px; color: #fff; }
        .inst-role { font-size: 9.5px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
        .inst-bio { font-size: 11.5px; line-height: 1.6; color: var(--text-mute); }

        .faq-section { padding: 80px 50px 100px; max-width: 920px; margin: 0 auto; }
        .faq-list { display: flex; flex-direction: column; gap: 8px; margin-top: 36px; }
        .faq-item { border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; background: var(--glass); overflow: hidden; }
        .faq-q { padding: 20px 24px; font-size: 14px; font-weight: 600; color: var(--text); cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .faq-q::after { content: "+"; font-family: var(--font-serif); font-size: 22px; color: var(--gold); font-weight: 300; transition: transform 0.3s; }
        .faq-item[open] .faq-q::after { content: "−"; }
        .faq-a { padding: 0 24px 22px; font-size: 13px; line-height: 1.75; color: var(--text-mute); }

        .cta-strip { padding: 120px 50px; text-align: center; background: var(--dark); border-top: 1px solid rgba(255, 255, 255, 0.06); }
        .btn-gold { display: inline-flex; align-items: center; gap: 12px; padding: 16px 36px; background: var(--gold); color: #070707; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; border-radius: 100px; transition: transform 0.3s, box-shadow 0.3s; }
        .btn-gold:hover { transform: translateY(-3px); box-shadow: 0 10px 40px var(--gold-glow); }

        @media (max-width: 1100px) {
          .programs, .curriculum, .instructors, .faq-section { padding-left: 32px; padding-right: 32px; }
          .inst-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .programs-grid { grid-template-columns: 1fr; }
          .curr-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 768px) {
          .programs, .curriculum, .instructors, .faq-section { padding-left: 24px; padding-right: 24px; }
          .inst-grid { grid-template-columns: 1fr; gap: 20px; }
          .page-hero { padding: 0 24px; height: 50vh; }
          .stage { padding: 18px; gap: 16px; }
          .stage-name { font-size: 16px; }
          .prog-card { padding: 28px 24px; }
          .prog-title { font-size: 22px; }
        }
      `}</style>
    </main>
  );
}
