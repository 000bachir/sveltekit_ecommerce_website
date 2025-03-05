<script lang="ts">
    import type { PageData } from './$types';
    import {supabase} from "$lib/Supabase/SupabaseClient"
    import type { Provider } from '@supabase/supabase-js';
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';


    
    let { data }: { data: PageData } = $props();


    const signInWithProvider = async(provider : Provider) => {
        const {data , error} = await supabase.auth.signInWithOAuth({
            provider : provider
        })
    }

    const submitSocialLogin :SubmitFunction = async({action , cancel}) => {
        switch (action.searchParams.get('provider')){
            case 'google' :
                await signInWithProvider('google')
                break
            case 'discord' :
                await signInWithProvider('discord')
                break
            case 'github' :
                await signInWithProvider('github')
                break
            default :
            break
        }
        cancel()
    }
</script>



<main class="">
    <h1>Login</h1>
	<form action="?/login" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Login</button>
	</form>
	<form class="socials" method="POST" use:enhance={submitSocialLogin}>
		<button formaction="?/login&provider=github" class="btn btn-ghost">Github</button>
		<button formaction="?/login&provider=discord" class="btn btn-ghost">Discord</button>
		<button formaction="?/login&provider=google" class="btn btn-ghost">Google</button>
	</form>
</main>