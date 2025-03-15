import { supabase } from "$lib/Supabase/SupabaseClient";
import { json, redirect } from "@sveltejs/kit";


export const GET = async ({ locals: { supabase } }) => {
    await supabase.auth.signOut();
  
    redirect(307, "/");
  };