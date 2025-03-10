<script lang="ts">
    import { onMount } from "svelte";
    import { invalidate } from "$app/navigation";
	import ImageForAuth from "$lib/assets/Images/Image05.webp"

	let {data} = $props();
</script>

<svelte:head>
	<title>
		register
	</title>
</svelte:head>

<main class="h-dvh w-full relative overflow-hidden inset-0 grid grid-cols-2">
	<section class="col-span-1 h-full w-full overflow-hidden ">
		<div id="form-container" class="h-full w-[95%] mx-auto  flex flex-col items-center justify-center">
			<h1 class="text-4xl font-semibold text-white">Register Form</h1>
			<form action="?/signup" method="POST" class="w-full  flex flex-col justify-center gap-4 ">
				<div class="flex flex-col justify-center items-center ">
					<label for="email" class="">Email</label>
					<input type="text" name="email" placeholder="Email" class="input input-lg w-[80%]" required />
				</div>
				<div class="flex flex-col justify-center items-center">
					<label for="password">Password</label>
					<input type="password" name="password" id="password" class="input input-lg w-[80%]" required />
				</div>
				<div class="flex justify-evenly items-center">
					<button type="button" class="btn btn-dash btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl"><a href="/auth/login">Login</a></button>				
					<button type="submit" class="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl">Register</button>				
				</div>
			</form>
		</div>
	</section>

	<section class="col-span-1 h-full w-full overflow-hidden">
		<img src={ImageForAuth} alt="" class="h-full object-center m-auto" loading="lazy">
	</section>
</main>



<style lang="postcss">
   
</style>
