import { AuthApiError , type Provider } from '@supabase/supabase-js';
import { fail , redirect } from '@sveltejs/kit';
//@ts-ignore
import type { Actions } from './$types';
const Oauth_Providers = ["google" , "discord" , "github" , ] as const 

type OAuthProvider = typeof Oauth_Providers[number]

export const actions : Actions =  {
    login : async({request ,url , locals : {supabase}}) => {
        const provider = url.searchParams.get('provider') as OAuthProvider | null

        if(provider){
            if(!Oauth_Providers.includes(provider)){
                return fail(400 , {
                    error : "Provider not supported"
                })
            }
            const {data , error} = await supabase.auth.signInWithOAuth({
                provider , 
                options : {
                    redirectTo : "http://localhost:5173/"
                }
            })
    
            if(error){
                console.log('OAuth Error:e' ,error)
                return fail(400 , {
                    message : error.message || 'OAuth sign-in failed'
                })
            }
            throw redirect (303 , data.url)     
        }

        
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

    }
}