<script lang="ts">
    import { RemoveItemsFromCart } from "$lib/stores/Cart.svelte";
    import type { CartProduct } from "$lib/types/cartProduct";
	import Icon from "@iconify/svelte";


    type Props = {
        cartProduct : CartProduct
    }
    let { cartProduct } : Props = $props()

</script>

<div class="fle items-center justify-between py-2 border-b border-gray-600">

    <div class="flex items-center justify-center">
        <img src={cartProduct.product.thumbnail} alt="product image" loading="lazy" class="size-12 rounded-2xl object-cover mr-4" />
        <div class="">
            <p class="font-semibold">{cartProduct.product.title}</p>
            <p class="text-sm">{cartProduct.product.price * cartProduct.quantity}</p>
        </div>
        <div class="flex items-center">
            <button
            onclick={()=>{
                if(cartProduct.quantity === 1) {
                    RemoveItemsFromCart(cartProduct.id)
                }else{
                    cartProduct.quantity--
                }
            }}
            class="p-1 hover:bg-blue-800 rounded-2xl"
            aria-label="substract one from the quantity"
            >
            <Icon icon="zondicons:minus-solid" width="14" height="14" />
            </button>
            <span class="mx-2">{cartProduct.quantity}</span>
            <button
            class="p-1 hover:bg-blue-800 rounded-2xl"
            aria-label="add one to the quantity"
            type="submit"
            onclick={()=>{
                cartProduct.quantity++
            }}
            >
            <Icon icon="icons8:plus" width="14" height="14" />
            </button>
            <button class="ml-4 p-1 text-orange hover:bg-orange-bright rounded" onclick={()=> RemoveItemsFromCart(cartProduct.id)} type="submit">
                <Icon icon="tabler:trash-filled" width="14" height="14" />
            </button>
        </div>
    </div>


</div>