-- Membuat bucket 'uploads' untuk menyimpan gambar
insert into storage.buckets (id, name, public)
values ('uploads', 'uploads', true);

-- Kebijakan akses publik (hanya baca)
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'uploads' );

-- Kebijakan untuk upload (hanya admin/service role yang bisa lewat server actions)
-- Karena kita pakai service role key di server actions, kita tidak butuh policy 'insert' publik.
-- Namun jika ingin via dashboard tetap lancar, service role sudah otomatis punya akses.
