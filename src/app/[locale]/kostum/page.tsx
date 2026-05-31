"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import { supabase } from "@/lib/supabase";
import { useLocale } from "next-intl";
import "./kostum.css";

interface Kostum {
  id: string;
  slug: string;
  name: string;
  name_en: string | null;
  category: string;
  category_label: string;
  category_label_en: string | null;
  status: string;
  description: string;
  description_en: string | null;
  full_description: string;
  full_description_en: string | null;
  bahan: string;
  ukuran: string;
  aksesoris: string;
  stok: string;
  harga_sewa: string;
  harga_beli: string;
  accent_color: string;
  motif_type: string;
  image_url: string | null;
}

const MOTIFS: Record<string, (c: string) => React.ReactNode> = {
  merak: (c) => (
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <g stroke={c} fill="none" strokeWidth="1" opacity="0.9">
        <path d="M100 120 Q40 60 30 30 M100 120 Q60 50 50 20 M100 120 Q80 40 80 10 M100 120 Q100 40 100 5 M100 120 Q120 40 120 10 M100 120 Q140 50 150 20 M100 120 Q160 60 170 30"/>
        <circle cx="35" cy="35" r="4" fill={c} fillOpacity="0.4"/>
        <circle cx="55" cy="22" r="4" fill={c} fillOpacity="0.4"/>
        <circle cx="80" cy="14" r="4" fill={c} fillOpacity="0.4"/>
        <circle cx="100" cy="10" r="4" fill={c} fillOpacity="0.4"/>
        <circle cx="120" cy="14" r="4" fill={c} fillOpacity="0.4"/>
        <circle cx="145" cy="22" r="4" fill={c} fillOpacity="0.4"/>
        <circle cx="165" cy="35" r="4" fill={c} fillOpacity="0.4"/>
        <ellipse cx="100" cy="160" rx="22" ry="44" fill={c} fillOpacity="0.15"/>
        <circle cx="100" cy="118" r="10" fill={c} fillOpacity="0.3"/>
      </g>
    </svg>
  ),
  kebaya: (c) => (
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <g stroke={c} fill="none" strokeWidth="1" opacity="0.85">
        <circle cx="100" cy="40" r="16"/>
        <path d="M70 70 L60 130 L75 200 L125 200 L140 130 L130 70 Q100 60 70 70 Z" fill={c} fillOpacity="0.12"/>
        <path d="M85 70 L100 110 L115 70"/>
        <line x1="72" y1="135" x2="128" y2="135"/>
        <circle cx="85" cy="155" r="2" fill={c}/>
        <circle cx="100" cy="170" r="2" fill={c}/>
        <circle cx="115" cy="155" r="2" fill={c}/>
        <circle cx="92" cy="180" r="2" fill={c}/>
        <circle cx="108" cy="180" r="2" fill={c}/>
        <line x1="70" y1="80" x2="50" y2="140"/>
        <line x1="130" y1="80" x2="150" y2="140"/>
      </g>
    </svg>
  ),
  topeng: (c) => (
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <g stroke={c} fill="none" strokeWidth="1.2" opacity="0.85">
        <ellipse cx="100" cy="100" rx="48" ry="60" fill={c} fillOpacity="0.15"/>
        <ellipse cx="82" cy="92" rx="6" ry="3" fill={c} fillOpacity="0.6"/>
        <ellipse cx="118" cy="92" rx="6" ry="3" fill={c} fillOpacity="0.6"/>
        <path d="M85 130 Q100 138 115 130"/>
        <path d="M58 56 L70 30 L85 50 L100 24 L115 50 L130 30 L142 56"/>
        <path d="M70 165 L55 230 M130 165 L145 230 M85 168 L92 230 M115 168 L108 230"/>
      </g>
    </svg>
  ),
  siger: (c) => (
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <g stroke={c} fill="none" strokeWidth="1" opacity="0.85">
        <path d="M70 50 L80 10 L90 35 L100 5 L110 35 L120 10 L130 50 Z" fill={c} fillOpacity="0.2"/>
        <line x1="70" y1="50" x2="130" y2="50"/>
        <circle cx="100" cy="75" r="14"/>
        <path d="M70 95 L55 200 L80 220 L120 220 L145 200 L130 95 Q100 88 70 95 Z" fill={c} fillOpacity="0.1"/>
        <circle cx="100" cy="130" r="4" fill={c}/>
        <circle cx="100" cy="155" r="3" fill={c}/>
        <circle cx="100" cy="180" r="2" fill={c}/>
        <line x1="55" y1="200" x2="145" y2="200"/>
      </g>
    </svg>
  ),
  wayang: (c) => (
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <g stroke={c} fill="none" strokeWidth="1" opacity="0.85">
        <path d="M75 45 L85 15 L100 35 L115 15 L125 45"/>
        <circle cx="100" cy="65" r="14"/>
        <line x1="70" y1="95" x2="35" y2="120"/>
        <line x1="130" y1="95" x2="165" y2="120"/>
        <path d="M75 85 L65 170 L85 220 L115 220 L135 170 L125 85 Z" fill={c} fillOpacity="0.1"/>
        <line x1="68" y1="135" x2="132" y2="135"/>
        <circle cx="100" cy="135" r="6" fill={c} fillOpacity="0.5"/>
      </g>
    </svg>
  ),
};

