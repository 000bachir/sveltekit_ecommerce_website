<script lang="ts">
	import Logo from '$lib/assets/svg/LogoSite.svg';
	import Icon from '@iconify/svelte';
	import LogoutButton from '$lib/components/UI/LogoutButton.svelte';
	import { supabase } from '$lib/Supabase/SupabaseClient';
	import { enhance } from '$app/forms';

	function OpenNav() {
		let SideNav = document.getElementById('side-navigation') as HTMLElement;
		let openBtn = document.getElementById('open-btn') as HTMLButtonElement;
		openBtn.addEventListener('click', (e: Event) => {
			if (document.activeElement === e.target) {
				SideNav.style.width = '100%';
				SideNav.style.transitionDelay = '500ms';
			}
		});
	}
	function CloseNav() {
		let SideNav = document.getElementById('side-navigation') as HTMLElement;
		let CloseBtn = document.getElementById('close-btn') as HTMLButtonElement;
		CloseBtn.addEventListener('click', (e: Event) => {
			if (document.activeElement === e.target) {
				SideNav.style.width = '0%';
				SideNav.style.transitionDelay = '500ms';
			}
		});
	}

	const {data} = $props()
	//@ts-ignore
	const logout = async({cancel}) => {
	    const {error} = await supabase.auth.signOut()
	    if(error){
	        console.log("something went wrong" , error)
	    }
	    cancel()
	}

	
</script>

<nav class="">
	<nav class="relative mx-auto flex h-full w-[95%] items-center justify-between">
		<div id="logo-name-side" class="flex items-center">
			<img src={Logo} alt="" class="aspect-square h-16" />
			<a class=" text-xl font-bold whitespace-nowrap text-white" href="/">TrendWear</a>
		</div>

		<div id="links-side" class="">
			<ul class="flex items-center gap-5">
				<a
					id="home"
					href="/"
					class="group flex w-full items-center justify-start gap-3 rounded-lg"
					aria-label="Home"
				>
					<div
						class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
					>
						<Icon icon="lsicon:house-filled" width="24" height="24" color="white" />
					</div>
					<span class="xs:hidden text-lg font-bold whitespace-nowrap text-white">Home</span>
				</a>
				<a
					href="/private/Market"
					id="market"
					class=" xs:hidden group flex w-full items-center justify-start gap-3 rounded-lg px-0 sm:px-2 md:hidden lg:flex"
					aria-label="Market"
				>
					<div
						class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
					>
						<Icon icon="bxs:store" width="24" height="24" color="white" />
					</div>
					<span class="text-lg font-bold whitespace-nowrap text-white sm:inline">Market</span>
				</a>
				<a
					id="faq"
					href="/FAQ"
					class="xs:hidden group flex w-full items-center justify-start gap-3 rounded-lg md:hidden lg:flex"
					aria-label="Faq"
				>
					<div
						class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
					>
						<Icon icon="akar-icons:question-fill" width="24" height="24" color="white" />
					</div>
					<span class="text-lg font-bold whitespace-nowrap text-white sm:inline">Faq</span>
				</a>
				<a
					href="/auth"
					class="group flex w-full items-center justify-start rounded-lg"
					aria-label="sign~in"
					id="sign-in"
				>
					<div
						class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
					>
						<Icon icon="streamline:logout-1-solid" width="24" height="24" color="white" />
					</div>
					<form action="/auth/logout" method="GET" use:enhance={logout}>
						<button type="submit" class="cursor-pointer">Logout</button>
					</form>
				</a>
				<button
					class="group flex items-center gap-1 rounded-xl bg-red-300 px-2 py-1 shadow-md transition-all hover:bg-black lg:hidden"
					id="open-btn"
					onclick={OpenNav}
				>
					<span class="transition-all group-hover:text-white"
						><i class="fa-solid fa-bars-staggered"></i></span
					>
					<span class="xs:hidden text-lg transition-all group-hover:text-white md:block">Menu</span>
				</button>
			</ul>
		</div>
	</nav>
	<div id="side-navigation" class="absolute top-0 left-0 z-10 hidden h-dvh w-[25%] bg-gray-200">
		<div id="side-nav-container" class="float-end grid h-full w-[95%] grid-rows-4">
			<div id="logo-part" class="row-span-1 flex items-center gap-8">
				<div class="flex items-center">
					<img src={Logo} alt="" class="aspect-square h-16" />
					<a class="xs:text-sm text-xl font-bold whitespace-nowrap text-black lg:text-xl" href="/">
						TrendWear
					</a>
				</div>
				<div class="">
					<button
						type="button"
						class=" aspect-square h-8 rounded-full border-[1px] border-white text-white"
						id="close-btn"
						onclick={CloseNav}
					>
						<Icon icon="ri:close-line" width="24" height="24" />
					</button>
				</div>
			</div>

			<div id="link-part" class="row-span-2 flex items-center">
				<ul class="flex h-full flex-col items-center justify-evenly">
					<a
						href="/"
						class="group flex w-full items-center justify-start gap-3 rounded-lg"
						aria-label="Home"
					>
						<div
							class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
						>
							<span><i class="fa-solid fa-house"></i></span>
						</div>
						<span class="xs:hidden text-lg font-bold whitespace-nowrap sm:inline">Home</span>
					</a>
					<a
						href="/Market"
						class=" group flex w-full items-center justify-start gap-3 rounded-lg px-0 md:hidden lg:flex"
						aria-label="Market"
					>
						<div
							class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
						>
							<span><i class="fa-solid fa-store"></i></span>
						</div>
						<span class="text-lg font-bold">Market</span>
					</a>
					<a
						href="/FAQ"
						class="xs:hidden group flex w-full items-center justify-start gap-3 rounded-lg md:hidden lg:flex"
						aria-label="Faq"
					>
						<div
							class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
						>
							<span><i class="fa-solid fa-question"></i></span>
						</div>
						<span class="text-lg font-bold whitespace-nowrap sm:inline">Faq</span>
					</a>
				</ul>
			</div>
			<div id="log-in-part" class="row-span-1 flex items-center">
				<a
					href="/"
					class="group flex w-full items-center justify-start rounded-lg"
					aria-label="sign~in"
				>
					<div
						class="flex aspect-square h-10 items-center justify-center rounded-lg transition group-hover:bg-red-600"
					>
						<span><i class="fa-solid fa-right-to-bracket"></i></span>
					</div>
					<span class="xs:hidden text-lg font-bold whitespace-nowrap sm:inline">Sign~in</span>
				</a>
			</div>
		</div>
	</div>
	hello world sss
</nav>

<style lang="postcss">
	@media screen and (max-width: 1024px) {
		#logo-name-side > a {
			font-size: 1.2rem;
		}
		#home,
		#market,
		#faq,
		#sign-in {
			font-size: 0.8rem;
		}
	}
	@media screen and (max-width: 768px) {
		#home {
			display: none;
		}

		#sign-in {
			margin-right: 0.5rem;
			font-size: 0.8rem;
			color: blue;
		}

		#open-btn {
			background: rgba(255, 255, 255, 0.8);
		}
	}
	@media screen and (max-width: 425px) {
		#home,
		#market,
		#faq,
		#sign-in {
			display: none;
		}
	}
</style>
