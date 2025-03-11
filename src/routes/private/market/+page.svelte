<script lang="ts">
    import { enhance } from "$app/forms";
    import { supabase } from "$lib/Supabase/SupabaseClient";
    import type { PageData } from "./$types";


    let {data} = $props()
    //@ts-ignore
    const logout = async({cancel}) => {
        const {error} = await supabase.auth.signOut()
        if(error){
            console.log(error)
        }
        cancel()
    }
</script>

<svelte:head>
    <title>
        market
    </title>
</svelte:head>

<!-- <h1>
    hello world from the market page 
</h1>
<form action="/auth/logout" method="GET" use:enhance={logout}>
    <button type="submit" class="btn btn-primary">Logout</button>
</form> -->
<div class="h-dvh w-full relative bg-green-500"></div>
<div class="h-dvh w-full relative bg-orange-500"></div>

