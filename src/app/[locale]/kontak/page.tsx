"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import "./kontak.css";

function ContactForm() {
  const t = useTranslations("Contact.form");
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get("topic") || "";

  const [formData, setFormData] = useState({
    nama: "",
    telp: "",
    email: "",
    keperluan: initialTopic,
    pesan: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validators: Record<string, (v: string) => string | null> = {
    nama: (v) => v.trim().length >= 2 ? null : t("validation.name"),
    telp: (v) => /^[0-9+\-\s()]{8,}$/.test(v.trim()) ? null : t("validation.tel"),
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? null : t("validation.email"),
    keperluan: (v) => v ? null : t("validation.topic"),
    pesan: (v) => v.trim().length >= 10 ? null : t("validation.message"),
  };

  const validateField = (name: string, value: string) => {
    const err = validators[name](value);
    setErrors(prev => ({ ...prev, [name]: err || "" }));
    return err;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    let firstErrKey = "";

    Object.keys(validators).forEach(key => {
      const err = validators[key](formData[key as keyof typeof formData]);
      if (err) {
        newErrors[key] = err;
        if (!firstErrKey) firstErrKey = key;
      }
    });

    setErrors(newErrors);

    if (firstErrKey) {
      const el = document.getElementsByName(firstErrKey)[0];
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="form-success show" role="status" aria-live="polite">
        <div className="form-success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <strong>{t("success_title")}</strong>
        <p>{t("success_desc")}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="nama">{t("name")} <span className="req">*</span></label>
          <input 
            type="text" id="nama" name="nama" 
            placeholder={t("placeholder_name")} 
            required value={formData.nama}
            onChange={handleChange}
            onBlur={() => validateField("nama", formData.nama)}
            className={errors.nama ? "error" : ""}
          />
          <div className="field-error">{errors.nama}</div>
        </div>
        <div className="field">
          <label htmlFor="telp">{t("tel")} <span className="req">*</span></label>
          <input 
            type="tel" id="telp" name="telp" 
            placeholder="08xx-xxxx-xxxx" 
            required value={formData.telp}
            onChange={handleChange}
            onBlur={() => validateField("telp", formData.telp)}
            className={errors.telp ? "error" : ""}
          />
          <div className="field-error">{errors.telp}</div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">{t("email")} <span className="req">*</span></label>
        <input 
          type="email" id="email" name="email" 
          placeholder="email@example.com" 
          required value={formData.email}
          onChange={handleChange}
          onBlur={() => validateField("email", formData.email)}
          className={errors.email ? "error" : ""}
        />
        <div className="field-error">{errors.email}</div>
      </div>

      <div className="field">
        <label htmlFor="keperluan">{t("topic")} <span className="req">*</span></label>
        <div className="select-wrap">
          <select 
            id="keperluan" name="keperluan" 
            required value={formData.keperluan}
            onChange={handleChange}
            onBlur={() => validateField("keperluan", formData.keperluan)}
            className={errors.keperluan ? "error" : ""}
          >
            <option value="" disabled>{t("topics.label")}</option>
            <option value="pertunjukan">{t("topics.performance")}</option>
            <option value="kostum">{t("topics.costume")}</option>
            <option value="artschool">{t("topics.school")}</option>
            <option value="event">{t("topics.event")}</option>
            <option value="lainnya">{t("topics.other")}</option>
          </select>
        </div>
        <div className="field-error">{errors.keperluan}</div>
      </div>

      <div className="field">
        <label htmlFor="pesan">{t("message")} <span className="req">*</span></label>
        <textarea 
          id="pesan" name="pesan" 
          placeholder={t("placeholder_message")} 
          required value={formData.pesan}
          onChange={handleChange}
          onBlur={() => validateField("pesan", formData.pesan)}
          className={errors.pesan ? "error" : ""}
        ></textarea>
        <div className="field-error">{errors.pesan}</div>
      </div>

      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        <span>{isSubmitting ? t("submitting") : t("submit")}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </form>
  );
}

export default function KontakPage() {
  const t = useTranslations("Contact");

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
            <span>{t("hero_cat")}</span>
          </div>
          <h1 id="page-hero-title">
            {t.rich("hero_title", { br: () => <br />, em: (chunks) => <em>{chunks}</em> })}
          </h1>
          <p>{t("hero_desc")}</p>
        </div>
      </section>

      <div className="contact-section">
        <section className="form-side">
          <h2 className="form-title">{t("form_title")}</h2>
          <p className="form-sub">{t("form_sub")}</p>
          <Suspense fallback={<div>Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </section>

        <aside className="info-side">
          <h2 className="info-title">{t("info_title")}</h2>
          <p className="info-sub">{t("info_sub")}</p>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.71 10.8a19.79 19.79 0 01-3.07-8.57A2 2 0 012.61 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.57a16 16 0 006 6l1.63-.95a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <div className="info-lbl">{t("info.tel_label")}</div>
                <div className="info-val">
                  <a href="tel:+62895644961">+62 895-644-961</a><br />
                  <a href="https://wa.me/62895644961">WhatsApp</a>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <div>
                <div className="info-lbl">{t("info.email_label")}</div>
                <div className="info-val">
                  <a href="mailto:arum.artdance@gmail.com">arum.artdance@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div>
                <div className="info-lbl">{t("info.loc_label")}</div>
                <div className="info-val">
                  Plaza Simatupang Lt 06 Unit 3 JL. TB Simatupang<br />
                  Kebayoran Lama, Jakarta Selatan 12310
                </div>
              </div>
            </div>
          </div>

          <a href="https://wa.me/62895644961?text=Halo%20Annisa%20Rumpaka%2C%20saya%20ingin%20berkonsultasi%20mengenai..." className="wa-btn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {t("info.wa_btn")}
          </a>

          <div className="jam-wrap">
            <div className="jam-title">{t("hours_title")}</div>
            {[0, 1, 2].map(i => (
              <div className="jam-row" key={i}>
                <span>{t(`hours.${i}.day`)}</span>
                <span>{t(`hours.${i}.time`)}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
