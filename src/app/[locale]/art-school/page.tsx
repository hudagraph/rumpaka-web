import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import "./art-school.css";

export default function ArtSchoolPage() {
  const t = useTranslations("ArtSchool");

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

      {/* PROGRAMS */}
      <section className="programs" aria-labelledby="programs-title">
        <header className="section-head">
          <h2 id="programs-title">
            {t.rich("prog_title", { em: (chunks) => <em>{chunks}</em> })}
          </h2>
          <p>{t("prog_desc")}</p>
        </header>

        <div className="programs-grid">
          {[0, 1, 2].map(i => (
            <article className={`prog-card ${i === 1 ? "featured" : ""}`} key={i}>
              {t(`items.${i}.badge`) && <span className="prog-badge">{t(`items.${i}.badge`)}</span>}
              <div className="prog-num">{t(`items.${i}.num`)}</div>
              <div className="prog-sub">{t(`items.${i}.sub`)}</div>
              <h3 className="prog-title">{t(`items.${i}.title`)}</h3>
              <p className="prog-desc">{t(`items.${i}.desc`)}</p>
              <ul className="prog-list">
                {[0, 1, 2, 3].map(j => (
                  <li key={j}>{t(`items.${i}.list.${j}`)}</li>
                ))}
              </ul>
              <div className="prog-foot">
                <div>
                  <div className="prog-price"><span className="cur">Rp</span>{t(`items.${i}.price`)}</div>
                  <div className="prog-price-unit">{t(`items.${i}.unit`)}</div>
                </div>
                <Link href={`/kontak?topic=artschool&prog=${t(`items.${i}.title`).toLowerCase()}` as any} className="prog-cta">
                  {t("cta_btn").split(" ")[0]}
                  <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="curriculum" aria-labelledby="curr-title">
        <div className="curr-grid">
          <div className="curr-side">
            <div className="eyebrow">
              <span className="dash" aria-hidden="true"></span>
              <span>Kurikulum</span>
            </div>
            <h2 id="curr-title">
              {t.rich("curr_title", { em: (chunks) => <em>{chunks}</em>, br: () => <br /> })}
            </h2>
            <p>{t("curr_desc")}</p>
            <p style={{ fontSize: "11.5px", color: "var(--text-soft)", fontStyle: "italic" }}>{t("curr_quote")}</p>
          </div>

          <div className="curr-stages">
            {[0, 1, 2, 3].map(i => (
              <div className="stage" key={i}>
                <div className="stage-num">{i + 1}</div>
                <div>
                  <div className="stage-name">{t(`stages.${i}.name`)}</div>
                  <div className="stage-age">{t(`stages.${i}.age`)}</div>
                  <p className="stage-desc">{t(`stages.${i}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="instructors" aria-labelledby="inst-title">
        <header className="section-head">
          <h2 id="inst-title">
            {t.rich("inst_title", { em: (chunks) => <em>{chunks}</em> })}
          </h2>
          <p>{t("inst_desc")}</p>
        </header>

        <div className="inst-grid">
          {[0, 1, 2, 3].map(i => (
            <div className="inst-card" key={i}>
              <div className="inst-photo" aria-hidden="true">
                {t(`instructors.${i}.name`).split(" ").map((n: string) => n[0]).join("")}
              </div>
              <div className="inst-name">{t(`instructors.${i}.name`)}</div>
              <div className="inst-role">{t(`instructors.${i}.role`)}</div>
              <p className="inst-bio">{t(`instructors.${i}.bio`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" aria-labelledby="faq-title">
        <header className="section-head" style={{ marginBottom: 0 }}>
          <h2 id="faq-title">
            {t.rich("faq_title", { em: (chunks) => <em>{chunks}</em> })}
          </h2>
          <p>{t("faq_desc")}</p>
        </header>

        <div className="faq-list">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <details className="faq-item" key={i}>
              <summary className="faq-q">{t(`faqs.${i}.q`)}</summary>
              <div className="faq-a">{t(`faqs.${i}.a`)}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-inner">
          <h2>
            {t.rich("cta_title", { em: (chunks) => <em>{chunks}</em>, br: () => <br /> })}
          </h2>
          <p>{t("cta_desc")}</p>
          <Link href="/kontak?topic=artschool&trial=1" className="btn-gold">
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
