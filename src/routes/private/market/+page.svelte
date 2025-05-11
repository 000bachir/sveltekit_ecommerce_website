<script lang="ts">

</script>

<svelte:head>
	<title>market</title>
</svelte:head>

<section id="market-text-wrapper" class=" h-dvh w-full overflow-hidden ">
    <div id="market-text-container" class="h-full w-[90%] relative flex items-center justify-center mx-auto">
        <h1 class="text-xl text-white font-semibold text-balance ">
            🧠 Design & Architecture Decisions: <br> This project isn't just a demo — it's a case study in
            building a modern e-commerce interface using SvelteKit and Supabase, while simulating the kind
            of structure seen in large-scale applications. Below are the key decisions and the thinking
            behind them:<br> 1. Two Navbars for Contextual UX I implemented two separate navigation bars to
            reflect how larger platforms often split concerns between global (auth, cart) and local
            (category browsing) navigation. This approach also subtly indicates the user’s authentication
            state without relying on user avatars or complex profile systems. Personally, I find this method
            cleaner and more secure-looking — especially when users forget to log out — because the UI
            changes visually based on login state.<br> 2. Lightweight Cart with Local Storage The cart behaves
            like a quick-access version similar to what Amazon offers. Instead of syncing with a backend, I
            store cart items in the browser using localStorage. This shows how to manage state in a
            performant way without relying on a database for everything — useful for small apps or MVPs.<br> 3.
            Supabase: Using the Free Tier Effectively This app uses Supabase's free tier to demonstrate how
            much you can build without scaling costs. It includes: Email/password user authentication OAuth
            (GitHub integration) Basic security rules This setup is ideal for indie hackers or early-stage
            prototypes.<br> 4. Fast Loading with SvelteKit Preload Product data is fetched from the Dummy JSON
            API and displayed using SvelteKit’s load function. Even though the data is relatively small, it
            includes metadata and images — enough to demonstrate how fast and efficient SvelteKit can be
            with data fetching, SSR, and reactivity.
        </h1>
    </div>
        
</section>

<style>
    @media screen and (max-width:768px){
        #market-text-wrapper{
            height: auto;
            width: 100%;
            padding: 1.5rem 0rem;
        }
        #market-text-wrapper > #market-text-container > h1{
            font-size:1.2rem;
        }
    }
    @media screen and (max-width :425px){
        #market-text-wrapper{
            height: auto;
            width: 100%;
            padding: 1.5rem 0rem;
        }

        #market-text-wrapper > #market-text-container > h1{
            font-size:1.2rem;
        }
    }
</style>
