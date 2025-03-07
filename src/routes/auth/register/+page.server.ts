import { fail, redirect } from "@sveltejs/kit";
//@ts-ignore
import type { Actions } from "./$types";


type FormError = {
    missingEmail?: boolean;
    missingPassword?: boolean;
    error?: string;
};

export const actions: Actions = {
    signup: async ({ request, locals: { supabase } }):Promise<FormError | any>  => {
        const formData = await request.formData();
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const userame = formData.get("username") as string

        if (!email || typeof email !== "string") {
            return fail(400, { missingEmail: true });
        }
        if (!password || typeof email !== "string") {
            return fail(400, { missingPassword: true });
        }

        const { error } = await supabase.auth.signUp({ email, password });
        
        if (error) {
            console.error(error);
            redirect(303, '/auth/error')
        }else{
            redirect(303, "/verify");
        }

    }
};
