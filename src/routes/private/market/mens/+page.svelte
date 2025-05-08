<script lang="ts">
	import type { PageProps } from './$types';
	import { CartProducts } from '$lib/stores/Cart.svelte';
	let { data }: PageProps = $props();
	import { cartActions } from '$lib/stores/CartStore';
</script>

<main class="relative mx-auto h-auto w-[95%]">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each data.products as product (product.id)}
			<div class="overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md">
				<div class="h-48 bg-gray-200">
					<img src={product.thumbnail} alt={product.title} class="h-full w-full object-cover" />
				</div>
				<div class="p-4">
					<h3 class="text-lg font-medium">{product.title}</h3>
					<p class="mb-4 text-gray-700">${product.price.toFixed(2)}</p>
					<button
						class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
						onclick={() =>
							cartActions.addItem({
								id: crypto.randomUUID(),
								quantity: 1,
								product: product
							})}
					>
						Add to Cart
					</button>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
</style>
