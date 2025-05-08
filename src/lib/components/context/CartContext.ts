import { setContext, getContext } from 'svelte';
import { cart, cartTotals, type CartItem } from '$lib/stores/CartStore';

// Context key
const CART_CONTEXT_KEY = 'cart';

// Function to set the cart context
export function setCartContext() {
  setContext(CART_CONTEXT_KEY, {
    cart,
    cartTotals
  });
}

// Function to get the cart context
export function getCartContext() {
  return getContext<{
    cart: {
      subscribe: typeof cart.subscribe;
      addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
      removeItem: (id: string) => void;
      updateQuantity: (id: string, quantity: number) => void;
      incrementQuantity: (id: string) => void;
      decrementQuantity: (id: string) => void;
      clearCart: () => void;
      getCart: () => CartItem[];
    };
    cartTotals: typeof cartTotals;
  }>(CART_CONTEXT_KEY);
}