# Master Plan Migrasi: HTML Statis ke Next.js + Supabase Headless CMS

## Objektif
Memigrasikan website statis (HTML/CSS/JS) "PT Sanggar Seni Annisa Rumpaka" yang ada saat ini menjadi aplikasi web modern dan dinamis menggunakan Next.js (App Router) dan Supabase sebagai Headless CMS.

## Persyaratan Utama & Batasan
1.  **Akurasi Desain (Fidelity) 100%:** Desain, animasi, dan styling harus **sama persis** dengan versi statis saat ini. Kita akan menggunakan file CSS vanilla yang sudah ada (Global CSS/CSS Modules) daripada menulis ulang ke Tailwind untuk menjamin konsistensi visual 100%.
2.  **Dashboard Admin Kustom:** Route `/admin` kustom yang aman harus dibangun di dalam aplikasi Next.js untuk mengelola konten, menggunakan bahasa desain yang sama dengan situs utamanya. Supabase Studio tidak akan digunakan untuk manajemen konten sehari-hari oleh klien.
3.  **Alur Kerja Integrasi Seamless:** Memberikan panduan langkah demi langkah untuk mengintegrasikan GitHub, Vercel, dan Supabase secara spesifik.

## Arsitektur
-   **Framework:** Next.js (App Router, TypeScript)
-   **Styling:** CSS Vanilla (Menggunakan kembali `base.css`, `components.css`, `nav.css`, dll yang sudah ada)
-   **Backend & Database:** Supabase (PostgreSQL untuk data terstruktur, Supabase Storage untuk gambar/aset).
-   **Autentikasi:** Supabase Auth (Email/Password) untuk mengamankan dashboard `/admin`.
-   **Hosting & CI/CD:** Vercel terhubung ke repositori GitHub.

---

## Fase Implementasi

### Fase 1: Setup Lingkungan & Proyek (Panduan Setup)
*Fase ini melibatkan langkah manual oleh pengguna, dipandu oleh CLI.*

1.  **Persiapan GitHub & Lokal:**
    -   Pastikan direktori saat ini dilacak (tracked) oleh Git.
    -   Commit semua file statis saat ini.
    -   Push ke repositori GitHub baru (misalnya, `rumpaka-web-next`).
