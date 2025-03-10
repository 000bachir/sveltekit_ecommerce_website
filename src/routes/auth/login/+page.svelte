<script lang="ts">
    import {supabase} from "$lib/Supabase/SupabaseClient"
    import type { Provider } from '@supabase/supabase-js';
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    //@ts-ignore
    import type { PageData } from './$types';
    import ImageForLogin from "$lib/assets/Images/Image03.webp"


    
    let { data }: { data: PageData } = $props();

    // const signInWithProvider = async(provider : Provider) => {
    //     const {data , error} = await supabase.auth.signInWithOAuth({
    //         provider : provider
    //     })
    // }

    // const submitSocialLogin :SubmitFunction = async({action , cancel}) => {
    //     switch (action.searchParams.get('provider')){
    //         case 'google' :
    //             await signInWithProvider('google')
    //             break
    //         case 'discord' :
    //             await signInWithProvider('discord')
    //             break
    //         case 'github' :
    //             await signInWithProvider('github')
    //             break
    //         default :
    //         break
    //     }
    //     cancel()
    // }
</script>

<svelte:head>
    <title>
        login
    </title>
</svelte:head>

<main class="h-dvh w-full relative overflow-hidden inset-0 grid grid-cols-2">
    <section class="h-full w-full col-span-1 overflow-hidden">
        <img src={ImageForLogin} alt="" class="h-full object-center m-auto" loading="lazy">
    </section>
        <section class="col-span-1 h-full w-full overflow-hidden ">
            <div id="form-container" class="h-full w-[95%] mx-auto  flex flex-col items-center justify-center gap-10">
                <h1 class="text-4xl font-semibold text-white">Login Form</h1>
                <form action="?/login" method="POST" class="w-full  flex flex-col justify-center gap-4 ">
                    <div class="flex flex-col justify-center items-center ">
                        <label for="email" class="">Email</label>
                        <input type="text" name="email" placeholder="Email" class="input input-lg w-[80%]" required />
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" class="input input-lg w-[80%]" required />
                    </div>
                    <div class="flex justify-evenly items-center">
                        <button type="button" class="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl"><a href="/auth/login">Login</a></button>				
                        <button type="submit" class="btn btn-dash btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl">Register</button>				
                    </div>
                </form>

                <h2>Or choose one of these providers</h2>
                <!--<form class="socials" method="POST" action="?/oauthLogin">
                    <button class="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl" formaction="?/oauthLogin&provider=github">Github</button>
                    <button class="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl" formaction="?/oauthLogin&provider=discord">Discord</button>
                    <button class="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl" formaction="?/oauthLogin&provider=google">Google</button> 
                </form> -->
                <form class="socials" method="POST" action="?/oauthLogin">
                    <input type="hidden" name="provider" value="github">
                    <button class="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl" type="submit">Github</button>
                </form>
            </div>
                
        </section>

</main>