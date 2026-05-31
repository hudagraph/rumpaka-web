-- Membuat bucket 'uploads' jika belum ada
insert into storage.buckets (id, name, public)
select 'uploads', 'uploads', true
where not exists (
  select 1 from storage.buckets where id = 'uploads'
);

-- Kebijakan akses publik (hanya baca)
-- Gunakan drop policy agar tidak error saat push ulang
drop policy if exists "Public Access" on storage.objects;

create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'uploads' );
