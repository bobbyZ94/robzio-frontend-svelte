<script>
	import viewport from '../lib/useViewportAction';
	import { quintInOut } from 'svelte/easing';
	import { fade, draw, scale } from 'svelte/transition';
	import Typewriter from 'svelte-typewriter';
	import { showNavbar } from '../lib/stores';
	// Enables transistion at page load
	import { onMount } from 'svelte';
	let visible = false;
	onMount(() => {
		visible = true;
	});
	$: showNavbar.subscribe((value) => console.log(value));
</script>

<div class="tracking-wider flex items-center justify-center h-screen min-h-screen">
	{#if visible}
		<svg width="500px" height="500px" in:fade={{ delay: 500, duration: 2000 }} class="relative">
			<circle
				class="stroke-gray-50 stroke-[1px]"
				cx="250"
				cy="250"
				r="220"
				in:draw={{ duration: 4000, delay: 500, easing: quintInOut }}
			/>
			<foreignObject x="75" y="180" width="70%" height="100%">
				<div class="uppercase font-semibold ">
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
		<div class="flex flex-col gap-5 ml-5">
			<a href="/#about">
				<div class="-translate-x-10">
					<div
						in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
						class="hover:scale-105 ease-in-out duration-300 w-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
					>
						About
					</div>
				</div>
			</a>
			<a href="/#projects">
				<div
					in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
					class="hover:scale-105 ease-in-out duration-300 w-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
				>
					Projects
				</div>
			</a>

			<a href="/#blog">
				<div
					in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
					class="hover:scale-105 ease-in-out duration-300 w-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
				>
					Blog
				</div>
			</a>
			<a href="/#contact">
				<div
					class="-translate-x-10"
					use:viewport
					on:enterViewport={() => showNavbar.set(false)}
					on:exitViewport={() => showNavbar.set(true)}
				>
					<div
						in:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
						class="hover:scale-105 ease-in-out duration-300-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
					>
						Contact
					</div>
				</div>
			</a>
		</div>
	{/if}
</div>
