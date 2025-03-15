//@ts-nocheck
import { writable , derived } from "svelte/store";
import type { CartProduct } from "$lib/types/cartProduct";


function createCartStore(){
    const {subscribe , set , update} = writable<CartProduct[]>([])
    return {
        subscribe , 
        addtoCart : (product : any , quantity = 1) => {
            update(items => {
                const existingItemIndex = items.findIndex(item => item.product.id === product.id)
                if(existingItemIndex >= 0 ){
                    const updatedItems = [...items]
                    updatedItems[existingItemIndex].quantity += quantity
                    return updatedItems
                } else {
                    // adding new product to cart 
                    return [...items , {id : crypto.randomUUID() , product , quantity}]
                }
            })
        },
        updateQuantity :(id:number | string , quantity : number)=> {
            update(items=>{
                items.map(item => item.id === id ? {...item , quantity} : item)
            })
        },
        removeItem: (id : string | number) => {
            update(items => items.filter(item => item.id !== id))
        },
        clearCart : () => set([])
    }
}

export const cart = createCartStore()

export const cartTotals = derived(cart , ($cart)=>{
    let itemCount = $cart.reduce((total , item)=> total + item.quantity , 0)
    let subTotal = $cart.reduce((total , item)=> total + (item.quantity * item.product.price) , 0)

    return {
        itemCount , 
        subTotal , 
        formattedSubtotal : subTotal.toFixed(2)
    }

})
