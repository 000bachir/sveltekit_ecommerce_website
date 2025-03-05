import { error , redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const POST : RequestHandler = async ({locals:{supabase}}) => {
    const {error :err } = await supabase.auth.signOut()

    if(error){
        throw error(500,"something went wrong logging you out")
    }

    throw redirect(303 , "/")
    

}