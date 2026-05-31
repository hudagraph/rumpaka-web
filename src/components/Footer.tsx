"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const nt = useTranslations("Nav");

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <img className="logo-mark" src="/assets/logo.png" alt="Annisa Rumpaka" />
          </Link>
          <p className="footer-tagline">{t("tagline")}</p>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">{t("nav_title")}</div>
          <ul className="footer-list">
            <li><Link href="/">{nt("home")}</Link></li>
            <li><Link href="/tentang">{nt("about")}</Link></li>
            <li><Link href="/layanan">{nt("services")}</Link></li>
            <li><Link href="/portofolio">{nt("portfolio")}</Link></li>
            <li><Link href="/galeri">{nt("gallery")}</Link></li>
            <li><Link href="/kontak">{nt("contact")}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">{t("svc_title")}</div>
          <ul className="footer-list">
            <li><Link href="/layanan#seni-panggung">Seni Panggung</Link></li>
            <li><Link href="/kostum">Sewa Kostum</Link></li>
            <li><Link href="/art-school">Art School</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">{t("contact_title")}</div>
          <ul className="footer-list">
            <li><a href="mailto:arum.artdance@gmail.com">arum.artdance@gmail.com</a></li>
            <li><a href="https://wa.me/62895644961">+62 895-644-961</a></li>
            <li><span>Jakarta Selatan</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <p className="footer-copy">{t("copy")}</p>
        <p className="footer-copy">{t("mission")}</p>
      </div>
    </footer>
  );
}
