<script lang="ts">
    
    import MenImage from "$lib/assets/Images/Image01.webp"
    import WomenImage from "$lib/assets/Images/Image02.webp"

</script>

<svelte:head>
    <title>
        market
    </title>
</svelte:head>



<section class='h-dvh w-full relative overflow-hidden flex items-center justify-center gap-4'>
    <div class="flex items-center justify-center h-80 aspect-video rounded-2xl shadow-2xl border border-white relative overflow-hidden">
        <a href="/private/market/mens" data-sveltekit-preload-data>        
            <img src={MenImage} alt="" class="h-full w-full object-cover">
        </a>
        <h1 class="absolute z-20 text-5xl text-center">Men Sections</h1>
    </div>
    <div class="h-80 aspect-video rounded-2xl shadow-2xl border border-white relative overflow-hidden flex items-center justify-center">
        <a href="/private/market/womens" data-sveltekit-preload-data>
            <img src={WomenImage} alt="" class="h-full w-full object-cover">
        </a>
        <h1 class="absolute z-20 text-5xl text-green-500">Women Sections</h1>
    </div>
</section>