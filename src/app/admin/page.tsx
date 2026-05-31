"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { 
  login, logout, getSession, 
  addKostum, updateKostum, deleteKostum,
  addEvent, updateEvent, deleteEvent,
  addGallery, updateGallery, deleteGallery,
  uploadImage 
} from "./actions";

type Tab = "kostum" | "events" | "gallery";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("kostum");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<any[]>([]);
  const [isActionLoading, setIsActionLoading] = useState(false);
  
  // Form State
  const [showModal, setShowAdd] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [newKostum, setNewKostum] = useState({
    name: "", slug: "", category: "klasik", category_label: "Tari Klasik",
    status: "both", description: "", full_description: "",
    bahan: "", ukuran: "", aksesoris: "", stok: "",
    harga_sewa: "", harga_beli: "", motif_type: "kebaya", image_url: ""
  });
  const [newEvent, setNewEvent] = useState({
    year: "", title: "", description: "", tari_title: "", tari_list: "", is_highlight: false, image_url: ""
  });
  const [newGallery, setNewGallery] = useState({
    title: "", image_url: "", aspect_ratio: "4/3"
  });

  useEffect(() => {
    async function check() {
      const session = await getSession();
      if (session) setIsLoggedIn(true);
      setIsLoading(false);
    }
    check();
  }, []);

  useEffect(() => {
    if (isLoggedIn) fetchData();
  }, [isLoggedIn, activeTab]);

  async function fetchData() {
    setIsLoading(true);
    let table = activeTab === "kostum" ? "kostum" : activeTab === "events" ? "events" : "gallery";
    let order = activeTab === "events" ? "display_order" : "created_at";
    
    const { data } = await supabase.from(table).select('*').order(order, { ascending: activeTab === "events" });
    if (data) setItems(data);
    setIsLoading(false);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const success = await login(password);
    if (success) setIsLoggedIn(true);
    else alert("Password salah!");
  }

  async function handleLogout() {
    await logout();
    setIsLoggedIn(false);
  }

  async function onFileChange(e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsActionLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await uploadImage(formData);
    if (res.success) callback(res.url!);
    else alert("Gagal upload: " + res.error);
    setIsActionLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Hapus data ini?")) return;
    setIsActionLoading(true);
    let res;
    if (activeTab === "kostum") res = await deleteKostum(id);
    else if (activeTab === "events") res = await deleteEvent(id);
    else res = await deleteGallery(id);
    if (res.success) fetchData();
    else alert("Error: " + res.error);
    setIsActionLoading(false);
  }

  function openEdit(item: any) {
    setEditingId(item.id);
    if (activeTab === "kostum") {
      setNewKostum({
        name: item.name, slug: item.slug, category: item.category, 
        category_label: item.category_label, status: item.status, 
        description: item.description, full_description: item.full_description,
        bahan: item.bahan, ukuran: item.ukuran, aksesoris: item.aksesoris, 
        stok: item.stok, harga_sewa: item.harga_sewa, harga_beli: item.harga_beli, 
        motif_type: item.motif_type, image_url: item.image_url
      });
    } else if (activeTab === "events") {
      setNewEvent({
        year: item.year, title: item.title, description: item.description,
        tari_title: item.tari_title, tari_list: item.tari_list,
        is_highlight: item.is_highlight, image_url: item.image_url
      });
    } else {
      setNewGallery({
        title: item.title, image_url: item.image_url, aspect_ratio: item.aspect_ratio
      });
    }
    setShowAdd(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsActionLoading(true);
    let res;
    
    if (activeTab === "kostum") {
      res = editingId ? await updateKostum(editingId, newKostum) : await addKostum(newKostum);
    } else if (activeTab === "events") {
      res = editingId ? await updateEvent(editingId, newEvent) : await addEvent(newEvent);
    } else {
      res = editingId ? await updateGallery(editingId, newGallery) : await addGallery(newGallery);
    }

    if (res.success) {
      setShowAdd(false);
      setEditingId(null);
      fetchData();
      // Reset
      setNewKostum({ name: "", slug: "", category: "klasik", category_label: "Tari Klasik", status: "both", description: "", full_description: "", bahan: "", ukuran: "", aksesoris: "", stok: "", harga_sewa: "", harga_beli: "", motif_type: "kebaya", image_url: "" });
      setNewEvent({ year: "", title: "", description: "", tari_title: "", tari_list: "", is_highlight: false, image_url: "" });
      setNewGallery({ title: "", image_url: "", aspect_ratio: "4/3" });
    } else {
      alert("Error: " + res.error);
    }
    setIsActionLoading(false);
  }

  if (isLoading && !items.length) return <div className="admin-loading">Memuat...</div>;

  if (!isLoggedIn) {
    return (
      <div className="admin-login-wrap">
        <form onSubmit={handleLogin} className="admin-login-card">
          <h1>Admin Rumpaka</h1>
          <p>Masukkan password untuk mengelola konten.</p>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <style jsx>{`
          .admin-login-wrap { height: 100vh; display: flex; align-items: center; justify-content: center; background: #070707; color: white; font-family: sans-serif; }
          .admin-login-card { background: #111; padding: 40px; border-radius: 16px; width: 100%; max-width: 400px; border: 1px solid #222; }
          h1 { margin-bottom: 8px; font-size: 24px; }
          p { color: #888; font-size: 14px; margin-bottom: 24px; }
          input { width: 100%; padding: 12px; background: #222; border: 1px solid #333; border-radius: 8px; color: white; margin-bottom: 16px; outline: none; }
          button { width: 100%; padding: 12px; background: #c8a96e; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="header-content">
          <div className="brand">
            <h1>Admin Rumpaka</h1>
            <p>Content Management System</p>
          </div>
          <nav className="tabs">
            <button className={activeTab === "kostum" ? "active" : ""} onClick={() => setActiveTab("kostum")}>Katalog Kostum</button>
            <button className={activeTab === "events" ? "active" : ""} onClick={() => setActiveTab("events")}>Event & Porto</button>
            <button className={activeTab === "gallery" ? "active" : ""} onClick={() => setActiveTab("gallery")}>Galeri Foto</button>
          </nav>
          <button onClick={handleLogout} className="logout-btn">Keluar</button>
        </div>
      </header>

      <main className="admin-content">
        <div className="actions-bar">
          <div>
            <h2 className="content-title">Daftar {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p className="content-subtitle">Total: {items.length} item</p>
          </div>
          <button onClick={() => { setEditingId(null); setShowAdd(true); }} className="add-btn" disabled={isActionLoading}>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="3" style={{marginRight: 8}}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Tambah {activeTab}
          </button>
        </div>

        <div className="table-wrap">
          {isLoading ? <div style={{padding: 20}}>Memuat data...</div> : (
            <table>
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Detail</th>
                  <th style={{textAlign: 'right'}}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td style={{width: 80}}>
                      <div className="preview-box">
                        {item.image_url && <img src={item.image_url} alt="" />}
                      </div>
                    </td>
                    <td>
                      <div className="item-main">{item.name || item.title}</div>
                      <div className="item-sub">{item.category_label || item.year || item.aspect_ratio}</div>
                    </td>
                    <td style={{textAlign: 'right'}}>
                      <div style={{display: 'flex', gap: 8, justifyContent: 'flex-end'}}>
                        <button onClick={() => openEdit(item)} className="edit-btn">Edit</button>
                        <button onClick={() => handleDelete(item.id)} className="del-btn" disabled={isActionLoading}>Hapus</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2>{editingId ? 'Edit' : 'Tambah'} {activeTab} Baru</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                {activeTab === "kostum" && (
                  <>
                    <div className="field">
                      <label>Nama Kostum</label>
                      <input required value={newKostum.name} onChange={e => setNewKostum({...newKostum, name: e.target.value})} />
                    </div>
                    <div className="field">
                      <label>Slug (URL)</label>
                      <input required value={newKostum.slug} onChange={e => setNewKostum({...newKostum, slug: e.target.value})} />
                    </div>
                    <div className="field">
                      <label>Kategori</label>
                      <select value={newKostum.category} onChange={e => setNewKostum({...newKostum, category: e.target.value})}>
                        <option value="klasik">Klasik</option><option value="kreasi">Kreasi</option><option value="anak">Anak</option><option value="adat">Adat</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Harga Sewa</label>
                      <input value={newKostum.harga_sewa} onChange={e => setNewKostum({...newKostum, harga_sewa: e.target.value})} />
                    </div>
                  </>
                )}

                {activeTab === "events" && (
                  <>
                    <div className="field">
                      <label>Tahun</label>
                      <input required value={newEvent.year} onChange={e => setNewEvent({...newEvent, year: e.target.value})} />
                    </div>
                    <div className="field">
                      <label>Judul Event</label>
                      <input required value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} />
                    </div>
                  </>
                )}

                {activeTab === "gallery" && (
                  <>
                    <div className="field">
                      <label>Judul (Opsional)</label>
                      <input value={newGallery.title} onChange={e => setNewGallery({...newGallery, title: e.target.value})} />
                    </div>
                    <div className="field">
                      <label>Aspect Ratio</label>
                      <select value={newGallery.aspect_ratio} onChange={e => setNewGallery({...newGallery, aspect_ratio: e.target.value})}>
                        <option value="4/3">4:3 (Landscape)</option><option value="3/4">3:4 (Portrait)</option><option value="1/1">1:1 (Square)</option>
                      </select>
                    </div>
                  </>
                )}

                <div className="field full">
                  <label>Gambar (Upload Baru atau Link)</label>
                  <div className="upload-zone">
                    {(activeTab === 'kostum' ? newKostum.image_url : activeTab === 'events' ? newEvent.image_url : newGallery.image_url) && (
                      <div className="current-preview">
                        <img 
                          src={activeTab === 'kostum' ? newKostum.image_url : activeTab === 'events' ? newEvent.image_url : newGallery.image_url} 
                          alt="Preview" 
                        />
                        <div className="preview-badge">✓ Terupload</div>
                      </div>
                    )}
                    <div className="upload-inputs">
                      <input type="file" accept="image/*" onChange={e => onFileChange(e, (url) => {
                        if(activeTab === 'kostum') setNewKostum({...newKostum, image_url: url});
                        if(activeTab === 'events') setNewEvent({...newEvent, image_url: url});
                        if(activeTab === 'gallery') setNewGallery({...newGallery, image_url: url});
                      })} />
                      <input 
                        placeholder="Atau masukkan URL gambar"
                        value={(activeTab === 'kostum' ? newKostum.image_url : activeTab === 'events' ? newEvent.image_url : newGallery.image_url) || ''}
                        onChange={e => {
                          const url = e.target.value;
                          if(activeTab === 'kostum') setNewKostum({...newKostum, image_url: url});
                          if(activeTab === 'events') setNewEvent({...newEvent, image_url: url});
                          if(activeTab === 'gallery') setNewGallery({...newGallery, image_url: url});
                        }}
                        style={{marginTop: 8}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <button type="button" onClick={() => { setShowAdd(false); setEditingId(null); }} className="cancel-btn">Batal</button>
                <button type="submit" className="save-btn" disabled={isActionLoading}>
                  {isActionLoading ? "Proses..." : "Simpan Perubahan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .admin-dashboard { min-height: 100vh; background: #f8fafc; font-family: 'Inter', system-ui, sans-serif; color: #1e293b; }
        .admin-header { background: #0f172a; color: white; padding: 0 40px; position: sticky; top: 0; z-index: 100; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
        .header-content { max-width: 1200px; margin: 0 auto; height: 80px; display: flex; align-items: center; justify-content: space-between; }
        .brand h1 { font-size: 18px; margin: 0; font-weight: 800; letter-spacing: -0.025em; color: #f1f5f9; }
        .brand p { font-size: 11px; color: #94a3b8; margin: 2px 0 0 0; text-transform: uppercase; letter-spacing: 0.05em; }
        .tabs { display: flex; gap: 4px; background: #1e293b; padding: 4px; border-radius: 10px; margin: 0 20px; }
        .tabs button { background: transparent; border: none; color: #94a3b8; cursor: pointer; padding: 8px 16px; border-radius: 7px; font-size: 13px; font-weight: 600; transition: all 0.2s; }
        .tabs button:hover { color: #f1f5f9; }
        .tabs button.active { background: #0f172a; color: #c8a96e; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
        .logout-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; transition: all 0.2s; }
        .logout-btn:hover { background: #ef4444; border-color: #ef4444; color: white; }
        .admin-content { padding: 48px 40px; max-width: 1200px; margin: 0 auto; }
        .actions-bar { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; }
        .content-title { font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.025em; color: #0f172a; }
        .content-subtitle { font-size: 14px; color: #64748b; margin: 4px 0 0 0; }
        .add-btn { background: #0f172a; color: white; padding: 12px 24px; border: none; border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer; display: flex; align-items: center; transition: transform 0.2s; }
        .add-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); }
        .table-wrap { background: white; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); }
        table { width: 100%; border-collapse: collapse; }
        th { text-align: left; padding: 16px 24px; background: #f8fafc; color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0; }
        td { padding: 20px 24px; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: middle; }
        .preview-box { width: 56px; height: 56px; background: #f1f5f9; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; }
        .preview-box img { width: 100%; height: 100%; object-fit: cover; }
        .item-main { font-weight: 700; color: #0f172a; font-size: 15px; }
        .item-sub { font-size: 12px; color: #64748b; margin-top: 2px; }
        .edit-btn { color: #0f172a; background: #f1f5f9; padding: 6px 12px; border-radius: 6px; border: none; cursor: pointer; font-size: 12px; font-weight: 700; }
        .edit-btn:hover { background: #e2e8f0; }
        .del-btn { color: #ef4444; background: #fee2e2; padding: 6px 12px; border-radius: 6px; border: none; cursor: pointer; font-size: 12px; font-weight: 700; }
        .del-btn:hover { background: #ef4444; color: white; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 24px; }
        .modal-card { background: white; padding: 40px; border-radius: 24px; width: 100%; max-width: 600px; max-height: 90vh; overflow-y: auto; }
        .modal-card h2 { margin-top: 0; margin-bottom: 32px; font-size: 22px; font-weight: 800; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
        .field.full { grid-column: span 2; }
        label { font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; }
        input, select, textarea { padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 10px; font-size: 14px; background: #f8fafc; }
        .upload-zone { border: 1px dashed #e2e8f0; border-radius: 12px; padding: 20px; background: #fff; }
        .current-preview { position: relative; width: 100%; height: 160px; border-radius: 10px; overflow: hidden; margin-bottom: 16px; border: 1px solid #f1f5f9; }
        .current-preview img { width: 100%; height: 100%; object-fit: cover; }
        .preview-badge { position: absolute; top: 10px; right: 10px; background: #10b981; color: white; padding: 4px 10px; border-radius: 100px; font-size: 10px; font-weight: 800; }
        .upload-inputs { display: flex; flex-direction: column; gap: 8px; }
        
        .modal-footer { display: flex; justify-content: flex-end; gap: 12px; margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9; }
        .cancel-btn { background: #f1f5f9; color: #64748b; border: none; padding: 12px 24px; border-radius: 10px; cursor: pointer; font-weight: 700; }
        .save-btn { background: #c8a96e; color: #0f172a; padding: 12px 32px; border: none; border-radius: 10px; font-weight: 800; cursor: pointer; }
      `}</style>
    </div>
  );
}
