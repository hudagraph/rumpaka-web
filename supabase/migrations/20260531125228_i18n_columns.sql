-- UPDATE KOSTUM TABLE
alter table public.kostum 
add column name_en text,
add column category_label_en text,
add column description_en text,
add column full_description_en text;

-- UPDATE EVENTS TABLE
alter table public.events
add column title_en text,
add column description_en text,
add column tari_title_en text,
add column tari_list_en text;

-- UPDATE GALLERY TABLE
alter table public.gallery
add column title_en text;

-- BACKFILL DATA (Optional: Copy current ID data to EN as placeholder)
update public.kostum set name_en = name, category_label_en = category_label, description_en = description, full_description_en = full_description;
update public.events set title_en = title, description_en = description, tari_title_en = tari_title, tari_list_en = tari_list;
update public.gallery set title_en = title;
