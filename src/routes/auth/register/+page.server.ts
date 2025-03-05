import { fail , redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions : Actions =  {

    signup : async ({request , locals : {supabase}}) => {
        const formData = await request.formData()
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        if(!email){
            return fail(400 , {
                email , missing : true
            })
        }
        if(!password){
            return fail(400 , {
                email , incorrect : true
            })
        }

        const {error} = await supabase.auth.signUp({email , password})
        if(error){
            console.error(error)
            redirect(303 , '/auth/error')
        }else {
            redirect(303 , '/private/market')
        }
    }, 

    

}