import { readable, writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';
import type { CartProduct } from '$lib/types/cartProduct';

// Initialize from localStorage if available
const storedCart = browser ? localStorage.getItem('cart') : null;
const initialCart: CartProduct[] = storedCart ? JSON.parse(storedCart) : [];

// Create the cart store
const cartStore = writable<CartProduct[]>(initialCart);

// Save to localStorage when cart changes
if (browser) {
  cartStore.subscribe((cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  });
}

// Derived store for cart totals
export const cartTotals = derived(cartStore, ($cart) => {
  const itemCount = $cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = $cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
  return {
    itemCount,
    subtotal,
    formattedSubtotal: new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD' 
    }).format(subtotal)
  };
});

// Cart actions
export const cartActions = {
  addItem: (item: Omit<CartProduct, 'quantity'>, quantity = 1) => {
    cartStore.update((cart) => {
      const existingItem = cart.find((i) => i.id === item.id);
      
      if (existingItem) {
        // Update existing item
        return cart.map((i) => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      } else {
        // Add new item
        return [...cart, { ...item, quantity }];
      }
    });
  },
  
  removeItem: (id: string) => {
    cartStore.update((cart) => cart.filter((item) => item.id !== id));
  },
  
  updateQuantity: (id: string, quantity: number) => {
    if (quantity <= 0) {
      cartActions.removeItem(id);
      return;
    }
    
    cartStore.update((cart) => 
      cart.map((item) => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  },
  
  incrementQuantity: (id: string) => {
    cartStore.update((cart) => 
      cart.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  },
  
  decrementQuantity: (id: string) => {
    const currentCart = get(cartStore);
    const item = currentCart.find((i) => i.id === id);
    
    if (item && item.quantity === 1) {
      cartActions.removeItem(id);
    } else {
      cartStore.update((cart) => 
        cart.map((item) => 
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  },
  
  clearCart: () => {
    cartStore.set([]);
  },
  
  getCart: () => get(cartStore)
};

// Export the cart store
export const cart = {
  subscribe: cartStore.subscribe,
  ...cartActions
};