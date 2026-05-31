-- SEED DATA KOSTUM
insert into public.kostum (slug, name, category, category_label, status, description, full_description, bahan, ukuran, aksesoris, stok, harga_sewa, harga_beli, accent_color, motif_type)
values 
('merak', 'Tari Merak', 'klasik', 'Tari Klasik', 'both', 'Kostum ikonik Tari Merak ciptaan Raden Tjetje Somantri.', 'Kostum Tari Merak dengan detail bordir tangan, payet emas, dan sayap merak terbentang.', 'Beludru, Sutra, Payet', 'S, M, L, XL', 'Mahkota, Gelang, Sayap', '12 pasang', '350.000', '4.500.000', '#5080d0', 'merak'),
('jaipong', 'Tari Jaipong', 'kreasi', 'Tari Kreasi', 'both', 'Kostum Jaipong klasik dengan kebaya bordir.', 'Kostum Tari Jaipong dengan kebaya brokat, sinjang batik, apok dengan payet.', 'Brokat, Batik Tulis', 'S, M, L', 'Selendang, Sanggul', '20 pasang', '275.000', '3.200.000', '#c47b3a', 'kebaya');

-- SEED DATA EVENTS
insert into public.events (year, title, description, is_highlight, tari_title, tari_list, display_order)
values 
('2023 - 2024', 'Little Asia, Arab Saudi', 'Mewakili Indonesia dalam festival budaya internasional di Jeddah.', true, 'Menampilkan 5 Tarian Nusantara', 'Tari Blantek, Tari Merak, Tari Mojang, Tari Legong, Tari Piring', 1),
('2025', 'World Expo Osaka, Jepang', 'Perwakilan resmi Kabupaten Bogor di kancah global.', true, 'Sajian Pertunjukan', 'Lagu Khas Bogor, Tari Kaulinan Barudak', 2);
