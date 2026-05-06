'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
            <span className="logo-name">Annisa Rumpaka</span>
            <span className="logo-sub">Sanggar Seni · Est. 2008</span>
          </Link>
          <p className="footer-tagline">
            Melestarikan dan merayakan seni budaya Sunda untuk generasi masa kini.
          </p>
        </div>
        
        <div className="footer-col">
          <div className="footer-col-title">Navigasi</div>
          <ul className="footer-list">
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/layanan">Layanan</Link></li>
            <li><Link href="/kostum">Arum Kostum</Link></li>
            <li><Link href="/art-school">Art School</Link></li>
            <li><Link href="/kontak">Kontak</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <div className="footer-col-title">Layanan</div>
          <ul className="footer-list">
            <li><Link href="/layanan#seni-panggung">Seni Panggung</Link></li>
            <li><Link href="/kostum">Sewa Kostum</Link></li>
            <li><Link href="/art-school">Sekolah Tari</Link></li>
            <li><Link href="/layanan#festival">Festival & Event</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <div className="footer-col-title">Kontak</div>
          <ul className="footer-list">
            <li><a href="mailto:info@annisarumpaka.com">info@annisarumpaka.com</a></li>
            <li><a href="https://wa.me/628XXXXXXXXX">+62 8XX-XXXX-XXXX</a></li>
            <li><span>Bandung, Jawa Barat</span></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bot">
        <p className="footer-copy">© 2026 PT Sanggar Seni Annisa Rumpaka. Hak cipta dilindungi.</p>
        <p className="footer-copy">Melestarikan Seni Budaya Sunda sejak 2008.</p>
      </div>

      <style jsx>{`
        .footer {
          background: var(--surface);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 52px 50px 36px;
          position: relative;
        }
        .footer-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 44px;
        }
        .footer-brand .logo { margin-bottom: 18px; }
        .footer-tagline {
          font-size: 12.5px;
          line-height: 1.7;
          color: var(--text-mute);
          max-width: 280px;
          margin-bottom: 22px;
        }
        .footer-col-title {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 18px;
        }
        .footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-list a,
        .footer-list span {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--text-mute);
          text-decoration: none;
          line-height: 1.5;
          transition: color 0.3s;
        }
        .footer-list a:hover { color: var(--gold); }

        .footer-bot {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 10.5px;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.32);
        }

        @media (max-width: 1100px) {
          .footer { padding: 44px 32px 28px; }
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }
        @media (max-width: 768px) {
          .footer { padding: 40px 20px 24px; }
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bot {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        .logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          text-decoration: none;
          text-align: left;
        }
        .logo-name {
          font-family: var(--font-serif);
          font-size: 15px; font-weight: 700;
          color: #fff;
          letter-spacing: 0.04em; line-height: 1;
        }
        .logo-sub {
          font-size: 8.5px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--gold);
        }
      `}</style>
    </footer>
  );
}
