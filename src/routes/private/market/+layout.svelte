<script lang="ts">
	import { setCartContext } from '$lib/components/context/CartContext';
	import CartDrawer from '$lib/components/UI/Cart/CartDrawer.svelte';
	import CartIcon from '$lib/components/UI/Cart/CartIcon.svelte';
	let { children } = $props();
	let cartDrawerOpen = $state(false);

	function toggleCartDrawer(event: Event) {
		event.preventDefault();
		cartDrawerOpen = !cartDrawerOpen;
	}

	setCartContext();
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<section class="relative flex h-16 w-full items-center justify-center overflow-hidden">
			<button class="cart-button" onclick={toggleCartDrawer} aria-label="Open cart" type="submit">
				<CartIcon />
			</button>
			<CartDrawer bind:isOpen={cartDrawerOpen} />
		</section>
		{@render children()}
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"> Open drawer </label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 text-base-content min-h-full w-64 p-4">
			<li>
				<h1 class="text-xl font-semibold">
					<a href="/private/market/mens" data-sveltekit-preload-data>Mens</a>
				</h1>
			</li>
			<li>
				<h1 class="text-xl font-semibold">
					<a href="/private/market/womens" data-sveltekit-preload-data>Womens</a>
				</h1>
			</li>
		</ul>
	</div>
</div>
