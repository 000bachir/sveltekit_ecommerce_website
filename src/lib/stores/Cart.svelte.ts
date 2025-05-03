import type { CartProduct } from "$lib/types/cartProduct";

export const cartProduct = $state<CartProduct[]>([])

export function RemoveItemsFromCart(id : string) {
    const index = cartProduct.findIndex((product)=>{
        product.id === id
    })

    if(index > -1){
        cartProduct.splice(index , 1)
    }
}