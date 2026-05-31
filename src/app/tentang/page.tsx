import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./about.css";

export const metadata: Metadata = {
  title: "Tentang Kami — PT Sanggar Seni Annisa Rumpaka",
  description: "Profil Sanggar Seni Annisa Rumpaka: Visi misi, sejarah sejak 2008, dan bidang jasa kami dalam pelestarian serta internasionalisasi budaya Indonesia.",
};

export default function TentangPage() {
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
            <span>Tentang Kami</span>
          </div>
          <h1 id="page-hero-title">Profil<br /><em>Sanggar</em></h1>
          <p>Mengenal lebih dekat perjalanan, visi, dan dedikasi kami dalam melestarikan budaya Indonesia di kancah global.</p>
        </div>
      </section>

      <div className="about-wrap">
        {/* PROFIL SANGGAR */}
        <section className="profil-sec">
          <div className="profil-txt">
            <h2>Sanggar Seni<br/><span>Annisa Rumpaka</span></h2>
            <p>Sanggar Seni Annisa Rumpaka adalah institusi seni pertunjukan yang berfokus pada pelestarian, pengembangan, dan internasionalisasi budaya Indonesia melalui karya tari dan pertunjukan yang inovatif.</p>
            <p>Didirikan pada tahun 2008 dan berbasis di Bogor, Indonesia, sanggar ini telah berkembang menjadi platform kreatif yang menghubungkan nilai-nilai tradisional dengan pendekatan artistik kontemporer. Dengan dukungan pelatih profesional dan seniman berpengalaman, Annisa Rumpaka secara konsisten menghadirkan karya yang tidak hanya estetis, tetapi juga memiliki nilai edukatif dan diplomasi budaya.</p>
            <p>Seiring dengan meningkatnya kepercayaan dari berbagai institusi dan masyarakat, Sanggar Seni Annisa Rumpaka aktif berpartisipasi dalam berbagai panggung nasional dan internasional sebagai representasi budaya Indonesia.</p>
          </div>
          <div className="profil-img" aria-hidden="true"></div>
        </section>

        {/* VISI MISI */}
        <section className="vm-sec">
          <div className="v-box">
            <h3>VISI</h3>
            <p>Menjadi institusi seni pertunjukan terkemuka yang menghadirkan kekayaan budaya Indonesia di panggung global. Dengan mengedepankan inovasi, keautentikan, dan standar kualitas internasional, kami berkomitmen untuk melestarikan dan mempromosikan seni tradisional Indonesia sekaligus menciptakan karya yang kompetitif, relevan, dan bernilai tinggi di kancah internasional.</p>
          </div>
          <div className="m-box">
            <h3>MISI</h3>
            <ul className="m-list">
              <li>Mengembangkan seni tari tradisional Indonesia melalui pendekatan kreatif dan kontemporer tanpa meninggalkan nilai budaya aslinya.</li>
              <li>Menjadi duta budaya Indonesia dalam berbagai forum dan event internasional sebagai bentuk diplomasi budaya.</li>
              <li>Menciptakan karya pertunjukan yang mampu menjangkau audiens global melalui storytelling yang kuat dan visual yang estetis.</li>
              <li>Meningkatkan kualitas sumber daya manusia di bidang seni melalui pelatihan profesional dan berkelanjutan.</li>
              <li>Membangun kolaborasi lintas negara dan budaya untuk memperluas eksposur seni Indonesia di tingkat dunia.</li>
            </ul>
          </div>
        </section>

        {/* BIDANG JASA */}
        <section className="jasa-sec">
          <div className="jasa-sec-head">
            <h2>Layanan & Kegiatan Seni</h2>
            <p>Kami menyediakan berbagai layanan seni pertunjukan yang dapat disesuaikan dengan kebutuhan acara nasional maupun internasional, antara lain:</p>
          </div>
          <div className="jasa-grid">
            <div className="jasa-card">
              <div className="jasa-card-num">01</div>
              <h4>Pertunjukan Tari Tradisional & Kontemporer</h4>
            </div>
            <div className="jasa-card">
              <div className="jasa-card-num">02</div>
              <h4>Cultural Performance Event Internasional & Diplomatik</h4>
            </div>
            <div className="jasa-card">
              <div className="jasa-card-num">03</div>
              <h4>Opening & Welcoming Performance Resmi</h4>
            </div>
            <div className="jasa-card">
              <div className="jasa-card-num">04</div>
              <h4>Kolaborasi Seni Lintas Budaya</h4>
            </div>
            <div className="jasa-card">
              <div className="jasa-card-num">05</div>
              <h4>Produksi Pertunjukan Tematik (Festival, Expo)</h4>
            </div>
            <div className="jasa-card">
              <div className="jasa-card-num">06</div>
              <h4>Pelatihan dan Workshop Seni Tari</h4>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
