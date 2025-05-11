<script lang="ts">

</script>

<svelte:head>
    <title>FAQ</title>
</svelte:head>

<main class="h-auto w-[95%] mx-auto overflow-hidden">
    <section class="h-dvh w-full relative flex items-center justify-center flex-col gap-6">
        <div class="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div class="collapse-title font-semibold">what is the stack used</div>
            <div class="collapse-content text-sm">Sveltekit with runes and typescript and supabase as a backend + daisy UI for some clean ui</div>
          </div>
          <div class="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title font-semibold">How is the learning curve</div>
            <div class="collapse-content text-sm">Unless the UI part supabase documentation is crestal clear</div>
          </div>
          <div class="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title font-semibold">Is it production level</div>
            <div class="collapse-content text-sm">NOT AT ALL THIS IS JUST A SHOW CASE use it as a map </div>
          </div>
          <div class="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title font-semibold">Some Bugs</div>
            <div class="collapse-content text-sm">
              I’m using Deno as a JavaScript runtime, and it has some issues with SvelteKit—especially with routing. Deno is case-sensitive, unlike Node.js.  
              After updating to the latest version of Deno, GitHub login no longer redirects correctly. It used to work before, but now an error is shown after login, although the authentication itself still succeeds.
            </div>
          </div>
          
    </section>
</main>