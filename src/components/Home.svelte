<script>
	import { quintInOut } from 'svelte/easing';
	import { fade, draw, scale } from 'svelte/transition';
	import Typewriter from 'svelte-typewriter';
	// Enables transistion at page load
	import { onMount } from 'svelte';
	let visible = false;
	onMount(() => {
		visible = true;
	});

	// md breakpoint in pixels
	const md = 768;
	$: innerWidth = 0;
</script>

<!-- track innerWidth of screen in pixels  -->
<svelte:window bind:innerWidth />

<div class="tracking-wider flex flex-row items-center justify-center h-screen min-h-screen z-20">
	{#if visible}
		{#if innerWidth > md}
			<svg
				width="500px"
				height="500px"
				in:fade={{ delay: 500, duration: 2000 }}
				class="relative z-20"
			>
				<circle
					class="stroke-gray-50 stroke-[1px]"
					cx="250"
					cy="250"
					r="220"
					in:draw={{ duration: 4000, delay: 500, easing: quintInOut }}
				/>
				<foreignObject x="75" y="180" width="70%" height="100%">
					<div class="uppercase font-semibold z-20">
						<div in:fade={{ delay: 500, duration: 1000 }} class="text-5xl">Robert</div>
						<div in:fade={{ delay: 500, duration: 1000 }} class="text-5xl">Zioltkowski</div>
						<Typewriter
							mode="loop"
							interval="130"
							unwriteInterval="50"
							delay="5000"
							--cursor-color="#f9fafb"
							--cursor-width="2px"
						>
							<div class="mt-5 ml-5 text-3xl italic font-light text-center">Webdevelopment</div>
							<div class="mt-5 ml-5 text-3xl italic font-light text-center">Webdesign</div>
							<div class="mt-5 ml-5 text-3xl italic font-light text-center">Frontend</div>
							<div class="mt-5 ml-5 text-3xl italic font-light text-center">Backend</div>
							<div class="mt-5 ml-5 text-3xl italic font-light text-center">Fullstack</div>
						</Typewriter>
					</div>
				</foreignObject>
			</svg>
			<div class="flex flex-col gap-5 ml-5 z-20">
				<a href="/#about">
					<div class="-translate-x-10 z-20">
						<div
							in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
							class="z-20 hover:scale-105 ease-in-out duration-300 w-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
						>
							About
						</div>
					</div>
				</a>
				<a href="/#projects">
					<div
						in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
						class="z-20 hover:scale-105 ease-in-out duration-300 w-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
					>
						Projects
					</div>
				</a>
				<a href="/#blog">
					<div
						in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
						class="z-20 hover:scale-105 ease-in-out duration-300 w-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
					>
						Blog
					</div>
				</a>
				<a href="/#contact">
					<div class="z-20 -translate-x-10">
						<div
							in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
							class="z-20 hover:scale-105 ease-in-out duration-300 w-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
						>
							Contact
						</div>
					</div>
				</a>
			</div>
		{:else}
			<svg
				width="230px"
				height="500px"
				in:fade={{ delay: 500, duration: 2000 }}
				class="relative z-20"
			>
				<circle
					class="stroke-gray-50 stroke-[1px] -translate-x-4"
					cx="135"
					cy="250"
					r="110"
					in:draw={{ duration: 4000, delay: 500, easing: quintInOut }}
				/>
				<foreignObject x="33" y="190" width="80%" height="100%">
					<div class="uppercase font-semibold z-20">
						<div in:fade={{ delay: 500, duration: 1000 }} class="text-2xl">Robert</div>
						<div in:fade={{ delay: 500, duration: 1000 }} class="text-2xl">Zioltkowski</div>
						<Typewriter
							mode="loop"
							interval="130"
							unwriteInterval="50"
							delay="5000"
							--cursor-color="#f9fafb"
							--cursor-width="2px"
						>
							<div class="mt-5 text-xl italic font-light text-center">Webdev</div>
							<div class="mt-5 text-xl italic font-light text-center">Webdesign</div>
							<div class="mt-5 text-xl italic font-light text-center">Frontend</div>
							<div class="mt-5 text-xl italic font-light text-center">Backend</div>
							<div class="mt-5 text-xl italic font-light text-center">Fullstack</div>
						</Typewriter>
					</div>
				</foreignObject>
			</svg>
			<div class="flex flex-col gap-5 ml-6 z-20 text-xs -translate-x-3">
				<a href="/#about">
					<div class="-translate-x-10 z-20">
						<div
							in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
							class="z-20 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center bg-zinc-900"
						>
							About
						</div>
					</div>
				</a>
				<a href="/#projects">
					<div
						in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
						class="z-20 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center bg-zinc-900"
					>
						Projects
					</div>
				</a>
				<a href="/#blog">
					<div
						in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
						class="z-20 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center bg-zinc-900"
					>
						Blog
					</div>
				</a>
				<a href="/#contact">
					<div class="z-20 -translate-x-10">
						<div
							in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
							class="z-20 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center bg-zinc-900"
						>
							Contact
						</div>
					</div>
				</a>
			</div>
			<!-- <div
				class="uppercase font-semibold z-20 border border-gray-50 rounded-full w-64 h-64 p-5 flex items-center flex-col justify-center"
			>
				<div class="">
					<div in:fade={{ delay: 500, duration: 1000 }} class="text-3xl">Robert</div>
					<div in:fade={{ delay: 500, duration: 1000 }} class="text-3xl">Zioltkowski</div>
					<Typewriter
						mode="loop"
						interval="130"
						unwriteInterval="50"
						delay="5000"
						--cursor-color="#f9fafb"
						--cursor-width="2px"
					>
						<div class="mt-5 ml-5 text-xl italic font-light text-center">Webdev</div>
						<div class="mt-5 ml-5 text-xl italic font-light text-center">Webdesign</div>
						<div class="mt-5 ml-5 text-xl italic font-light text-center">Frontend</div>
						<div class="mt-5 ml-5 text-xl italic font-light text-center">Backend</div>
						<div class="mt-5 ml-5 text-xl italic font-light text-center">Fullstack</div>
					</Typewriter>
				</div>
			</div>

			<div class="flex flex-col gap-5 ml-5 text-xs z-20">
				<a href="/#about">
					<div class="-translate-x-10 z-20">
						<div
							in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
							class="z-20 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
						>
							About
						</div>
					</div>
				</a>
				<a href="/#projects">
					<div
						in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
						class="z-20 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
					>
						Projects
					</div>
				</a>

				<a href="/#blog">
					<div
						in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
						class="z-20 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
					>
						Blog
					</div>
				</a>
				<a href="/#contact">
					<div class="z-20 -translate-x-10">
						<div
							in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
							class="z-20 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
						>
							Contact
						</div>
					</div>
				</a>
			</div> -->
		{/if}
	{/if}
</div>
