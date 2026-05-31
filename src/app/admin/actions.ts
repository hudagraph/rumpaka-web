"use server";

import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabaseServer";
import { revalidatePath } from "next/cache";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SESSION_COOKIE = "rumpaka_admin_session";

export async function login(password: string) {
  if (password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
    });
    return true;
  }
  return false;
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value === "authenticated";
}

async function verifyAuth() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
}

// KOSTUM ACTIONS
export async function addKostum(data: any) {
  try {
    await verifyAuth();
    const { error } = await supabaseAdmin.from('kostum').insert([data]);
    if (error) throw error;
    revalidatePath("/", "layout");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function updateKostum(id: string, data: any) {
  try {
    await verifyAuth();
    const { error } = await supabaseAdmin.from('kostum').update(data).eq('id', id);
    if (error) throw error;
    revalidatePath("/", "layout");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function deleteKostum(id: string) {
  try {
    await verifyAuth();
    const { error } = await supabaseAdmin.from('kostum').delete().eq('id', id);
    if (error) throw error;
    revalidatePath("/", "layout");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

// EVENT ACTIONS
export async function addEvent(data: any) {
  try {
    await verifyAuth();
    const { error } = await supabaseAdmin.from('events').insert([data]);
    if (error) throw error;
    revalidatePath("/", "layout");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function updateEvent(id: string, data: any) {
  try {
    await verifyAuth();
    const { error } = await supabaseAdmin.from('events').update(data).eq('id', id);
    if (error) throw error;
    revalidatePath("/", "layout");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function deleteEvent(id: string) {
  try {
    await verifyAuth();
    const { error } = await supabaseAdmin.from('events').delete().eq('id', id);
    if (error) throw error;
    revalidatePath("/", "layout");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

// GALLERY ACTIONS
export async function addGallery(data: any) {
  try {
    await verifyAuth();
    const { error } = await supabaseAdmin.from('gallery').insert([data]);
    if (error) throw error;
    revalidatePath("/", "layout");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function updateGallery(id: string, data: any) {
  try {
    await verifyAuth();
    const { error } = await supabaseAdmin.from('gallery').update(data).eq('id', id);
    if (error) throw error;
    revalidatePath("/", "layout");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function deleteGallery(id: string) {
  try {
    await verifyAuth();
    const { error } = await supabaseAdmin.from('gallery').delete().eq('id', id);
    if (error) throw error;
    revalidatePath("/", "layout");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

// STORAGE ACTIONS
export async function uploadImage(formData: FormData) {
  try {
    await verifyAuth();
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file provided");

    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error } = await supabaseAdmin.storage
      .from('uploads')
      .upload(filePath, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabaseAdmin.storage
      .from('uploads')
      .getPublicUrl(filePath);

    return { success: true, url: publicUrl };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
