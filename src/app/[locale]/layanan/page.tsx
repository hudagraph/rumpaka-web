import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import "./layanan.css";

export default function LayananPage() {
  const t = useTranslations("Services");

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
            <span>{t("hero_cat")}</span>
          </div>
          <h1 id="page-hero-title">
            {t.rich("hero_title", {
              br: () => <br />,
              em: (chunks) => <em>{chunks}</em>
            })}
          </h1>
          <p>{t("hero_desc")}</p>
        </div>
      </section>

      {/* SERVICES */}
      <div className="svc-wrap">
        {[0, 1, 2, 3].map(i => {
          const item = t.raw(`items.${i}`);
          const ids = ["seni-panggung", "arum-kostum", "art-school", "festival"];
          const hrefs = ["/kontak", "/kostum", "/art-school", "/portofolio"];
          const imgs = ["seni-panggung.png", "busana-adat.png", "art-school.png", "festival.png"];
          
          return (
            <article className={`svc-item ${i % 2 !== 0 ? "rev" : ""}`} id={ids[i]} key={ids[i]}>
              <div className="svc-img">
                <div 
                  className="svc-img-wrap" 
                  style={{ backgroundImage: `url('/assets/img/${imgs[i]}')`, backgroundSize: "cover", backgroundPosition: "center" }} 
                  role="img" 
                  aria-label={item.title.replace("<br />", " ")}
                >
                  <span className="svc-num" aria-hidden="true">0{i + 1}</span>
                </div>
              </div>
              <div className="svc-body">
                <div className="svc-cat">{item.cat}</div>
                <h2>
                  {t.rich(`items.${i}.title`, {
                    br: () => <br />
                  })}
                </h2>
                <p>{item.desc}</p>
                <Link href={hrefs[i] as any} className="link-arrow">
                  {item.cta}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* STATS */}
      <section className="stats" aria-label="Statistik sanggar">
        <div className="stats-inner">
          {[0, 1, 2, 3].map(i => (
            <div className="stat" key={i}>
              <div className="stat-num">{t(`stats.${i}.num`)}</div>
              <div className="stat-lbl">{t(`stats.${i}.lbl`)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-inner">
          <h2>
            {t.rich("cta_title", {
              br: () => <br />,
              em: (chunks) => <em>{chunks}</em>
            })}
          </h2>
          <p>{t("cta_desc")}</p>
          <Link href="/kontak" className="btn-gold">
            {t("cta_btn")}
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
