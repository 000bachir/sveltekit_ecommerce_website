import { supabase } from "$lib/Supabase/SupabaseClient";
import { json } from "@sveltejs/kit";

export const POST = async ({ cookies }) => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        return json({ error: "Failed to log out" }, { status: 500 });
    }
    // Clear cookies (if using cookie-based authentication)
    cookies.delete("sb-access-token", { path: "/" });
    cookies.delete("sb-refresh-token", { path: "/" });

    return json({ success: true });
};
