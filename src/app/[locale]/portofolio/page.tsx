"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { useLocale } from "next-intl";
import "./portofolio.css";

interface Event {
  id: string;
  year: string;
  title: string;
  title_en: string | null;
  description: string;
  description_en: string | null;
  image_url: string | null;
  tari_title: string;
  tari_title_en: string | null;
  tari_list: string;
  tari_list_en: string | null;
  is_highlight: boolean;
  display_order: number;
}

export default function PortofolioPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('display_order', { ascending: true })
        .order('year', { ascending: false });
      
      if (!error && data) {
        setEvents(data);
      }
      setIsLoading(false);
    }
    fetchEvents();
  }, []);

  const highlights = events.filter(e => e.is_highlight);
  const timeline = events.filter(e => !e.is_highlight);

  // Helper to render text with newlines as <br>
  const renderRich = (text: string | null) => {
    if (!text) return null;
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <main id="main">
      <Nav />
      
      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="page-hero-title">
        <div className="ph-bg" aria-hidden="true"></div>
        <div className="ph-grain" aria-hidden="true"></div>
        <div className="ph-vig" aria-hidden="true"></div>
        <div className="ph-content">
          <div className="eyebrow">
            <span className="dash" aria-hidden="true"></span>
            <span>{locale === 'en' ? 'Portfolio' : 'Portofolio'}</span>
          </div>
          <h1 id="page-hero-title">
            {locale === 'en' ? <>Track<br /><em>Record</em></> : <>Rekam<br /><em>Jejak</em></>}
          </h1>
          <p>
            {locale === 'en' 
              ? 'Widely trusted as a representation of Indonesian culture across various arts and cultural diplomacy platforms, both nationally and internationally.'
              : 'Telah dipercaya sebagai representasi budaya Indonesia dalam berbagai platform seni dan diplomasi budaya, di tingkat nasional hingga internasional.'}
          </p>
        </div>
      </section>

      <div className="porto-wrap">
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--gold)' }}>{locale === 'en' ? 'Loading portfolio...' : 'Memuat portofolio...'}</div>
        ) : (
          <>
            {/* HIGHLIGHTS */}
            <section className="highlight-sec">
              <h2 className="sec-tit">Highlight <span>Event</span></h2>
              
              {highlights.map((hl, i) => (
                <div key={hl.id} className={`hl-item ${i % 2 !== 0 ? "rev" : ""}`}>
                  <div className="hl-img">
                    <img src={hl.image_url || "/assets/img/seni-panggung.png"} alt={hl.title} loading="lazy" />
                  </div>
                  <div className="hl-txt">
                    <div className="hl-yr">{hl.year}</div>
                    <h3>{locale === 'en' ? (hl.title_en || hl.title) : hl.title}</h3>
                    <p>{renderRich(locale === 'en' ? (hl.description_en || hl.description) : hl.description)}</p>
                    <div className="hl-tari">
                      <div className="hl-tari-tit">{locale === 'en' ? (hl.tari_title_en || hl.tari_title) : hl.tari_title}</div>
                      <div className="hl-tari-list">{renderRich(locale === 'en' ? (hl.tari_list_en || hl.tari_list) : hl.tari_list)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* TIMELINE */}
            <section className="timeline-sec">
              <h2 className="sec-tit">{locale === 'en' ? <>History <span>Milestones</span></> : <>Rekam <span>Sejarah</span></>}</h2>
              
              {timeline.map((item) => (
                <div key={item.id} className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-yr">{item.year}</div>
                  <div className="tl-desc">{renderRich(locale === 'en' ? (item.description_en || item.description) : item.description)}</div>
                </div>
              ))}
            </section>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
