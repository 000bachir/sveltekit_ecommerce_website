<script>
	import { cartTotals } from "$lib/stores/CartStore";
	
	export let showCount = true;
  </script>
  
  <a href="/cart" class="cart-icon">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	  <circle cx="8" cy="21" r="1"></circle>
	  <circle cx="19" cy="21" r="1"></circle>
	  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
	</svg>
	
	{#if showCount && $cartTotals.itemCount > 0}
	  <span class="cart-count">{$cartTotals.itemCount}</span>
	{/if}
  </a>
  
  <style>
	.cart-icon {
	  position: relative;
	  display: inline-flex;
	  color: inherit;
	  text-decoration: none;
	}
	
	.cart-count {
	  position: absolute;
	  top: -8px;
	  right: -8px;
	  background-color: #ef4444;
	  color: white;
	  font-size: 0.75rem;
	  font-weight: bold;
	  width: 1.25rem;
	  height: 1.25rem;
	  border-radius: 50%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
  </style>