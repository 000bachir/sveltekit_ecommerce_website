<script lang="ts">
	import { onMount } from 'svelte';

	// function FancySentenceHoverEffect() {
	// 	const sentence = document.getElementById('intro-title');
	// 	if (!sentence || sentence.dataset.processed) return;

	// 	const splittedSentence = sentence.textContent!.split('')
	// 	sentence.innerHTML = "" ;
	// 	let spans = Array.from(sentence.children) as HTMLSpanElement[]
	// 	spans = splittedSentence.map((char , index) => {
	// 		const span = document.createElement("span")
	// 		span.textContent = char
	// 		span.dataset.index = String(index)
	// 		sentence.appendChild(span)
	// 		return span
	// 	})
	// 	sentence.dataset.processed = "true"

	// 	sentence.addEventListener('mouseenter' , (event : MouseEvent)=> {
	// 		const target = event.target as HTMLElement
	// 		if (!target || target.tagName !== "SPAN") return;

	// 		const index = parseInt(target.dataset.index! , 10)
	// 		spans.forEach((span)=> span.classList.remove("hovered" , "hovered-adjacent"))
	// 		target.classList.add("hovered")
	// 		if (index > 0) spans[index - 1].classList.add('hovered-adjacent');
	//     	if (index < spans.length - 1) spans[index + 1].classList.add('hovered-adjacent');

	// 	})
	// }
	function FancySentenceHoverEffect() {
		const sentence = document.getElementById('intro-title');
		if (!sentence) return;

		// Split text into individual characters and replace content with spans
		const splittedSentence = sentence.innerHTML.split('');
		sentence.innerHTML = '';
		splittedSentence.forEach((char: string, index: number) => {
			const span = document.createElement('span');
			span.textContent = char;
			span.dataset.index = String(index);
			sentence.appendChild(span);
		});

		//Delegate hover events to the parent element
		sentence.addEventListener('mouseover', (e: any) => {
			const target = e.target;
			if (!target || target.tagName !== 'SPAN') return;

			const index = parseInt(target.dataset.index, 10);
			const spans = sentence.querySelectorAll('span');

			// Reset all classes
			spans.forEach((span) => span.classList.remove('hovered', 'hovered-adjacent'));

			// Add classes to hovered and adjacent spans
			target.classList.add('hovered');
			if (index > 0) spans[index - 1].classList.add('hovered-adjacent');
			if (index < spans.length - 1) spans[index + 1].classList.add('hovered-adjacent');
		});
	}

	onMount(() => {
		FancySentenceHoverEffect();
	});
</script>

<section id="hero" class="relative flex h-dvh w-full items-center justify-center overflow-hidden">
	<div id="buble" class=""></div>
	<div class="absolute flex h-full w-full items-center justify-center">
		<h1 id="intro-title" class=" text-5xl font-thin text-white uppercase">
			Welcome to your digital Store!
		</h1>
	</div>
</section>

<style lang="postcss">
	:root {
		--_float-distance: -20px;
		--_float-speed: 4s;
		--_size: 250px;
		--bg-body-rgb: rgb(0, 0, 0);

		--green: rgb(42, 252, 152);
		--blue: rgb(41, 121, 255);
	}

	#buble {
		width: var(--_size);
		aspect-ratio: 1/1;
		border-radius: 50%;
		backdrop-filter: blur(5px);
		box-shadow:
			inset 0 0.13vmin #de0029,
			inset 0 0.18vmin #326db3,
			inset 0.1vmin 0.1vmin #00aa9e,
			inset 0.1vmin 0.1vmin #f3c202;
		animation: floating var(--_float-speed) ease-in-out infinite;
		will-change: transform;
	}
	#buble::before,
	#buble::after {
		position: absolute;
		border-radius: inherit;
		content: '';
	}

	#buble::before {
		inset: 0;
		backdrop-filter: blur(12px);
		background-image: conic-gradient(
			from -25deg at 80% 20%,
			transparent 85%,
			rgba(255, 255, 255, 0.7) 94%,
			transparent 94%
		);
		filter: blur(4px);
	}

	#buble::after {
		inset: -3px;
		background: rgba(var(--bg-body-rgb), 0.2);
		backdrop-filter: blur(3px);
		z-index: -1;
	}
	@keyframes floating {
		0%,
		100% {
			translate: 0;
		}
		50% {
			translate: 0 var(--_float-distance, -10px);
		}
	}

	:global(.hovered) {
		font-weight: 900;
		color: #00aa9e;
		transition: all 600ms ease;
	}

	:global(.hovered-adjacent) {
		font-weight: 900;
		transition: all 400ms ease;
	}

	@media screen and (max-width: 768px) {
		h1 {
			font-size: 2.2rem;
		}
	}
	@media screen and (max-width: 425px) {
		h1 {
			font-size: 2.3rem;
			text-wrap: balance;
			text-align: center;
		}
	}
</style>
