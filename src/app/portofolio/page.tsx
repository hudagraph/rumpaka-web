"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import "./portofolio.css";

interface Event {
  id: string;
  year: string;
  title: string;
  description: string;
  image_url: string | null;
  tari_title: string;
  tari_list: string;
  is_highlight: boolean;
  display_order: number;
}

export default function PortofolioPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
            <span>Portofolio</span>
          </div>
          <h1 id="page-hero-title">Rekam<br /><em>Jejak</em></h1>
          <p>Telah dipercaya sebagai representasi budaya Indonesia dalam berbagai platform seni dan diplomasi budaya, di tingkat nasional hingga internasional.</p>
        </div>
      </section>

      <div className="porto-wrap">
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--gold)' }}>Memuat portofolio...</div>
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
                    <h3>{hl.title}</h3>
                    <p>{hl.description}</p>
                    <div className="hl-tari">
                      <div className="hl-tari-tit">{hl.tari_title}</div>
                      <div className="hl-tari-list">{hl.tari_list}</div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* TIMELINE */}
            <section className="timeline-sec">
              <h2 className="sec-tit">Rekam <span>Sejarah</span></h2>
              
              {timeline.map((item) => (
                <div key={item.id} className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-yr">{item.year}</div>
                  <div className="tl-desc">{item.description}</div>
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