export default function KostumPage() {
  const [items, setItems] = useState<Kostum[]>([]);
  const [filter, setFilter] = useState("all");
  const [selectedKostum, setSelectedKostum] = useState<Kostum | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    async function fetchKostum() {
      const { data, error } = await supabase
        .from('kostum')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (!error && data) {
        setItems(data);
      }
      setIsLoading(false);
    }
    fetchKostum();
  }, []);

  useEffect(() => {
    if (selectedKostum) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedKostum]);

  const filteredItems = filter === "all" ? items : items.filter((k) => k.category === filter);

  const labels = {
    hero_cat: locale === 'en' ? 'Arum Costume' : 'Arum Kostum',
    hero_title: locale === 'en' ? <>Traditional<br /><em>Attire</em></> : <>Busana<br /><em>Adat Sunda</em></>,
    hero_desc: locale === 'en' ? 'Premium handmade traditional dance costume collection — available for rent or purchase. Each piece is crafted by artisans with over a decade of experience.' : 'Koleksi kostum tari handmade premium — tersedia untuk sewa maupun pembelian. Setiap potong dibuat oleh pengrajin berpengalaman lebih dari satu dekade.',
    cat_title: locale === 'en' ? 'Collection Catalog' : 'Katalog Koleksi',
    cat_desc: locale === 'en' ? 'Select a category to view specific collections. Click card for full details and availability.' : 'Pilih kategori untuk melihat koleksi spesifik. Klik kartu untuk detail lengkap dan ketersediaan.',
    cta_consult: locale === 'en' ? 'Rent / Buy Consultation' : 'Konsultasi Sewa / Beli',
    loading: locale === 'en' ? 'Loading catalog...' : 'Memuat katalog...',
    price_day: locale === 'en' ? 'Rent /day' : 'Sewa /hari',
    price_buy: locale === 'en' ? 'Purchase' : 'Harga Beli',
    na: locale === 'en' ? 'N/A' : 'Tidak tersedia',
    rent_only: locale === 'en' ? 'Rent only' : 'Sewa saja',
    interest_title: locale === 'en' ? <>Interested in<br /><em>Our Collection?</em></> : <>Tertarik dengan<br /><em>Koleksi Kami?</em></>,
    interest_desc: locale === 'en' ? 'Contact the Arum Costume team for size consultation, date availability, and custom orders.' : 'Hubungi tim Arum Kostum untuk konsultasi ukuran, ketersediaan tanggal, dan custom order.',
    interest_btn: locale === 'en' ? 'Costume Consultation' : 'Konsultasi Kostum',
    material: locale === 'en' ? 'Material' : 'Bahan',
    size: locale === 'en' ? 'Size' : 'Ukuran',
    accs: locale === 'en' ? 'Accessories' : 'Aksesoris',
    stock: locale === 'en' ? 'Stock' : 'Stok',
    wa_inquiry: locale === 'en' ? 'Inquire via WhatsApp' : 'Tanya via WhatsApp'
  };

  const categories = [
    { id: "all", label: locale === 'en' ? 'All' : 'Semua', count: items.length },
    { id: "klasik", label: locale === 'en' ? 'Classical' : 'Tari Klasik' },
    { id: "kreasi", label: locale === 'en' ? 'Contemporary' : 'Tari Kreasi' },
    { id: "anak", label: locale === 'en' ? 'Children' : 'Tari Anak' },
    { id: "adat", label: locale === 'en' ? 'Traditional' : 'Upacara Adat' },
  ];

  return (
    <main id="main">
      <Nav />
      
      <section className="page-hero" aria-labelledby="page-hero-title">
        <div className="ph-bg" aria-hidden="true"></div>
        <div className="ph-grain" aria-hidden="true"></div>
        <div className="ph-vig" aria-hidden="true"></div>
        <div className="ph-content">
          <div className="eyebrow">
            <span className="dash" aria-hidden="true"></span>
            <span>{labels.hero_cat}</span>
          </div>
          <h1 id="page-hero-title">{labels.hero_title}</h1>
          <p>{labels.hero_desc}</p>
        </div>
      </section>

      <section className="catalog-wrap" aria-labelledby="catalog-title">
        <div className="catalog-head">
          <div>
            <h2 id="catalog-title">{labels.cat_title}</h2>
            <p>{labels.cat_desc}</p>
          </div>
          <Link href="/kontak?topic=kostum" className="link-arrow">
            {labels.cta_consult}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="filters" role="tablist" aria-label="Filter kategori kostum">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? "act" : ""}`}
              onClick={() => setFilter(cat.id)}
              type="button"
              role="tab"
              aria-selected={filter === cat.id}
            >
              {cat.label} {cat.count ? <span className="filter-count">{cat.count}</span> : null}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--gold)' }}>{labels.loading}</div>
        ) : (
          <div className="kostum-grid">
            {filteredItems.map((k) => (
              <button 
                key={k.id}
                className="kostum-card" 
                type="button" 
                onClick={() => setSelectedKostum(k)}
                aria-label={`Lihat detail ${k.name}`}
              >
                <div className="kostum-img img-ph">
                  <span className="kostum-tag">{locale === 'en' ? (k.category_label_en || k.category_label) : k.category_label}</span>
                  <span className={`kostum-status ${k.status}`}>
                    {k.status === "both" 
                      ? (locale === 'en' ? 'Rent / Buy' : 'Sewa / Beli') 
                      : k.status === "sewa" 
                        ? (locale === 'en' ? 'Rent' : 'Sewa') 
                        : (locale === 'en' ? 'Buy' : 'Beli')}
                  </span>
                  <div className="kostum-art">
                    {k.image_url ? (
                      <img src={k.image_url} alt={k.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      (MOTIFS[k.motif_type] || MOTIFS.kebaya)(k.accent_color)
                    )}
                  </div>
                </div>
                <div className="kostum-body">
                  <div className="kostum-cat">{locale === 'en' ? (k.category_label_en || k.category_label) : k.category_label}</div>
                  <h3 className="kostum-name">{locale === 'en' ? (k.name_en || k.name) : k.name}</h3>
                  <p className="kostum-desc">{locale === 'en' ? (k.description_en || k.description) : k.description}</p>
                  <div className="kostum-prices">
                    <div className="price">
                      <div className="price-lbl">{labels.price_day}</div>
                      {k.harga_sewa && k.harga_sewa !== "—" ? (
                        <div className="price-val"><span className="cur">Rp</span>{k.harga_sewa}<span style={{ fontSize: "9px", color: "var(--text-mute)", fontWeight: 500 }}> {locale === 'en' ? '/day' : '/hari'}</span></div>
                      ) : (
                        <div className="price-empty">{labels.na}</div>
                      )}
                    </div>
                    <div className="price">
                      <div className="price-lbl">{labels.price_buy}</div>
                      {k.harga_beli && k.harga_beli !== "—" ? (
                        <div className="price-val"><span className="cur">Rp</span>{k.harga_beli}</div>
                      ) : (
                        <div className="price-empty">{labels.rent_only}</div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="cta-strip" id="cta">
        <div className="cta-inner">
          <h2>{labels.interest_title}</h2>
          <p>{labels.interest_desc}</p>
          <Link href="/kontak?topic=kostum" className="btn-gold">
            {labels.interest_btn}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      <div 
        className={`modal-overlay ${selectedKostum ? "open" : ""}`} 
        role="dialog" 
        aria-modal="true" 
        aria-hidden={!selectedKostum}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedKostum(null);
        }}
      >
        {selectedKostum && (
          <div className="modal">
            <button 
              className="modal-close" 
              type="button" 
              onClick={() => setSelectedKostum(null)}
              aria-label="Tutup detail"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="modal-img img-ph">
              <div className="kostum-art">
                {selectedKostum.image_url ? (
                  <img src={selectedKostum.image_url} alt={selectedKostum.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  (MOTIFS[selectedKostum.motif_type] || MOTIFS.kebaya)(selectedKostum.accent_color)
                )}
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-cat">{locale === 'en' ? (selectedKostum.category_label_en || selectedKostum.category_label) : selectedKostum.category_label}</div>
              <h3 className="modal-name">{locale === 'en' ? (selectedKostum.name_en || selectedKostum.name) : selectedKostum.name}</h3>
              <p className="modal-desc">{locale === 'en' ? (selectedKostum.full_description_en || selectedKostum.full_description) : selectedKostum.full_description}</p>
              <div className="modal-meta">
                <div>
                  <strong>{labels.material}</strong>
                  <span>{selectedKostum.bahan}</span>
                </div>
                <div>
                  <strong>{labels.size}</strong>
                  <span>{selectedKostum.ukuran}</span>
                </div>
                <div>
                  <strong>{labels.accs}</strong>
                  <span>{selectedKostum.aksesoris}</span>
                </div>
                <div>
                  <strong>{labels.stock}</strong>
                  <span>{selectedKostum.stok}</span>
                </div>
              </div>
              <div className="modal-prices">
                <div className="price">
                  <div className="price-lbl">{locale === 'en' ? 'Rent Price' : 'Harga Sewa'}</div>
                  <div className="price-val">
                    {selectedKostum.harga_sewa && selectedKostum.harga_sewa !== "—" ? (
                      <><span className="cur">Rp</span>{selectedKostum.harga_sewa}<span style={{ fontSize: "11px", color: "var(--text-mute)", fontWeight: 500 }}> {locale === 'en' ? ' /day' : ' /hari'}</span></>
                    ) : (
                      <span style={{ fontSize: "13px", color: "var(--text-soft)", fontStyle: "italic" }}>{labels.na}</span>
                    )}
                  </div>
                </div>
                <div className="price">
                  <div className="price-lbl">{locale === 'en' ? 'Purchase Price' : 'Harga Beli'}</div>
                  <div className="price-val">
                    {selectedKostum.harga_beli && selectedKostum.harga_beli !== "—" ? (
                      <><span className="cur">Rp</span>{selectedKostum.harga_beli}</>
                    ) : (
                      <span style={{ fontSize: "13px", color: "var(--text-soft)", fontStyle: "italic" }}>{labels.rent_only}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <a 
                  href={`https://wa.me/62895644961?text=${encodeURIComponent(`Halo, saya tertarik dengan kostum ${selectedKostum.name}. Mohon info ketersediaannya.`)}`}
                  className="btn-gold" 
                  style={{ width: "100%" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {labels.wa_inquiry}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
