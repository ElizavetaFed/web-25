import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Устанавливаем связь между проектом на ПК и базой данных
export const supabase = createClient(supabaseUrl, supabaseKey);
