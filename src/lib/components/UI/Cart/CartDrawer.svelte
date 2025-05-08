<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cart, cartTotals } from '$lib/stores/CartStore';

	export let isOpen = false;

	const closeDrawer = () => {
		isOpen = false;
	};
</script>

{#if isOpen}
	<div id="overlay" class="fixed inset-0 z-40 bg-gray-950" onclick={closeDrawer} transition:slide={{ duration: 300 }}></div>

	<div id="drawer" class="fixed inset-0 w-full max-w-[30rem] bg-black z-50 flex flex-col shadow-2xl" transition:slide={{ duration: 300, axis: 'x' }}>
		<div id="drawer-header" class="flex justify-between items-center p-4 border-b[1px] border-[#e2e8f0]">
			<h2 class="m-0 text-xl font-semibold">Your Cart ({$cartTotals.itemCount})</h2>
			<button id="close-button" class="bg-none border-none text-xl cursor-pointer text-[#64748b]" onclick={closeDrawer} aria-label="Close cart">✕</button>
		</div>

		<div id="drawer-content" class="flex-1 overflow-y-auto p-4">
			{#if $cartTotals.itemCount === 0}
				<p id="empty-cart" class="text-center py-8 px-0 text-[#64748b]">Your cart is empty</p>
			{:else}
				<div id="cart-items" class="flex flex-col gap-4">
					{#each $cart as item (item.id)}
						<div id="cart-item" class="grid grid-cols-[auto,1fr,auto] gap-4 items-center p-3 border-b-[1px] border-[#e2e8f0]">
							{#if item.product.thumbnail}
								<img src={item.product.thumbnail} alt={item.product.title} class="item-image" />
							{/if}
							<div class="item-details">
								<h3>{item.product.title}</h3>
								<p class="item-price">${item.product.price.toFixed(2)}</p>

								<div class="quantity-controls">
									<button onclick={() => cart.decrementQuantity(item.id)}>-</button>
									<span class="quantity">{item.quantity}</span>
									<button onclick={() => cart.incrementQuantity(item.id)}>+</button>
								</div>
							</div>
							<div class="item-total">
								${(item.product.price * item.quantity).toFixed(2)}
								<button
									class="remove-button"
									onclick={() => cart.removeItem(item.id)}
									aria-label="Remove item"
								>
									✕
								</button>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		{#if $cartTotals.itemCount > 0}
			<div class="drawer-footer">
				<div class="subtotal">
					<span>Subtotal</span>
					<span>{$cartTotals.formattedSubtotal}</span>
				</div>

				<div class="cart-actions">
					<a href="/checkout" class="checkout-button">Checkout</a>
					<a href="/cart" class="view-cart-button">View Cart</a>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	.item-image {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: 0.25rem;
	}

	.item-details {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.item-details h3 {
		margin: 0;
		font-size: 1rem;
		font-weight: 500;
	}

	.item-price {
		margin: 0;
		color: #64748b;
	}

	.quantity-controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.quantity-controls button {
		width: 1.5rem;
		height: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f1f5f9;
		border: 1px solid #e2e8f0;
		border-radius: 0.25rem;
		cursor: pointer;
	}

	.quantity {
		min-width: 1.5rem;
		text-align: center;
	}

	.item-total {
		font-weight: 500;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5rem;
	}

	.remove-button {
		background: none;
		border: none;
		color: #94a3b8;
		cursor: pointer;
		font-size: 0.875rem;
	}

	.drawer-footer {
		padding: 1rem;
		border-top: 1px solid #e2e8f0;
	}

	.subtotal {
		display: flex;
		justify-content: space-between;
		font-weight: 500;
		margin-bottom: 1rem;
	}

	.cart-actions {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.checkout-button,
	.view-cart-button {
		display: block;
		width: 100%;
		padding: 0.75rem;
		text-align: center;
		border-radius: 0.25rem;
		font-weight: 500;
		text-decoration: none;
	}

	.checkout-button {
		background-color: #3b82f6;
		color: white;
	}

	.view-cart-button {
		background-color: #f1f5f9;
		color: #0f172a;
		border: 1px solid #e2e8f0;
	}
</style>
