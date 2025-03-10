import { supabase } from "$lib/Supabase/SupabaseClient";
import { json, redirect } from "@sveltejs/kit";

// export const POST = async ({ cookies }) => {
//     const { error } = await supabase.auth.signOut();
//     if (error) {
//         return json({ error: "Failed to log out" }, { status: 500 });
//     }
//     // Clear cookies (if using cookie-based authentication)
//     cookies.delete("sb-access-token", { path: "/" });
//     cookies.delete("sb-refresh-token", { path: "/" });

//     redirect(303 , '/')
//     return json({ success: true });
// };


// import { error , redirect } from "@sveltejs/kit";
// //@ts-ignore
// import type { RequestHandler } from "./$types";
// import { supabase } from "$lib/Supabase/SupabaseClient";


// export const POST : RequestHandler = async({locals}) => {
//     const {error} = await supabase.auth.signOut()
//     if(error){
//         console.error(500 , "Something went wrong logging you out.")

//     }
//     throw redirect(303 , '/')
// }

export const GET = async ({ locals: { supabase } }) => {
    await supabase.auth.signOut();
  
    redirect(307, "/");
  };