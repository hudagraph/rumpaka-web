"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import "./galeri.css";

interface GalleryItem {
  id: string;
  title: string | null;
  image_url: string;
  aspect_ratio: string;
}

export default function GaleriPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setItems(data);
      }
      setIsLoading(false);
    }
    fetchGallery();
  }, []);

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
            <span>Galeri Karya</span>
          </div>
          <h1 id="page-hero-title">Momen &<br /><em>Aktivitas</em></h1>
          <p>Koleksi visual persembahan karya seni tari tradisional dan kontemporer dari Sanggar Seni Annisa Rumpaka.</p>
        </div>
      </section>

      <div className="gal-wrap">
        <h2 className="sec-tit">Karya <span>Nusantara</span></h2>
        <p className="sec-desc">Beberapa cuplikan penampilan penari kami di atas panggung.</p>
        
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--gold)' }}>Memuat galeri...</div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-mute)' }}>Belum ada foto di galeri.</div>
        ) : (
          <div className="masonry">
            {items.map((img) => (
              <div 
                key={img.id} 
                className="masonry-item" 
                tabIndex={0}
                onClick={() => setSelectedImg(img.image_url)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImg(img.image_url);
                  }
                }}
              >
                <img src={img.image_url} alt={img.title || "Galeri Rumpaka"} loading="lazy" style={{ aspectRatio: img.aspect_ratio }} />
                <div className="masonry-overlay">
                  <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div 
        className={`lightbox ${selectedImg ? "show" : ""}`} 
        role="dialog" 
        aria-hidden={!selectedImg}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedImg(null);
        }}
      >
        <button 
          className="lb-close" 
          onClick={() => setSelectedImg(null)} 
          aria-label="Tutup galeri"
        >
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        {selectedImg && <img src={selectedImg} alt="Gambar Galeri Membesar" />}
      </div>

      <Footer />
    </main>
  );
}
