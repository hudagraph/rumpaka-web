'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: 'Beranda', href: '/' },
  { name: 'Layanan', href: '/layanan' },
  { name: 'Arum Kostum', href: '/kostum' },
  { name: 'Art School', href: '/art-school' },
  { name: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHeroNav = pathname === '/';

  return (
    <>
      <nav
        className={cn(
          'nav',
          isScrolled && 'scrolled',
          isHeroNav && !isScrolled && 'nav-hero'
        )}
      >
        <Link href="/" className="logo">
          <Image
            src="/assets/img/ar-logo.png"
            alt="Annisa Rumpaka"
            height={44}
            width={120}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(pathname === link.href && 'act')}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-r">
          <button className="icon-b" type="button" aria-label="Cari">
            <Search />
          </button>
          <Link href="/kontak" className="cta-b">
            Hubungi Kami
          </Link>
          <button
            className={cn('ham', isMobileMenuOpen && 'open')}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mob-menu open"
          >
            <nav className="mob-nav">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(pathname === link.href && 'act')}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/kontak" className="cta-b mob-cta">
                Hubungi Kami
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 50px;
          background: rgba(7, 7, 7, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.055);
          transition: background .4s ease, padding .35s ease;
        }
        .nav.scrolled {
          background: rgba(7, 7, 7, 0.92);
          padding: 16px 50px;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          gap: 34px;
          list-style: none;
        }
        .nav-links a {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.3s;
        }
        .nav-links a::after {
          content: "";
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.35s var(--ease);
        }
        .nav-links a.act,
        .nav-links a:hover {
          color: #fff;
        }
        .nav-links a.act::after,
        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-r {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .icon-b {
          width: 37px; height: 37px;
          border-radius: 50%;
          border: 1px solid var(--glass-b);
          background: var(--glass);
          backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          cursor: none;
          transition: border-color 0.3s, background 0.3s;
        }
        .icon-b:hover {
          border-color: var(--gold-dim);
          background: var(--gold-glow);
        }
        .icon-b svg {
          width: 14px; height: 14px;
          stroke: rgba(255, 255, 255, 0.72);
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .cta-b {
          padding: 9px 21px;
          border: 1px solid var(--gold);
          border-radius: 100px;
          background: transparent;
          color: var(--gold);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: none;
          text-decoration: none;
          display: inline-block;
          transition: background 0.3s, color 0.3s, box-shadow 0.3s;
        }
        .cta-b:hover {
          background: var(--gold);
          color: #070707;
          box-shadow: 0 0 32px var(--gold-glow);
        }

        .ham {
          display: none;
          flex-direction: column;
          gap: 5px;
          width: 37px; height: 37px;
          border-radius: 50%;
          border: 1px solid var(--glass-b);
          background: var(--glass);
          backdrop-filter: blur(12px);
          align-items: center; justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          transition: border-color 0.3s, background 0.3s;
        }
        @media (max-width: 768px) {
          .ham { display: flex; }
          .nav-links, .nav-r .cta-b, .nav-r .icon-b { display: none; }
          .nav { padding: 18px 20px; }
          .nav.scrolled { padding: 14px 20px; }
        }
        .ham span {
          display: block;
          width: 16px; height: 1.5px;
          background: rgba(255, 255, 255, 0.75);
          border-radius: 2px;
          transition: transform 0.38s var(--ease), opacity 0.25s;
        }
        .ham.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .ham.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ham.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .mob-menu {
          position: fixed;
          inset: 0;
          z-index: 150;
          background: rgba(7, 7, 7, 0.97);
          backdrop-filter: blur(24px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
        .mob-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }
        .mob-nav a {
          font-family: var(--font-serif);
          font-size: clamp(30px, 9vw, 52px);
          font-weight: 700;
          color: rgba(255, 255, 255, 0.35);
          text-decoration: none;
          letter-spacing: -0.02em;
          transition: color 0.3s;
        }
        .mob-nav a:hover,
        .mob-nav a.act {
          color: var(--gold);
        }
        .mob-cta {
          font-size: 11px !important;
          padding: 11px 28px !important;
        }
      `}</style>
    </>
  );
}
