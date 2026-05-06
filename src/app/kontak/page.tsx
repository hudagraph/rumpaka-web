'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Kontak() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'pertunjukan',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim (Simulasi).');
  };

  return (
    <main className="kontak-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="ph-bg" />
        <div className="ph-dots" />
        <div className="ph-content">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow"
          >
            <span className="dash" />
            <span>Kontak</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Mari Mulai<br /><em>Berkolaborasi</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Punya pertanyaan tentang layanan kami? Tim kami siap membantu Anda menghadirkan seni budaya terbaik.
          </motion.p>
        </div>
      </section>

      <section className="kontak-grid">
        {/* FORM */}
        <motion.div 
          className="form-card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="f-row">
              <div className="f-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input 
                  type="text" id="name" required placeholder="Contoh: Budi Santoso"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="f-group">
                <label htmlFor="phone">WhatsApp / Telepon</label>
                <input 
                  type="tel" id="phone" required placeholder="08XXXXXXXXXX"
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div className="f-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" id="email" required placeholder="budi@example.com"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            
            <div className="f-group">
              <label htmlFor="subject">Keperluan</label>
              <select 
                id="subject"
                value={formState.subject}
                onChange={(e) => setFormState({...formState, subject: e.target.value})}
              >
                <option value="pertunjukan">Jasa Pertunjukan / Event</option>
                <option value="kostum">Sewa / Beli Kostum</option>
                <option value="sekolah">Pendaftaran Art School</option>
                <option value="lainnya">Kerjasama / Lainnya</option>
              </select>
            </div>
            
            <div className="f-group">
              <label htmlFor="message">Pesan / Detail Kebutuhan</label>
              <textarea 
                id="message" rows={5} required placeholder="Ceritakan detail rencana acara atau pertanyaan Anda..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Kirim Pesan
              <Send size={16} />
            </button>
          </form>
        </motion.div>

        {/* INFO */}
        <div className="info-side">
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="i-icon"><Phone size={20} /></div>
            <div className="i-txt">
              <h3>Telepon / WA</h3>
              <p>+62 8XX-XXXX-XXXX</p>
              <a href="https://wa.me/628XXXXXXXXX" className="wa-link">
                Chat via WhatsApp <MessageCircle size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="i-icon"><Mail size={20} /></div>
            <div className="i-txt">
              <h3>Email</h3>
              <p>info@annisarumpaka.com</p>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="i-icon"><MapPin size={20} /></div>
            <div className="i-txt">
              <h3>Lokasi</h3>
              <p>Bandung, Jawa Barat<br />Indonesia</p>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="i-icon"><Clock size={20} /></div>
            <div className="i-txt">
              <h3>Jam Operasional</h3>
              <p>Senin – Jumat: 09:00 – 17:00<br />Sabtu: 09:00 – 14:00</p>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .kontak-page { padding-bottom: 100px; }
        .page-hero {
          position: relative; height: 50vh; min-height: 400px;
          display: flex; align-items: center; padding: 0 50px; overflow: hidden;
          background: #070707;
        }
        .ph-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #0f0f0f 0%, #070707 100%); }
        .ph-dots {
          position: absolute; inset: 0; opacity: 0.1;
          background-image: radial-gradient(var(--gold) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .ph-content { position: relative; z-index: 10; max-width: 650px; }
        .eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .eyebrow .dash { width: 32px; height: 1px; background: var(--gold); }
        .eyebrow span { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); }
        .ph-content h1 { font-family: var(--font-serif); font-size: clamp(42px, 5.5vw, 74px); font-weight: 900; line-height: 1.1; color: #fff; margin-bottom: 24px; }
        .ph-content em { font-family: var(--font-serif); font-style: italic; color: var(--gold); font-weight: 700; }
        .ph-content p { font-size: 15px; color: var(--text-mute); max-width: 480px; line-height: 1.7; }

        .kontak-grid {
          max-width: 1300px; margin: -60px auto 0; padding: 0 50px;
          display: grid; grid-template-columns: 1.6fr 1fr; gap: 40px;
          position: relative; z-index: 20;
        }

        .form-card {
          background: var(--surface); border: 1px solid rgba(255,255,255,0.06);
          padding: 50px; border-radius: 24px; box-shadow: 0 32px 84px rgba(0,0,0,0.4);
        }
        .f-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        .f-group { margin-bottom: 24px; display: flex; flex-direction: column; gap: 10px; }
        .f-group label { font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; }
        .f-group input, .f-group select, .f-group textarea {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 14px 18px; color: #fff; font-size: 14px;
          transition: border-color 0.3s, background 0.3s;
        }
        .f-group input:focus, .f-group select:focus, .f-group textarea:focus {
          outline: none; border-color: var(--gold-dim); background: rgba(255,255,255,0.06);
        }
        .submit-btn {
          width: 100%; padding: 16px; background: var(--gold); color: #070707;
          font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em;
          border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 12px;
          transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px var(--gold-glow); }

        .info-side { display: flex; flex-direction: column; gap: 20px; }
        .info-card {
          background: var(--surface-2); border: 1px solid rgba(255,255,255,0.06);
          padding: 24px; border-radius: 20px; display: flex; gap: 20px; align-items: center;
        }
        .i-icon {
          width: 48px; height: 48px; border-radius: 14px; background: var(--gold-glow);
          color: var(--gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .i-txt h3 { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--gold); margin-bottom: 6px; }
        .i-txt p { font-size: 14px; color: #fff; font-weight: 500; line-height: 1.5; }
        .wa-link {
          display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700;
          color: #25D366; margin-top: 8px; text-transform: uppercase;
        }

        @media (max-width: 1100px) {
          .kontak-grid { grid-template-columns: 1fr; padding: 0 32px; }
          .page-hero { padding: 0 32px; }
        }
        @media (max-width: 768px) {
          .page-hero { padding: 0 20px; height: 40vh; }
          .kontak-grid { margin-top: -40px; padding: 0 20px; gap: 30px; }
          .form-card { padding: 30px 20px; border-radius: 20px; }
          .f-row { grid-template-columns: 1fr; gap: 0; }
        }
      `}</style>
    </main>
  );
}
