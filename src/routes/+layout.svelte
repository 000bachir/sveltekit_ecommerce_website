<script lang="ts">
	import '../app.css';

	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import PublicNavbar from '$lib/components/Shared_Ui/Navbar/PublicNavbar.svelte';
	import PrivateNavbar from '$lib/components/Shared_Ui/Navbar/PrivateNavbar.svelte';
	import Footer from '$lib/components/Shared_Ui/Footer/Footer.svelte';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	onMount(() => {
		$effect(() => {
			const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
				if (!newSession) {
					setTimeout(() => {
						goto('/', { invalidateAll: true });
					}, 3000);
				}

				if (newSession?.expires_at !== session?.expires_at) {
					invalidate('supabase:auth');
				}
			});
			return () => data.subscription.unsubscribe();
		});
	});
</script>

<header class="relative h-20 w-full overflow-hidden border-b-[1px] border-b-gray-600">
	{#if data.session}
		<PrivateNavbar />
	{:else}
		<PublicNavbar />
	{/if}
</header>
{@render children()}
<Footer />
