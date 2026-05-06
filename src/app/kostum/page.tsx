'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const KOSTUM_DATA = [
  {
    id: "merak",
    name: "Tari Merak",
    cat: "klasik",
    catLabel: "Tari Klasik",
    status: "both",
    desc: "Kostum ikonik Tari Merak ciptaan Raden Tjetje Somantri — payet kerlap-kerlip dan sayap merak yang dramatis.",
    fullDesc: "Kostum Tari Merak dengan detail bordir tangan, payet emas, dan sayap merak terbentang. Cocok untuk pertunjukan klasik, festival, dan dokumentasi budaya.",
    bahan: "Beludru, Sutra, Payet",
    ukuran: "S, M, L, XL",
    aksesoris: "Mahkota, Gelang, Sayap",
    stok: "12 pasang",
    sewa: "350.000",
    beli: "4.500.000",
    accent: "#5080d0",
    motif: "merak",
    img: "/assets/img/hero-1.png",
  },
  {
    id: "jaipong",
    name: "Tari Jaipong",
    cat: "kreasi",
    catLabel: "Tari Kreasi",
    status: "both",
    desc: "Kostum Jaipong klasik dengan kebaya bordir, sinjang motif Sunda, dan apok berhias.",
    fullDesc: "Kostum Tari Jaipong dengan kebaya brokat, sinjang batik, apok dengan payet, dan selendang. Warna dapat disesuaikan dengan tema acara.",
    bahan: "Brokat, Batik Tulis",
    ukuran: "S, M, L",
    aksesoris: "Selendang, Sanggul",
    stok: "20 pasang",
    sewa: "275.000",
    beli: "3.200.000",
    accent: "#c47b3a",
    motif: "kebaya",
    img: "/assets/img/kostum-2.png",
  },
  {
    id: "topeng",
    name: "Tari Topeng Sunda",
    cat: "klasik",
    catLabel: "Tari Klasik",
    status: "sewa",
    desc: "Kostum tari topeng dengan jubah panjang, ikat kepala kain, dan topeng kayu autentik.",
    fullDesc: "Kostum Tari Topeng Sunda lengkap dengan topeng kayu Cirebonan asli. Pilihan karakter: Panji, Samba, Rumyang, Tumenggung, dan Klana.",
    bahan: "Sutra, Kayu",
    ukuran: "M, L, XL",
    aksesoris: "Topeng (5 karakter)",
    stok: "8 pasang",
    sewa: "300.000",
    beli: "—",
    accent: "#7a4a20",
    motif: "topeng",
    img: "/assets/img/svc-2.png",
  },
  {
    id: "ronggeng",
    name: "Tari Ronggeng Bugis",
    cat: "kreasi",
    catLabel: "Tari Kreasi",
    status: "sewa",
    desc: "Kostum Ronggeng dengan sinjang lurik, kebaya kutubaru, dan ikat pinggang lebar.",
    fullDesc: "Kostum Tari Ronggeng dengan kebaya kutubaru bordir, sinjang lurik, dan ikat pinggang berhias. Sangat cocok untuk panggung kontemporer.",
    bahan: "Lurik, Brokat",
    ukuran: "S, M, L",
    aksesoris: "Selendang, Bunga Sanggul",
    stok: "15 pasang",
    sewa: "225.000",
    beli: "—",
    accent: "#a04050",
    motif: "kebaya",
    img: "/assets/img/kostum-2.png",
  },
  {
    id: "kembang",
    name: "Tari Kembang Tanjung",
    cat: "anak",
    catLabel: "Tari Anak",
    status: "both",
    desc: "Kostum tari anak dengan warna lembut dan motif bunga — nyaman untuk gerakan aktif.",
    fullDesc: "Kostum Tari Anak Kembang Tanjung — desain ringan dan nyaman untuk anak usia 5–12 tahun. Warna pastel, motif bunga, dan aksesoris yang aman untuk anak.",
    bahan: "Sutra Sintetis",
    ukuran: "Anak 5–12 thn",
    aksesoris: "Bunga rambut",
    stok: "30 pasang",
    sewa: "150.000",
    beli: "1.200.000",
    accent: "#d090c0",
    motif: "kebaya",
    img: "/assets/img/hero-3.png",
  },
  {
    id: "ketuk",
    name: "Tari Ketuk Tilu",
    cat: "kreasi",
    catLabel: "Tari Kreasi",
    status: "sewa",
    desc: "Kostum tari rakyat Sunda dengan kain panjang dan kebaya sederhana namun anggun.",
    fullDesc: "Kostum Tari Ketuk Tilu klasik — kebaya bordir sederhana, sinjang batik, dan selendang panjang. Cocok untuk acara budaya dan festival rakyat.",
    bahan: "Katun, Batik",
    ukuran: "S, M, L",
    aksesoris: "Selendang",
    stok: "18 pasang",
    sewa: "200.000",
    beli: "—",
    accent: "#8a6020",
    motif: "kebaya",
    img: "/assets/img/svc-1.png",
  },
  {
    id: "siger",
    name: "Pengantin Sunda Siger",
    cat: "adat",
    catLabel: "Upacara Adat",
    status: "both",
    desc: "Busana pengantin Sunda Siger dengan mahkota tinggi dan kebaya emas.",
    fullDesc: "Busana pengantin adat Sunda Siger lengkap — mahkota Siger, kebaya brokat emas, sinjang dodot, dan aksesoris sirkam. Untuk pernikahan adat dan dokumentasi.",
    bahan: "Beludru Emas, Brokat",
    ukuran: "Custom Fit",
    aksesoris: "Mahkota Siger, Sirkam",
    stok: "6 set",
    sewa: "1.500.000",
    beli: "12.000.000",
    accent: "#c8a96e",
    motif: "siger",
    img: "/assets/img/kostum-1.png",
  },
  {
    id: "wayang",
    name: "Wayang Orang Sunda",
    cat: "klasik",
    catLabel: "Tari Klasik",
    status: "sewa",
    desc: "Kostum wayang orang dengan ornamen mahkota, jubah berbordir, dan aksesoris emas.",
    fullDesc: "Kostum Wayang Orang Sunda — pilihan karakter Arjuna, Bima, Srikandi, Drupadi. Termasuk mahkota, jubah, dan aksesoris kostum lengkap.",
    bahan: "Beludru, Logam",
    ukuran: "M, L, XL",
    aksesoris: "Mahkota, Senjata",
    stok: "4 set",
    sewa: "550.000",
    beli: "—",
    accent: "#a07840",
    motif: "wayang",
    img: "/assets/img/kostum-3.png",
  },
];

