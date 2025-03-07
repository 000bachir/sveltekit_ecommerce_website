<!-- <script lang="ts">
 

    let {src = ""} = $props()

    let isSvg = $derived(!!src.endsWith(".svg"))
    let svgRoute = $derived(`${src}?raw`)
    
    let svgContainer: HTMLDivElement | any = $state();
    let isLoading = $state(true);
    
    async function fetchAndInsertSvg() {
        if (!isSvg || !svgContainer) return;
        
        isLoading = true;
        try {
            const response = await fetch(svgRoute);
            const svgText = await response.text();
            
            // Clear previous content
            while (svgContainer.firstChild) {
                svgContainer.removeChild(svgContainer.firstChild);
            }
            
            // Create a template element to parse the SVG
            const template = document.createElement('template');
            template.innerHTML = svgText.trim();
            
            // Get the SVG element from the template
            const svgElement = template.content.firstChild;
            
            if (svgElement && svgContainer) {
                svgContainer.appendChild(svgElement);
            }
        } catch (error) {
            console.error("Error loading SVG:", error);
        } finally {
            isLoading = false;
        }
    }
    
    $effect(() => {
        fetchAndInsertSvg();
    });
</script>

<main>
    {#if isSvg}
        <div bind:this={svgContainer} class="svg-container">
            {#if isLoading}
                <div class="">loading</div>
            {/if}
        </div>
    {:else}
        <img src={src} alt="">
    {/if}
</main>

<style>
    .svg-container :global(svg) {
        /* Add any styling for the SVG here */
        height: 100%;
        width: 100%;
    }
</style> -->