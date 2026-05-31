import Nav from "@/components/Nav";
import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <main id="main">
      <div className="hero-wrapper">
        <Nav isHero={true} />
        <HeroSlider />
      </div>

      {/* SEKILAS TENTANG */}
      <section className="home-about" aria-labelledby="home-about-title">
        <div className="home-about-txt">
          <h2 id="home-about-title">Sanggar Seni<br/><span>Annisa Rumpaka</span></h2>
          <p>
            Sanggar Seni Annisa Rumpaka adalah institusi seni pertunjukan yang berfokus pada pelestarian, pengembangan, dan internasionalisasi budaya Indonesia melalui karya tari dan pertunjukan yang inovatif. Didirikan pada tahun 2008 dan berbasis di Bogor, kami telah berkembang menjadi platform kreatif yang menghubungkan nilai-nilai tradisional dengan pendekatan artistik kontemporer.
          </p>
          <Link href="/tentang" className="btn-gold">
            Pelajari Lebih Lanjut
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "14px", height: "14px", stroke: "currentColor", strokeWidth: 2, fill: "none", marginLeft: "8px" }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
        <div className="home-about-img">
          <img src="/assets/img/seni-panggung.png" alt="Penari Annisa Rumpaka" loading="lazy" />
        </div>
      </section>
    </main>
  );
}
