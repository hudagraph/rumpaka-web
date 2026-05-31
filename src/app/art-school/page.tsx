import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import "./art-school.css";

export const metadata: Metadata = {
  title: "Art School — Sekolah Tari Sunda | Annisa Rumpaka",
  description: "Annisa Rumpaka Art School — sekolah tari Sunda untuk anak hingga dewasa di Bandung. Program reguler, intensif, dan privat dengan pengajar bersertifikat sejak 2003.",
};

export default function ArtSchoolPage() {
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
            <span>Art School</span>
          </div>
          <h1 id="page-hero-title">Sekolah<br /><em>Tari Sunda</em></h1>
          <p>Belajar tari Sunda dari pengajar berpengalaman lebih dari 20 tahun. Program lengkap untuk anak, remaja, hingga dewasa — dari pemula hingga lanjutan.</p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs" aria-labelledby="programs-title">
        <header className="section-head">
          <h2 id="programs-title">Program <em>Pelatihan</em></h2>
          <p>Tiga jalur belajar yang dirancang untuk menyesuaikan ritme dan tujuan setiap murid — dari pengenalan dasar hingga persiapan kompetisi profesional.</p>
        </header>

        <div className="programs-grid">
          <article className="prog-card">
            <div className="prog-num">01</div>
            <div className="prog-sub">8 Sesi · 2 Bulan</div>
            <h3 className="prog-title">Reguler</h3>
            <p className="prog-desc">Kelas mingguan dalam kelompok kecil. Cocok untuk yang ingin belajar santai sambil mengenal kebudayaan.</p>
            <ul className="prog-list">
              <li>2× pertemuan/minggu (60 menit)</li>
              <li>Maks. 8 murid per kelas</li>
              <li>Materi terstruktur per level</li>
              <li>Sertifikat penyelesaian</li>
            </ul>
            <div className="prog-foot">
              <div>
                <div className="prog-price"><span className="cur">Rp</span>650K</div>
                <div className="prog-price-unit">/bulan</div>
              </div>
              <Link href="/kontak?topic=artschool&prog=reguler" className="prog-cta">
                Daftar
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </article>

          <article className="prog-card featured">
            <span className="prog-badge">Populer</span>
            <div className="prog-num">02</div>
            <div className="prog-sub">12 Sesi · 1 Bulan</div>
            <h3 className="prog-title">Intensif</h3>
            <p className="prog-desc">Program akselerasi untuk yang sudah memiliki dasar atau ingin cepat mahir. Frekuensi tinggi dengan materi mendalam.</p>
            <ul className="prog-list">
              <li>3× pertemuan/minggu (90 menit)</li>
              <li>Maks. 6 murid per kelas</li>
              <li>Praktek panggung mini</li>
              <li>Sertifikat &amp; rekomendasi</li>
            </ul>
            <div className="prog-foot">
              <div>
                <div className="prog-price"><span className="cur">Rp</span>1.4Jt</div>
                <div className="prog-price-unit">/bulan</div>
              </div>
              <Link href="/kontak?topic=artschool&prog=intensif" className="prog-cta">
                Daftar
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </article>

          <article className="prog-card">
            <div className="prog-num">03</div>
            <div className="prog-sub">Fleksibel · Per Sesi</div>
            <h3 className="prog-title">Privat</h3>
            <p className="prog-desc">Pelatihan one-on-one dengan kurikulum custom. Ideal untuk persiapan audisi, kompetisi, atau performa khusus.</p>
            <ul className="prog-list">
              <li>1-on-1 dengan instruktur senior</li>
              <li>Jadwal &amp; lokasi fleksibel</li>
              <li>Materi disesuaikan tujuan</li>
              <li>Konsultasi karir seni</li>
            </ul>
            <div className="prog-foot">
              <div>
                <div className="prog-price"><span className="cur">Rp</span>350K</div>
                <div className="prog-price-unit">/sesi 90 menit</div>
              </div>
              <Link href="/kontak?topic=artschool&prog=privat" className="prog-cta">
                Daftar
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </article>
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
            <h2 id="curr-title">Empat Tahap<br /><em>Penguasaan</em></h2>
            <p>Kurikulum kami dibagi menjadi empat tahap progresif. Setiap murid menjalani penilaian sebelum naik ke tahap berikutnya — memastikan fondasi yang kokoh sebelum melangkah lebih jauh.</p>
            <p style={{ fontSize: "11.5px", color: "var(--text-soft)", fontStyle: "italic" }}>"Tari bukan sekadar gerak — ia adalah cara tubuh memahami sejarah."</p>
          </div>

          <div className="curr-stages">
            <div className="stage">
              <div className="stage-num">1</div>
              <div>
                <div className="stage-name">Pengenalan</div>
                <div className="stage-age">5+ Tahun · Pemula</div>
                <p className="stage-desc">Pengenalan postur dasar, ritme gendang, dan gerakan tangan utama. Fokus pada kepercayaan diri dan kecintaan terhadap seni Sunda.</p>
              </div>
            </div>
            <div className="stage">
              <div className="stage-num">2</div>
              <div>
                <div className="stage-name">Dasar</div>
                <div className="stage-age">Lanjutan Pemula</div>
                <p className="stage-desc">Penguasaan tari pendek seperti Kembang Tanjung. Latihan koordinasi tangan-kaki, ekspresi wajah, dan musikalitas.</p>
              </div>
            </div>
            <div className="stage">
              <div className="stage-num">3</div>
              <div>
                <div className="stage-name">Menengah</div>
                <div className="stage-age">Intermediate</div>
                <p className="stage-desc">Tari berdurasi penuh seperti Jaipong dan Ronggeng. Pemahaman teori budaya, sejarah, dan karakter tari.</p>
              </div>
            </div>
            <div className="stage">
              <div className="stage-num">4</div>
              <div>
                <div className="stage-name">Mahir</div>
                <div className="stage-age">Advanced</div>
                <p className="stage-desc">Tari klasik kompleks seperti Tari Merak dan Topeng. Persiapan panggung profesional, kompetisi, dan koreografi mandiri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="instructors" aria-labelledby="inst-title">
        <header className="section-head">
          <h2 id="inst-title">Tim <em>Pengajar</em></h2>
          <p>Pengajar bersertifikat dengan pengalaman panggung nasional dan internasional. Setiap instruktur fokus pada bidang keahliannya masing-masing.</p>
        </header>

        <div className="inst-grid">
          <div className="inst-card">
            <div className="inst-photo" aria-hidden="true">AR</div>
            <div className="inst-name">Annisa R.</div>
            <div className="inst-role">Founder · Klasik</div>
            <p className="inst-bio">Maestro tari klasik Sunda dengan 25+ tahun pengalaman. Lulusan ISBI Bandung.</p>
          </div>
          <div className="inst-card">
            <div className="inst-photo" aria-hidden="true">DM</div>
            <div className="inst-name">Dewi M.</div>
            <div className="inst-role">Tari Anak</div>
            <p className="inst-bio">Spesialis pedagogi anak. Berpengalaman mengajar 15 tahun di sekolah dasar &amp; menengah.</p>
          </div>
          <div className="inst-card">
            <div className="inst-photo" aria-hidden="true">RS</div>
            <div className="inst-name">Rinda S.</div>
            <div className="inst-role">Tari Kreasi</div>
            <p className="inst-bio">Koreografer aktif yang menggabungkan tari Sunda dengan unsur kontemporer.</p>
          </div>
          <div className="inst-card">
            <div className="inst-photo" aria-hidden="true">BP</div>
            <div className="inst-name">Bagas P.</div>
            <div className="inst-role">Topeng &amp; Wayang</div>
            <p className="inst-bio">Spesialis tari topeng tradisional. Pernah tampil di festival Asia Tenggara.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" aria-labelledby="faq-title">
        <header className="section-head" style={{ marginBottom: 0 }}>
          <h2 id="faq-title">Pertanyaan <em>Umum</em></h2>
          <p>Hal-hal yang sering ditanyakan calon murid dan orang tua.</p>
        </header>

        <div className="faq-list">
          <details className="faq-item">
            <summary className="faq-q">Apakah harus memiliki pengalaman menari sebelumnya?</summary>
            <div className="faq-a">Tidak. Program Reguler kami dirancang untuk pemula total. Kami akan memulai dari postur, pernapasan, dan gerakan dasar terlebih dahulu — semua orang dapat mengikuti.</div>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Berapa usia minimum untuk mendaftar?</summary>
            <div className="faq-a">Kelas anak dimulai dari usia 5 tahun (kelas Pengenalan). Untuk dewasa, tidak ada batas usia atas — kami memiliki murid hingga usia 60+.</div>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Apakah disediakan kostum saat pertunjukan?</summary>
            <div className="faq-a">Ya. Murid mendapatkan akses sewa khusus dari Arum Kostum dengan harga khusus pelajar untuk pertunjukan akhir program dan pentas tahunan.</div>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Bagaimana sistem kenaikan tahap?</summary>
            <div className="faq-a">Setiap tahap memiliki ujian akhir berupa peragaan tari. Penilaian mencakup teknik, ekspresi, musikalitas, dan konsistensi. Murid yang lulus mendapat sertifikat dan dapat mendaftar tahap berikutnya.</div>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Apakah ada kelas trial sebelum mendaftar?</summary>
            <div className="faq-a">Ya. Kami menyediakan satu sesi trial gratis untuk calon murid baru. Hubungi kami via WhatsApp untuk menjadwalkan.</div>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Di mana lokasi sekolahnya?</summary>
            <div className="faq-a">Studio utama berada di Bandung, Jawa Barat. Kelas privat dapat diadakan di lokasi murid (dalam kota Bandung) dengan biaya transportasi tambahan.</div>
          </details>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-inner">
          <h2>Siap Memulai<br /><em>Perjalananmu?</em></h2>
          <p>Daftar sesi trial gratis untuk merasakan kelas kami secara langsung — tanpa biaya, tanpa komitmen.</p>
          <Link href="/kontak?topic=artschool&trial=1" className="btn-gold">
            Daftar Trial Gratis
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
