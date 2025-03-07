<script lang="ts">
	import { enhance } from '$app/forms';
    //@ts-ignore
	import type { SubmitFunction } from '$app/forms';
	import type { PageData } from './$types';
	import { supabase } from '$lib/Supabase/SupabaseClient';
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Home_Ui_Components/Hero.svelte';
	import Intro from '$lib/components/Home_Ui_Components/Intro.svelte';
	import Features from '$lib/components/Home_Ui_Components/Features.svelte';
	import Testimonials from '$lib/components/Home_Ui_Components/Testimonials/Testimonials.svelte';
	import Redirect from '$lib/components/Home_Ui_Components/Redirect.svelte';

	let { data }: { data: PageData } = $props();

	// Check session on mount to handle OAuth callback
	// onMount(async () => {
	// 	// handeling oauth callback 
	// 	if (window.location.hash){
	// 		const {data , error} = await supabase.auth.getSession()
	// 		if(data.session){
	// 			data.session = data.session
	// 			console.log("session loaded from url: ", data.session)
	// 			// clear the url hash 
	// 			window.location.hash = ""
	// 		}
	// 	}else {
	// 		// Your existing code
	// 		const { data: { session } } = await supabase.auth.getSession();
	// 		if (session) {
	// 				data.session = session; // Update reactive data
	// 				console.log('Session loaded:', session);
	// 			}
	// 	}
	// });
    // //@ts-ignore
	// const submitLogout: SubmitFunction = async ({ cancel }) => {
	// 	const { error } = await supabase.auth.signOut();
	// 	if (error) {
	// 		console.log('Logout Error:', error);
	// 	}
	// 	cancel();
	// };
</script>

<main class="h-auto w-[95%] mx-auto relative overflow-hidden inset-0">
	<!-- <h1>SvelteKit & Supabase Auth</h1>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		<form action="/auth/logout" method="POST" use:enhance={submitLogout}>
			<button type="submit" class="btn btn-primary">Logout</button>
		</form>
	{:else}
	{/if} 
	<p>Let's learn how to register and login users!</p>
	<div class="auth-buttons">
		<a href="/auth/login" class="btn btn-primary">Login</a>
		<a href="/auth/register" class="btn btn-secondary">Register</a>
	</div> -->
	<Hero />
    <Intro />
    <Features />
    <Testimonials />
    <Redirect />
</main>
