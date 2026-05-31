"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Nav({ isHero = false }: { isHero?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const navClass = `nav ${isHero ? "nav-hero" : ""} ${isScrolled ? "scrolled" : ""}`;

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { 
      name: "Layanan", 
      href: "/layanan",
      dropdown: [
        { name: "Seni Panggung", href: "/layanan#seni-panggung" },
        { name: "Arum Kostum", href: "/kostum" },
        { name: "Art School", href: "/art-school" },
      ]
    },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Galeri", href: "/galeri" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      <nav className={navClass} id="mainNav" aria-label="Navigasi utama">
        <Link href="/" className="logo" aria-label="Annisa Rumpaka — Beranda" onClick={closeMenu}>
          <img className="logo-mark" src="/assets/logo.png" alt="Annisa Rumpaka" />
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name} className={link.dropdown ? "dropdown" : ""}>
              <Link 
                href={link.href} 
                className={pathname === link.href ? "act" : ""}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="dropdown-menu">
                  {link.dropdown.map((sub) => (
                    <Link key={sub.name} href={sub.href}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-r">
          <button className="icon-b" type="button" aria-label="Cari">
            <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
              <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <Link href="/kontak" className="cta-b">Hubungi Kami</Link>
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
            <div key={link.name}>
              <Link 
                href={link.href} 
                className={pathname === link.href ? "act" : ""}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
              {link.dropdown && link.dropdown.map((sub) => (
                <Link key={sub.name} href={sub.href} className="mob-sub" onClick={closeMenu}>
                  {sub.name}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <Link href="/kontak" className="cta-b mob-cta" onClick={closeMenu}>Hubungi Kami</Link>
      </div>
    </>
  );
}
