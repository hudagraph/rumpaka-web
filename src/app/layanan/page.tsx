import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import "./layanan.css";

export const metadata: Metadata = {
  title: "Layanan — PT Sanggar Seni Annisa Rumpaka",
  description: "Layanan Annisa Rumpaka: pertunjukan seni panggung, sewa & beli kostum tari (Arum Kostum), program sekolah seni untuk anak & remaja (Arum Art School), dan kolaborasi event festival.",
};

export default function LayananPage() {
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
            <span>Layanan</span>
          </div>
          <h1 id="page-hero-title">Yang Kami<br /><em>Tawarkan</em></h1>
          <p>Dari pertunjukan panggung hingga pendidikan seni — kami hadir untuk melestarikan dan merayakan keindahan budaya Sunda.</p>
        </div>
      </section>

      {/* SERVICES */}
      <div className="svc-wrap">
        {/* 01 */}
        <article className="svc-item" id="seni-panggung">
          <div className="svc-img">
            <div className="svc-img-wrap" style={{ backgroundImage: "url('/assets/img/seni-panggung.png')", backgroundSize: "cover", backgroundPosition: "center" }} role="img" aria-label="Visual Seni Panggung">
              <span className="svc-num" aria-hidden="true">01</span>
            </div>
          </div>
          <div className="svc-body">
            <div className="svc-cat">Jasa Pertunjukan</div>
            <h2>Seni<br />Panggung</h2>
            <p>Persembahan tari tradisional dan kontemporer untuk cultural performance, opening acara resmi, hingga kolaborasi seni lintas budaya. Kami menghadirkan penari terlatih dengan tata panggung profesional berskala nasional dan internasional.</p>
            <div className="svc-tags">
              <span className="tag">Tari Tradisional</span>
              <span className="tag">Cultural Performance</span>
              <span className="tag">Opening Resmi</span>
              <span className="tag">Kolaborasi Seni</span>
              <span className="tag">Pertunjukan Tematik</span>
            </div>
            <Link href="/kontak" className="link-arrow">
              Konsultasi Gratis
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </article>

        {/* 02 */}
        <article className="svc-item rev" id="arum-kostum">
          <div className="svc-img">
            <div className="svc-img-wrap" style={{ backgroundImage: "url('/assets/img/busana-adat.png')", backgroundSize: "cover", backgroundPosition: "center" }} role="img" aria-label="Visual Arum Kostum">
              <span className="svc-num" aria-hidden="true">02</span>
            </div>
          </div>
          <div className="svc-body">
            <div className="svc-cat">Arum Kostum</div>
            <h2>Busana<br />Adat</h2>
            <p>Koleksi kostum tari tradisional premium dengan detail handmade yang dikerjakan oleh pengrajin berpengalaman. Tersedia untuk sewa maupun pembelian bagi keperluan panggung profesional, festival budaya, dan dokumentasi.</p>
            <div className="svc-tags">
              <span className="tag">Sewa Kostum</span>
              <span className="tag">Beli Kostum</span>
              <span className="tag">Tari Sunda</span>
              <span className="tag">Handmade</span>
              <span className="tag">Custom Order</span>
            </div>
            <Link href="/kostum" className="link-arrow">
              Lihat Koleksi
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </article>

        {/* 03 */}
        <article className="svc-item" id="art-school">
          <div className="svc-img">
            <div className="svc-img-wrap" style={{ backgroundImage: "url('/assets/img/art-school.png')", backgroundSize: "cover", backgroundPosition: "center" }} role="img" aria-label="Visual Arum Art School">
              <span className="svc-num" aria-hidden="true">03</span>
            </div>
          </div>
          <div className="svc-body">
            <div className="svc-cat">Arum Art School</div>
            <h2>Sekolah<br />Seni Tari</h2>
            <p>Program belajar tari untuk anak dan remaja dengan metode kreatif yang memadukan nilai tradisi Sunda dengan ekspresi seni kontemporer. Dibimbing langsung oleh penari senior berpengalaman lebih dari dua dekade.</p>
            <div className="svc-tags">
              <span className="tag">Anak 5–12 Tahun</span>
              <span className="tag">Remaja 13–18 Tahun</span>
              <span className="tag">Tari Dasar</span>
              <span className="tag">Tari Sunda Klasik</span>
              <span className="tag">Tari Kreasi</span>
            </div>
            <Link href="/art-school" className="link-arrow">
              Pelajari Program
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </article>

        {/* 04 */}
        <article className="svc-item rev" id="festival">
          <div className="svc-img">
            <div className="svc-img-wrap" style={{ backgroundImage: "url('/assets/img/festival.png')", backgroundSize: "cover", backgroundPosition: "center" }} role="img" aria-label="Visual Festival & Panggung">
              <span className="svc-num" aria-hidden="true">04</span>
            </div>
          </div>
          <div className="svc-body">
            <div className="svc-cat">Portofolio Event</div>
            <h2>Festival &<br />Panggung</h2>
            <p>Rekam jejak kami menghadirkan seni budaya di berbagai panggung bergengsi — dari festival nasional hingga panggung budaya internasional (Little Asia, Osaka Expo, Boulevard World Riyadh).</p>
            <div className="svc-tags">
              <span className="tag">Festival Nasional</span>
              <span className="tag">Panggung Internasional</span>
              <span className="tag">Event Diplomatik</span>
              <span className="tag">Cultural Showcase</span>
            </div>
            <Link href="/portofolio" className="link-arrow">
              Lihat Portofolio Event
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </article>
      </div>

      {/* STATS */}
      <section className="stats" aria-label="Statistik sanggar">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-num">20+</div>
            <div className="stat-lbl">Tahun Berpengalaman</div>
          </div>
          <div className="stat">
            <div className="stat-num">500+</div>
            <div className="stat-lbl">Pertunjukan Sukses</div>
          </div>
          <div className="stat">
            <div className="stat-num">300+</div>
            <div className="stat-lbl">Alumni Art School</div>
          </div>
          <div className="stat">
            <div className="stat-num">15+</div>
            <div className="stat-lbl">Festival Bergengsi</div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-inner">
          <h2>Siap Berkolaborasi<br /><em>Bersama Kami?</em></h2>
          <p>Ceritakan kebutuhan Anda dan tim kami akan menghubungi dalam waktu 1×24 jam.</p>
          <Link href="/kontak" className="btn-gold">
            Hubungi Kami Sekarang
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
