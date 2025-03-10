import { AuthApiError , type Provider } from '@supabase/supabase-js';
import { fail , redirect } from '@sveltejs/kit';
//@ts-ignore
import type { Actions } from './$types';


const Oauth_Providers = ["github"]  

export const actions : Actions =  {
    login : async({request ,url , locals : {supabase}}) => {        
        const body = Object.fromEntries(await request.formData())
        const email = body.email as string 
        const password = body.password as string

        if(!email || !password) {
            return fail(400, { message: 'Email and password are required' });
        }

        const {data : authData , error }  = await supabase.auth.signInWithPassword({
            email , 
            password 
        })
        if(error){
            console.error("Login error: ",error)
            return fail(400 , {
                message : error.message || "Login failed"
            })
        }else {
            throw redirect(303 , '/private/market')
        }

    },


    oauthLogin : async ({request , locals:{supabase} , url}) => {
        const formData = await request.formData() ;
        const provider = (formData.get('provider')?.toString() || "").trim()
        if(!Oauth_Providers.includes(provider)){
            console.error("invalid oauth provider", provider)
            throw redirect(303 , '/auth/login')
        }
        //@ts-ignore
        const {data , error} = await supabase.auth.signInWithOAuth({
            provider : provider as Provider , 
            options : {
                redirectTo :"http://localhost:5173/auth/callback"
            }
        })
        if(error) {
            console.error("failed to send oauth link: ", error)
            throw redirect(303, "/auth/login")
        }
        if(data.url){
            redirect(303 , data.url)
        }
        throw redirect(303 , "/auth/login")
    }
}