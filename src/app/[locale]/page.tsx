import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import HeroSlider from "@/components/HeroSlider";
import { Link } from "@/i18n/routing";
import "./home.css";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main id="main">
      <div className="hero-wrapper">
        <Nav isHero={true} />
        <HeroSlider />
      </div>

      {/* SEKILAS TENTANG */}
      <section className="home-about" aria-labelledby="home-about-title">
        <div className="home-about-txt">
          <h2 id="home-about-title">
            {t.rich("about_title", {
              br: () => <br />,
              span: (chunks) => <span>{chunks}</span>
            })}
            <br/><span>{t("about_subtitle")}</span>
          </h2>
          <p>{t("about_desc")}</p>
          <Link href="/tentang" className="btn-gold">
            {t("about_cta")}
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
