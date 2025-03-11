<script lang="ts">

    let {children} = $props()
</script>

<div class="drawer lg:drawer-open bg-red-500">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      {@render children()}
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-64 p-4">
        <!-- Sidebar content here -->
        <li>
            <h1 class="text-2xl font-semibold">
                <a href="/private/market/mens">Mens</a>
            </h1>
        </li>
        <li>
            <h1 class="text-2xl font-semibold">
                <a href="/private/market/womens">Womens</a>
            </h1>
        </li>
        <li>
            <h1 class="text-2xl font-semibold">
                <a href="/private/market/children">Childrens</a>
            </h1>
        </li>
      </ul>
    </div>
</div>