2.  **Setup Supabase:**
    -   Buat proyek baru di [Supabase](https://supabase.com/).
    -   Ambil `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3.  **Integrasi Vercel:**
    -   Buat proyek baru di [Vercel](https://vercel.com/) dan impor repositori GitHub.
    -   Instal **Supabase Integration** dari Vercel Marketplace (ini secara otomatis menyinkronkan environment variables Supabase ke Vercel).
4.  **Inisialisasi Next.js:**
    -   Inisialisasi Next.js di branch baru atau folder terstruktur menggunakan `create-next-app` (Pilih App Router, tanpa Tailwind, biarkan minimalis).
    -   Instal library client Supabase: `@supabase/supabase-js` dan `@supabase/ssr`.

### Fase 2: Translasi UI & Komponen Statis
*Tujuan: Mereplikasi situs statis saat ini persis sama di dalam arsitektur React Next.js sebelum menambahkan data dinamis.*

1.  **Migrasi Aset:** Pindahkan `assets/css`, `assets/img`, `assets/js` ke dalam direktori `public/` Next.js atau tangani CSS melalui impor global Next.js.
2.  **Layout & Global CSS:** Siapkan `app/layout.tsx` untuk memasukkan font (Plus Jakarta Sans, Playfair Display) dan impor file CSS global. Pastikan struktur DOM yang ada di `<body>` (skip-links, kursor) dipertahankan.
3.  **Ekstraksi Komponen:** 
    -   Ubah Navigasi (`<nav>`) menjadi Client Component (untuk menangani state menu hamburger).
    -   Ubah Hero Slider, Bagian Tentang, Footer, dll., menjadi komponen React.
    -   Adaptasi logika JS vanilla (misalnya, `cursor.js`, logika slider) menjadi hooks `useEffect` React atau pertahankan sebagai tag `<script>` statis jika sangat diperlukan untuk animasi kompleks, meskipun mengubah state slider ke pola React lebih disarankan.
4.  **Routing:** Buat ulang halaman statis (`/`, `/tentang`, `/layanan`, `/portofolio`, `/galeri`, `/kontak`) sebagai segmen route Next.js.
5.  **Validasi:** Pastikan situs terlihat dan berperilaku sama persis seperti HTML statis aslinya.

### Fase 3: Skema Database & Konfigurasi Supabase
*Tujuan: Merancang database untuk menampung konten yang saat ini di-hardcode dalam HTML.*

1.  **Desain Skema (SQL):** Buat tabel untuk konten dinamis. Fokus awal:
    -   `hero_slides` (title, description, image_url, category, order)
    -   `services` (name, description, image_url, category)
    -   `portfolio_items` (title, event_date, location, description, images)
    -   `gallery` (image_url, caption)
2.  **Storage Buckets:** Buat bucket Supabase Storage (misalnya, `public-assets`) untuk menampung gambar yang diunggah.
3.  **Row Level Security (RLS):** Konfigurasikan kebijakan RLS:
    -   Akses baca publik (Public read) untuk semua tabel.
    -   Akses Tulis/Perbarui/Hapus (Write/Update/Delete) dibatasi hanya untuk pengguna admin yang diautentikasi.

### Fase 4: Pembuatan Dashboard Kustom `/admin`
*Tujuan: Membangun antarmuka CMS yang aman yang sesuai dengan estetika merek.*

1.  **Implementasi Auth:**
    -   Buat halaman login (`/admin/login`).
    -   Implementasikan Supabase SSR Auth untuk melindungi layout `/admin`. Arahkan pengguna yang belum login ke `/admin/login`.
2.  **Layout Dashboard:** Buat navigasi sidebar untuk panel admin (Kelola Slide, Kelola Layanan, Kelola Galeri). Terapkan token desain yang ada (warna, tipografi) agar terlihat natural menyatu dengan merek.
3.  **Antarmuka CRUD:**
    -   Buat form untuk Membuat (Create), Membaca (Read), Memperbarui (Update), dan Menghapus (Delete) entri untuk setiap tabel.
    -   Integrasikan pengunggahan gambar ke Supabase Storage di dalam form ini.

### Fase 5: Menghubungkan Frontend ke Backend
*Tujuan: Mengganti data komponen React yang di-hardcode dengan pengambilan data (fetch) dari Supabase.*

1.  **Pengambilan Data (Data Fetching):** Perbarui halaman publik (misalnya, `app/page.tsx`) untuk mengambil data dari Supabase menggunakan Server Components untuk performa dan SEO yang optimal.
2.  **Static Generation / Revalidation:** Konfigurasikan caching/revalidation (ISR) Next.js sehingga situs tetap cepat tetapi diperbarui ketika admin mengubah konten di dashboard.
3.  **Sentuhan Akhir:** Verifikasi tag meta, SEO (JSON-LD), dan gambar Open Graph sudah dinamis di mana hal tersebut diperlukan.

## Verifikasi & Pengujian
-   **Regresi Visual:** Bandingkan output Next.js berdampingan dengan `index.html` asli untuk memastikan nol pergeseran CSS/layout.
-   **Pengujian Auth:** Verifikasi bahwa mengakses `/admin` tanpa login akan mengarahkan (redirect) ke halaman login.
-   **Pengujian CRUD:** Verifikasi bahwa menambahkan hero slide baru di dashboard admin memperbarui halaman beranda publik dengan benar setelah di-refresh.

## Migrasi & Rollback
-   **Migrasi Aman:** Aplikasi Next.js akan dibangun di branch Git terpisah (`feat/nextjs-migration`). Branch `main` saat ini tetap utuh.
-   **Rollback:** Jika deployment Vercel gagal atau bermasalah, Vercel memungkinkan rollback instan ke deployment sebelumnya. Alternatifnya, kita dapat mengembalikan branch default GitHub kembali ke file statis.