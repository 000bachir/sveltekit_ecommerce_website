<script lang="ts">
    let {children} = $props()
</script>

<div class="drawer lg:drawer-open ">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      {@render children()}
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-64 p-4">
        <li>
            <h1 class="text-xl font-semibold">
                <a href="/private/market/mens" data-sveltekit-preload-data>Mens</a>
            </h1>
        </li>
        <li>
            <h1 class="text-xl font-semibold">
                <a href="/private/market/womens" data-sveltekit-preload-data>Womens</a>
            </h1>
        </li>
      </ul>
    </div>
</div>