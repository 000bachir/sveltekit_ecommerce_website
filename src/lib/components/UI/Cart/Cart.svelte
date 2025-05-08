<script lang="ts">
	import { cart, cartTotals } from '$lib/stores/CartStore';
  </script>
  
  <div class="cart">
	<h2>Your Cart</h2>
	
	{#if $cartTotals.itemCount === 0}
	  <p class="empty-cart">Your cart is empty</p>
	{:else}
	  <div class="cart-items">
		{#each $cart as item (item.id)}
		  <div class="cart-item">
			{#if item.product.thumbnail}
			  <img src={item.product.thumbnail} alt={item.product.title} class="item-image" />
			{/if}
			<div class="item-details">
			  <h3>{item.product.price}</h3>
			  <p class="item-price">${item.product.price.toFixed(2)}</p>
			</div>
			<div class="quantity-controls">
			  <button on:click={() => cart.decrementQuantity(item.id)}>-</button>
			  <span class="quantity">{item.quantity}</span>
			  <button on:click={() => cart.incrementQuantity(item.id)}>+</button>
			</div>
			<div class="item-total">
			  ${(item.product.price * item.quantity).toFixed(2)}
			</div>
			<button 
			  class="remove-button" 
			  on:click={() => cart.removeItem(item.id)}
			  aria-label="Remove item"
			>
			  ✕
			</button>
		  </div>
		{/each}
	  </div>
	  
	  <div class="cart-summary">
		<div class="subtotal">
		  <span>Subtotal ({$cartTotals.itemCount} item{$cartTotals.itemCount !== 1 ? 's' : ''})</span>
		  <span>{$cartTotals.formattedSubtotal}</span>
		</div>
		
		<div class="cart-actions">
		  <button class="checkout-button">Checkout</button>
		  <button class="clear-button" on:click={() => cart.clearCart()}>
			Clear Cart
		  </button>
		</div>
	  </div>
	{/if}
  </div>
  
  <style>
	.cart {
	  padding: 1rem;
	  border: 1px solid #e2e8f0;
	  border-radius: 0.5rem;
	  background-color: #fff;
	}
	
	h2 {
	  margin-top: 0;
	  font-size: 1.5rem;
	  font-weight: 500;
	}
	
	.empty-cart {
	  text-align: center;
	  padding: 2rem 0;
	  color: #64748b;
	}
	
	.cart-items {
	  display: flex;
	  flex-direction: column;
	  gap: 1rem;
	  margin-bottom: 1rem;
	}
	
	.cart-item {
	  display: grid;
	  grid-template-columns: auto 1fr auto auto auto;
	  gap: 1rem;
	  align-items: center;
	  padding: 0.75rem;
	  border-bottom: 1px solid #e2e8f0;
	}
	
	.item-image {
	  width: 4rem;
	  height: 4rem;
	  object-fit: cover;
	  border-radius: 0.25rem;
	}
	
	.item-details h3 {
	  margin: 0;
	  font-size: 1rem;
	  font-weight: 500;
	}
	
	.item-price {
	  margin: 0.25rem 0 0;
	  color: #64748b;
	}
	
	.quantity-controls {
	  display: flex;
	  align-items: center;
	  gap: 0.5rem;
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
	}
	
	.remove-button {
	  background: none;
	  border: none;
	  color: #94a3b8;
	  cursor: pointer;
	  font-size: 0.875rem;
	}
	
	.cart-summary {
	  margin-top: 1rem;
	  padding-top: 1rem;
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
	  gap: 0.5rem;
	}
	
	.checkout-button {
	  flex: 1;
	  padding: 0.5rem 1rem;
	  background-color: #3b82f6;
	  color: white;
	  border: none;
	  border-radius: 0.25rem;
	  font-weight: 500;
	  cursor: pointer;
	}
	
	.clear-button {
	  padding: 0.5rem 1rem;
	  background-color: #f1f5f9;
	  border: 1px solid #e2e8f0;
	  border-radius: 0.25rem;
	  cursor: pointer;
	}
  </style>