<script lang="ts">
    import { onMount } from "svelte";
    import { invalidate } from "$app/navigation";

	let {data} = $props();
</script>

<main>
	<h1>Register</h1>
	123456789
	<form method="POST" action="?/signup" class="auth-form">
		<label for="email">Email</label>
		<input type="text" name="email" id="email" required />
		{#if data?.missingEmail}
			<p class="error">Email is required.</p>
		{/if}

		<label for="password">Password</label>
		<input type="password" name="password" id="password" required />
		{#if data?.missingPassword}
			<p class="error">Password is required.</p>
		{/if}

		<button type="submit" class="btn btn-primary">Register</button>

		{#if data?.error}
			<p class="error">{data.error}</p>
		{/if}
	</form>
</main>

<style>
    .error {
        color: red;
        font-size: 14px;
    }
</style>