const FILTERS = [
  { id: 'all', label: 'Semua' },
  { id: 'klasik', label: 'Tari Klasik' },
  { id: 'kreasi', label: 'Tari Kreasi' },
  { id: 'anak', label: 'Tari Anak' },
  { id: 'adat', label: 'Upacara Adat' },
];

export default function Kostum() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<typeof KOSTUM_DATA[0] | null>(null);

  const filtered = useMemo(() => {
    return filter === 'all' ? KOSTUM_DATA : KOSTUM_DATA.filter(item => item.cat === filter);
  }, [filter]);

  return (
    <main className="kostum-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="ph-bg" />
        <div className="ph-grain" />
        <div className="ph-vig" />
        <div className="ph-content">
          <div className="eyebrow">
            <span className="dash" />
            <span>Arum Kostum</span>
          </div>
          <h1>Busana<br /><em>Adat Sunda</em></h1>
          <p>Koleksi kostum tari handmade premium — tersedia untuk sewa maupun pembelian. Setiap potong dibuat oleh pengrajin berpengalaman lebih dari satu dekade.</p>
        </div>
      </section>

      {/* CATALOG */}
      <section className="catalog-wrap">
        <div className="catalog-head">
          <div>
            <h2>Katalog Koleksi</h2>
            <p>Pilih kategori untuk melihat koleksi spesifik. Klik kartu untuk detail lengkap dan ketersediaan.</p>
          </div>
          <Link href="/kontak?topic=kostum" className="link-arrow">
            Konsultasi Sewa / Beli
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* FILTERS */}
        <div className="filters">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={`filter-btn ${filter === f.id ? 'act' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              {f.id === 'all' && <span className="filter-count">{KOSTUM_DATA.length}</span>}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div layout className="kostum-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map(item => (
              <motion.button
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="kostum-card"
                onClick={() => setSelected(item)}
              >
                <div 
                  className="kostum-img img-ph" 
                  style={{ backgroundImage: `url("${item.img}")` }}
                >
                  <span className="kostum-tag">{item.catLabel}</span>
                  <span className={`kostum-status ${item.status}`}>
                    {item.status === 'both' ? 'Sewa & Beli' : item.status === 'sewa' ? 'Sewa' : 'Beli'}
                  </span>
                </div>
                <div className="kostum-body">
                  <div className="kostum-cat">{item.catLabel}</div>
                  <h3 className="kostum-name">{item.name}</h3>
                  <p className="kostum-desc">{item.desc}</p>
                  <div className="kostum-prices">
                    <div className="price">
                      <div className="price-lbl">Sewa</div>
                      <div className="price-val"><span className="cur">Rp</span>{item.sewa}</div>
                    </div>
                    <div className="price">
                      <div className="price-lbl">Beli</div>
                      <div className="price-val">{item.beli === '—' ? <span className="price-empty">—</span> : <><span className="cur">Rp</span>{item.beli}</>}</div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="cta-inner">
          <h2>Tertarik dengan<br /><em>Koleksi Kami?</em></h2>
          <p>Hubungi tim Arum Kostum untuk konsultasi ukuran, ketersediaan tanggal, dan custom order.</p>
          <Link href="/kontak?topic=kostum" className="btn-gold">
            Konsultasi Kostum
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <div className="modal-overlay open">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="modal-backdrop"
               onClick={() => setSelected(null)}
             />
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               className="modal"
             >
                <button className="modal-close" onClick={() => setSelected(null)}>
                  <X size={18} />
                </button>
                <div 
                  className="modal-img img-ph" 
                  style={{ backgroundImage: `url("${selected.img}")` }}
                />
                <div className="modal-body">
                  <div className="modal-cat">{selected.catLabel}</div>
                  <h3 className="modal-name">{selected.name}</h3>
                  <p className="modal-desc">{selected.fullDesc}</p>
                  
                  <div className="modal-meta">
                    <div><strong>Bahan</strong>{selected.bahan}</div>
                    <div><strong>Ukuran</strong>{selected.ukuran}</div>
                    <div><strong>Aksesoris</strong>{selected.aksesoris}</div>
                    <div><strong>Stok</strong>{selected.stok}</div>
                  </div>

                  <div className="modal-prices">
                    <div className="price">
                      <div className="price-lbl">Harga Sewa</div>
                      <div className="price-val"><span className="cur">Rp</span>{selected.sewa}</div>
                    </div>
                    <div className="price">
                      <div className="price-lbl">Harga Beli</div>
                      <div className="price-val">{selected.beli === '—' ? <span className="price-empty">—</span> : <><span className="cur">Rp</span>{selected.beli}</>}</div>
                    </div>
                  </div>

                  <div className="modal-actions">
                    <a href={`https://wa.me/628XXXXXXXXX?text=Halo%20Arum%20Kostum,%20saya%20ingin%20bertanya%20tentang%20kostum%20${selected.name}`} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                      Tanya via WhatsApp
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .kostum-page { background: var(--dark); min-height: 100vh; }
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

        .catalog-wrap { padding: 80px 50px 100px; max-width: 1300px; margin: 0 auto; }
        .catalog-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; margin-bottom: 40px; flex-wrap: wrap; }
        .catalog-head h2 { font-family: var(--font-serif); font-size: clamp(28px, 3vw, 42px); font-weight: 900; letter-spacing: -0.02em; line-height: 1; margin-bottom: 10px; color: #fff; }
        .catalog-head p { font-size: 13px; color: var(--text-mute); max-width: 460px; line-height: 1.7; }
        .link-arrow { display: flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.15em; }

        .filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 44px; }
        .filter-btn { padding: 10px 18px; border-radius: 100px; border: 1px solid rgba(255, 255, 255, 0.12); background: var(--glass); color: rgba(255, 255, 255, 0.65); font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; transition: all 0.3s; }
        .filter-btn:hover { border-color: var(--gold-dim); color: var(--gold); }
        .filter-btn.act { background: var(--gold); border-color: var(--gold); color: #070707; }
        .filter-count { margin-left: 8px; font-size: 9.5px; opacity: 0.7; }

        .kostum-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .kostum-card { position: relative; border-radius: 20px; overflow: hidden; background: var(--surface-2); border: 1px solid rgba(255, 255, 255, 0.06); transition: border-color 0.3s, box-shadow 0.4s; display: flex; flex-direction: column; text-align: left; }
        .kostum-card:hover { border-color: var(--gold-dim); box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5); }
        .kostum-img { position: relative; aspect-ratio: 4 / 5; overflow: hidden; background-size: cover; background-position: center; transition: transform 0.6s ease; }
        .kostum-card:hover .kostum-img { transform: scale(1.03); }
        .kostum-tag { position: absolute; top: 14px; left: 14px; padding: 5px 12px; border-radius: 100px; background: rgba(7, 7, 7, 0.65); backdrop-filter: blur(8px); border: 1px solid var(--gold-dim); font-size: 8.5px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); z-index: 2; }
        .kostum-status { position: absolute; top: 14px; right: 14px; padding: 5px 12px; border-radius: 100px; background: rgba(7, 7, 7, 0.65); backdrop-filter: blur(8px); font-size: 8.5px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; z-index: 2; }
        .kostum-status.sewa { color: #7ab050; border: 1px solid rgba(122, 176, 80, 0.4); }
        .kostum-status.beli { color: #c89e40; border: 1px solid rgba(200, 158, 64, 0.4); }
        .kostum-status.both { color: var(--gold); border: 1px solid var(--gold-dim); }
        .kostum-body { padding: 22px 24px 26px; flex: 1; display: flex; flex-direction: column; }
        .kostum-name { font-family: var(--font-serif); font-size: 22px; font-weight: 700; letter-spacing: -0.015em; line-height: 1.15; margin-bottom: 6px; color: #fff; }
        .kostum-cat { font-size: 9.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px; }
        .kostum-desc { font-size: 12.5px; line-height: 1.65; color: var(--text-mute); margin-bottom: 18px; flex: 1; }
        .kostum-prices { display: flex; gap: 14px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.06); margin-top: auto; }
        .price { flex: 1; }
        .price-lbl { font-size: 8.5px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-soft); margin-bottom: 4px; }
        .price-val { font-family: var(--font-serif); font-size: 17px; font-weight: 700; color: var(--text); letter-spacing: -0.01em; }
        .price-val .cur { font-size: 11px; font-weight: 500; color: var(--text-mute); margin-right: 2px; }
        .price-empty { font-size: 12px; color: var(--text-soft); font-style: italic; }

        .cta-strip { padding: 120px 50px; text-align: center; background: var(--dark); border-top: 1px solid rgba(255, 255, 255, 0.06); }
        .cta-inner h2 { font-family: var(--font-serif); font-size: clamp(38px, 4.5vw, 64px); font-weight: 900; line-height: 1.1; color: #fff; margin-bottom: 24px; }
        .cta-inner h2 em { color: var(--gold); font-style: italic; }
        .cta-inner p { font-size: 15px; color: var(--text-mute); margin-bottom: 40px; }
        .btn-gold { display: inline-flex; align-items: center; gap: 12px; padding: 16px 36px; background: var(--gold); color: #070707; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; border-radius: 100px; transition: transform 0.3s, box-shadow 0.3s; }
        .btn-gold:hover { transform: translateY(-3px); box-shadow: 0 10px 40px var(--gold-glow); }

        .modal-overlay { position: fixed; inset: 0; z-index: 200; display: flex; align-items: center; justify-content: center; padding: 30px; }
        .modal-backdrop { position: absolute; inset: 0; background: rgba(7, 7, 7, 0.85); backdrop-filter: blur(12px); }
        .modal { position: relative; background: var(--surface); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; max-width: 880px; width: 100%; max-height: 90vh; overflow-y: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 0; box-shadow: 0 50px 100px rgba(0,0,0,0.6); }
        .modal-img { position: relative; aspect-ratio: 4 / 5; background-size: cover; background-position: center; overflow: hidden; }
        .modal-body { padding: 36px 36px 36px 30px; display: flex; flex-direction: column; }
        .modal-close { position: absolute; top: 16px; right: 16px; width: 36px; height: 36px; border-radius: 50%; background: rgba(7, 7, 7, 0.7); border: 1px solid rgba(255, 255, 255, 0.15); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 3; color: #fff; }
        .modal-cat { font-size: 9.5px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
        .modal-name { font-family: var(--font-serif); font-size: 30px; font-weight: 900; letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 14px; color: #fff; }
        .modal-desc { font-size: 13px; line-height: 1.75; color: var(--text-mute); margin-bottom: 22px; }
        .modal-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 22px; padding: 16px 18px; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; background: var(--glass); }
        .modal-meta div { font-size: 11.5px; line-height: 1.6; }
        .modal-meta strong { display: block; color: var(--gold); font-size: 8.5px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 3px; }
        .modal-prices { display: flex; gap: 18px; padding: 16px 0; border-top: 1px solid rgba(255, 255, 255, 0.06); border-bottom: 1px solid rgba(255, 255, 255, 0.06); margin-bottom: 22px; }
        .modal-prices .price-val { font-size: 22px; }

        @media (max-width: 1100px) {
          .catalog-wrap { padding: 60px 32px 80px; }
          .kostum-grid { gap: 24px; }
        }
        @media (max-width: 900px) {
          .kostum-grid { grid-template-columns: repeat(2, 1fr); }
          .modal { grid-template-columns: 1fr; max-width: 520px; }
          .modal-img { aspect-ratio: 5 / 4; }
          .modal-body { padding: 30px 28px; }
        }
        @media (max-width: 768px) {
          .page-hero { padding: 0 24px; height: 45vh; }
          .catalog-wrap { padding: 40px 24px 60px; }
          .filter-btn { padding: 8px 14px; font-size: 9px; letter-spacing: 0.1em; }
          .kostum-grid { gap: 20px; }
          .kostum-name { font-size: 20px; }
        }
        @media (max-width: 540px) {
          .kostum-grid { grid-template-columns: 1fr; gap: 24px; }
          .modal { border-radius: 0; max-height: 100vh; }
          .modal-body { padding: 24px 20px; }
          .modal-name { font-size: 26px; }
        }
      `}</style>
    </main>
  );
}
