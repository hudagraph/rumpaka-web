import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./about.css";

export default function TentangPage() {
  const t = useTranslations("About");

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

      <div className="about-wrap">
        {/* PROFIL SANGGAR */}
        <section className="profil-sec">
          <div className="profil-txt">
            <h2 id="about-studio-title">
              {t.rich("profil_title", {
                br: () => <br />,
                span: (chunks) => <span>{chunks}</span>
              })}
            </h2>
            <p>{t.rich("profil_p1", { br: () => <br /> })}</p>
            <p>{t.rich("profil_p2", { br: () => <br /> })}</p>
            <p>{t.rich("profil_p3", { br: () => <br /> })}</p>
          </div>
          <div className="profil-img" aria-hidden="true"></div>
        </section>

        {/* VISI MISI */}
        <section className="vm-sec">
          <div className="v-box">
            <h3>{t("visi_title")}</h3>
            <p>{t.rich("visi_desc", { br: () => <br /> })}</p>
          </div>
          <div className="m-box">
            <h3>{t("misi_title")}</h3>
            <ul className="m-list">
              {/* Iterating over list from JSON */}
              {[0, 1, 2, 3, 4].map(i => (
                <li key={i}>{t.rich(`misi_list.${i}`, { br: () => <br /> })}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* BIDANG JASA */}
        <section className="jasa-sec">
          <div className="jasa-sec-head">
            <h2>{t("jasa_title")}</h2>
            <p>{t.rich("jasa_desc", { br: () => <br /> })}</p>
          </div>
          <div className="jasa-grid">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div className="jasa-card" key={i}>
                <div className="jasa-card-num">{i + 1 < 10 ? `0${i + 1}` : i + 1}</div>
                <h4>{t.rich(`jasa_items.${i}`, { br: () => <br /> })}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
