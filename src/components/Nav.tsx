"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export default function Nav({ isHero = false }: { isHero?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Nav");

  useEffect(() => {
    if (!isHero) {
      const onScroll = () => setIsScrolled(window.scrollY > 40);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [isHero]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const switchLocale = (newLocale: 'id' | 'en') => {
    router.replace(pathname, { locale: newLocale });
    closeMenu();
  };

  const navClass = `nav ${isHero ? "nav-hero" : ""} ${isScrolled ? "scrolled" : ""}`;

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/tentang" },
    { 
      name: t("services"), 
      href: "/layanan",
      dropdown: [
        { name: locale === 'en' ? "Stage Performance" : "Seni Panggung", href: "/layanan#seni-panggung" },
        { name: locale === 'en' ? "Arum Costume" : "Arum Kostum", href: "/kostum" },
        { name: "Art School", href: "/art-school" },
      ]
    },
    { name: t("portfolio"), href: "/portofolio" },
    { name: t("gallery"), href: "/galeri" },
    { name: t("contact"), href: "/kontak" },
  ];

  return (
    <>
      <nav className={navClass} id="mainNav" aria-label="Navigasi utama">
        <Link href="/" className="logo" aria-label="Annisa Rumpaka — Beranda" onClick={closeMenu}>
          <img className="logo-mark" src="/assets/logo.png" alt="Annisa Rumpaka" />
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href} className={link.dropdown ? "dropdown" : ""}>
              <Link 
                href={link.href as any} 
                className={pathname === link.href ? "act" : ""}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="dropdown-menu">
                  {link.dropdown.map((sub) => (
                    <Link key={sub.href} href={sub.href as any}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-r">
          <div className="lang-switcher">
            <button 
              className={locale === 'id' ? 'act' : ''} 
              onClick={() => switchLocale('id')}
              aria-label="Bahasa Indonesia"
            >ID</button>
            <span className="sep">|</span>
            <button 
              className={locale === 'en' ? 'act' : ''} 
              onClick={() => switchLocale('en')}
              aria-label="English"
            >EN</button>
          </div>

          <Link href="/kontak" className="cta-b">{t("cta")}</Link>
          
          <button 
            className={`ham ${isOpen ? "open" : ""}`} 
            type="button" 
            id="hamBtn" 
            aria-label={isOpen ? "Tutup menu" : "Buka menu"} 
            aria-expanded={isOpen}
            aria-controls="mobMenu"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div 
        className={`mob-menu ${isOpen ? "open" : ""}`} 
        id="mobMenu" 
        role="dialog" 
        aria-modal="true" 
        aria-label="Menu navigasi" 
        aria-hidden={!isOpen}
      >
        <nav className="mob-nav" aria-label="Navigasi mobile">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link 
                href={link.href as any} 
                className={pathname === link.href ? "act" : ""}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
              {link.dropdown && link.dropdown.map((sub) => (
                <Link key={sub.href} href={sub.href as any} className="mob-sub" onClick={closeMenu}>
                  {sub.name}
                </Link>
              ))}
            </div>
          ))}
          <div className="mob-lang">
            <button className={locale === 'id' ? 'act' : ''} onClick={() => switchLocale('id')}>Bahasa Indonesia</button>
            <button className={locale === 'en' ? 'act' : ''} onClick={() => switchLocale('en')}>English</button>
          </div>
        </nav>
        <Link href="/kontak" className="cta-b mob-cta" onClick={closeMenu}>{t("cta")}</Link>
      </div>
      
      <style jsx>{`
        .lang-switcher { display: flex; align-items: center; gap: 6px; margin-right: 20px; font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.4); }
        .lang-switcher button { background: transparent; border: none; color: inherit; cursor: pointer; padding: 4px; transition: color 0.3s; }
        .lang-switcher button.act { color: var(--gold); }
        .lang-switcher .sep { opacity: 0.3; font-weight: 300; }
        
        .mob-lang { display: flex; flex-direction: column; gap: 12px; margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; align-items: center; }
        .mob-lang button { background: transparent; border: none; color: rgba(255,255,255,0.4); font-size: 14px; font-weight: 600; cursor: pointer; }
        .mob-lang button.act { color: var(--gold); }

        @media (max-width: 900px) {
          .lang-switcher { display: none; }
        }
      `}</style>
    </>
  );
}
