<script lang="ts">
    //@ts-ignore
	import type { PageData } from './$types';
	import Hero from '$lib/components/Home_Ui_Components/Hero.svelte';
	import Intro from '$lib/components/Home_Ui_Components/Intro.svelte';
	import Features from '$lib/components/Home_Ui_Components/Features.svelte';
	import Testimonials from '$lib/components/Home_Ui_Components/Testimonials/Testimonials.svelte';
	import Redirect from '$lib/components/Home_Ui_Components/Redirect.svelte';

	let { data }: { data: PageData } = $props();
</script>

<main class="h-auto w-[95%] mx-auto relative overflow-hidden inset-0">
	
	<Hero />
    <Intro />
    <Features />
    <Testimonials />
    <Redirect />
</main>
