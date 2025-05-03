<script lang="ts">
    import CartItem from "../CartItem.svelte";
    import { cartProduct } from "$lib/stores/Cart.svelte";

    const cartTotal = $derived.by(()=>{
        let total : number = 0

        for(const product of cartProduct){
            total += product.product.price * product.quantity
        }
        return total
    })


</script>

<section>
    {#if cartProduct.length === 0}
        <div class="flex flex-col justify-center items-center gap-7 pt-5">
            <p class="text-zinc-600">Your cart cannot be empty 🙂‍↔️</p>
            <a
                href="/"
                class="capitalize flex gap-x-1 pt-4 text-black hover:text-orange underline underline-offset-8"
                >Go spend your money
            </a>
        </div>
        {:else}
            <p class="text-center font-sans text-xl font-bold">Your Cart</p>

            {#each cartProduct as product }
                <CartItem {product} />
            {/each}


    {/if}
</section>