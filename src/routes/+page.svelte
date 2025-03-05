<script lang="ts">
    import { enhance } from "$app/forms";
    //@ts-ignore
    import type { SubmitFunction } from "$app/forms"
    import type { PageProps } from './$types';
	import { supabase } from "$lib/Supabase/SupabaseClient";

    let {data} : PageProps = $props()
        //@ts-ignore
        const submitLogout:SubmitFunction = async({cancel}) => {
            const {
                error
            } = await supabase.auth.signOut()
            if(error){
                console.log(error)
            }
            cancel()
        }
    


</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		<form action="/auth/Logout" method="POST" use:enhance={submitLogout}>
			<button type="submit" class="btn btn-primary">Logout</button>
		</form>
	{:else}
		<p>Let's learn how to register and login users!</p>
		<div class="auth-buttons">
			<a href="/auth/login" class="btn btn-primary">Login</a>
			<a href="/auth/register" class="btn btn-secondary">Register</a>
		</div>
	{/if}
</main>