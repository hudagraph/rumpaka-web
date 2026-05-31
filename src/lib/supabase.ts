import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client ini aman untuk diimpor di Client Components karena hanya menggunakan Anon Key
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
