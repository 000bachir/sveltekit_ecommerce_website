<script lang="ts">

    let busy = $state(false)
    let provider = $props();

</script>

<button

        type = "submit"
        name="provider"
        value={provider}
        class="text-lg font-semibold text-white btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl"
        disabled = {busy}
>
        Logout
    
</button>