import type { PageServerLoad } from './$types';
import { AuthApiError , type Provider } from '@supabase/supabase-js';

import { fail , redirect } from '@sveltejs/kit';
import type { Actions } from './$types';


const Oauth_Providers = [
    "google" , 
    "discord" , 
    "github" , 
]



export const actions : Actions =  {
    login : async({request ,url , locals : {supabase}}) => {
        const provider = url.searchParams.get('provider') as Provider

        if(provider){
            if(!Oauth_Providers.includes(provider)){
                return fail(400 , {
                    error : "Provider not supported"
                })
            }
            const {data , error} = await supabase.auth.signInWithOAuth({
                provider : provider
            })
    
            if(error){
                console.log(error)
                return fail(400 , {
                    message : "something went wrong"
                })
            }
            throw redirect (303 , data.url)     
        }

        
        const body = Object.fromEntries(await request.formData())

        const {data , error }  = await supabase.auth.signInWithPassword({
            email : body.email as string , 
            password : body.password as string
        })
        if(error){
            console.error(error)
            redirect(303 , '/auth/error')
        }else {
            redirect(303 , '/private/Market')
        }

    }


}