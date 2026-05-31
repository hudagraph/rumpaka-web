-- TABEL KOSTUM
create table public.kostum (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  name text not null,
  category text not null, -- klasik, kreasi, anak, adat
  category_label text not null,
  status text not null, -- sewa, beli, both
  description text,
  full_description text,
  bahan text,
  ukuran text,
  aksesoris text,
  stok text,
  harga_sewa text,
  harga_beli text,
  accent_color text default '#c8a96e',
  motif_type text default 'kebaya', -- merak, kebaya, topeng, siger, wayang
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- TABEL EVENT (PORTOFOLIO)
create table public.events (
  id uuid default gen_random_uuid() primary key,
  year text not null,
  title text not null,
  description text,
  image_url text,
  tari_title text,
  tari_list text,
  is_highlight boolean default false,
  display_order int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- TABEL GALERI
create table public.gallery (
  id uuid default gen_random_uuid() primary key,
  title text,
  image_url text not null,
  aspect_ratio text default '4/3',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- AKTIFKAN RLS (Row Level Security)
alter table public.kostum enable row level security;
alter table public.events enable row level security;
alter table public.gallery enable row level security;

-- POLICIES
create policy "Allow public read" on public.kostum for select using (true);
create policy "Allow public read" on public.events for select using (true);
create policy "Allow public read" on public.gallery for select using (true);
