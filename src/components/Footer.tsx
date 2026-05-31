"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <img className="logo-mark" src="/assets/logo.png" alt="Annisa Rumpaka" />
          </Link>
          <p className="footer-tagline">Melestarikan dan merayakan seni budaya Sunda untuk generasi masa kini.</p>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Navigasi</div>
          <ul className="footer-list">
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/tentang">Tentang</Link></li>
            <li><Link href="/layanan">Layanan</Link></li>
            <li><Link href="/portofolio">Portofolio</Link></li>
            <li><Link href="/galeri">Galeri</Link></li>
            <li><Link href="/kontak">Kontak</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Layanan</div>
          <ul className="footer-list">
            <li><Link href="/layanan#seni-panggung">Seni Panggung</Link></li>
            <li><Link href="/kostum">Sewa Kostum</Link></li>
            <li><Link href="/art-school">Sekolah Tari</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Kontak</div>
          <ul className="footer-list">
            <li><a href="mailto:arum.artdance@gmail.com">arum.artdance@gmail.com</a></li>
            <li><a href="https://wa.me/62895644961">+62 895-644-961</a></li>
            <li><span>Jakarta Selatan</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <p className="footer-copy">© 2026 PT Sanggar Seni Annisa Rumpaka. Hak cipta dilindungi.</p>
        <p className="footer-copy">Melestarikan Seni Budaya Sunda sejak 2008.</p>
      </div>
    </footer>
  );
}
