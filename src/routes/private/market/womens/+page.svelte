<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageProps } from './$types';
	import type { CartProduct } from '$lib/types/cartProduct';
	import { cart, cartTotals } from '$lib/stores/cart';
	import CartItem from '$lib/components/UI/CartItem.svelte';
	
	let { data }: PageProps = $props();
	let cartOpen = $state(false);
	let cartProducts = $state<CartProduct[]>([])

	const cartStats = $derived.by(()=> {
		let quantity : number = 0 ;
		let Total : number = 0
		for (let product of cartProducts){
			quantity += product.quantity
			Total += product.product.price * product.quantity
		}
		return {
			quantity ,
			Total
		}
	})

	const qualifiesforShipping = $derived(cartStats.Total >= 5)
	let freeShippingAlertCount : number = 0;

	$effect(()=>{
		if(freeShippingAlertCount > 0) return
		if(qualifiesforShipping){
			alert("you have been selected for a free shipping")
			freeShippingAlertCount++
		}
	})

	function removeProductFromCart(id : string){
		cartProducts = cartProducts.filter((product)=> product.id !== id)
	}


</script>

<svelte:head>
	<title>Womens Collection</title>
</svelte:head>

<main class="h-auto w-[95%] relative inset-0 mx-auto overflow-hidden">
	<div class="h-20 w-full flex items-center justify-end">
		<button type="submit" class="btn btn-md btn-success rounded-lg" onclick={() => cartOpen = !cartOpen}>
			<Icon icon="mdi:cart" width="24" height="24" color="white" />
			<span> Cart : ({cartStats.quantity}) </span>
		</button>
		
		{#if cartOpen}	
			<div class="absolute right-0 top-14 z-10 mt-2 w-80 rounded-lg bg-white shadow-xl">
				<div class="relative p-4">
					<h2 class="mb-4 text-lg font-semibold text-black">Your Cart</h2>
					<button
						class="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
						aria-label="close cart"
						onclick={() => (cartOpen = false)}
					>
						<Icon icon="gridicons:cross" width="24" height="24" color="black" />
					</button>
					
					{#if cartProducts.length === 0}
						<p class="text-gray-500">Your cart is empty</p>
					{:else}
						{#each cartProducts as _ , i}
							<CartItem bind:cartProduct={cartProducts[i]}/>
						{/each}
						
						<div class="mt-4 border-t border-gray-200 pt-4">
							<p class="text-lg font-semibold">Total: ${$cartTotals.subTotal.toFixed(2)}</p>
							<button 
								class="mt-2 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
								onclick={() => cart.clearCart()}
							>
								Clear Cart
							</button>
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each data.products as product (product.id)}
			<div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
				<div class="h-48 bg-gray-200">
					<img 
						src={product.thumbnail} 
						alt={product.title}
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="p-4">
					<h3 class="font-medium text-lg">{product.title}</h3>
					<p class="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
					<button 
						class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
						onclick={() =>cartProducts.push({
							id : crypto.randomUUID(),
							quantity : 1 , 
							product : product
						})}
					>
						Add to Cart
					</button>
				</div>
			</div>
		{/each}
	</div>
</main>