import type { CartProduct } from "$lib/types/cartProduct";

export const CartProducts = $state<CartProduct[]>([])

export function RemoveItemsFromCart(id : string) {
    const index = CartProducts.findIndex((product)=>{
        product.id === id
    })

    if(index > -1){
        CartProducts.splice(index , 1)
    }
}