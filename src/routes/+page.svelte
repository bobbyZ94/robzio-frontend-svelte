<script>
	import { quintOut } from 'svelte/easing';
	import { fade, draw, scale } from 'svelte/transition';
	// Enables transistion at page load
	import { onMount } from 'svelte';
	let visible = false;
	onMount(() => {
		visible = true;
	});
	let i = 0;
</script>

<div class="tracking-wider w-full h-screen">
	<div class="w-full h-full flex items-center justify-center">
		{#if visible}
			<svg
				width="500px"
				height="500px"
				transition:fade={{ delay: 500, duration: 2000 }}
				class="relative"
			>
				<circle
					class="stroke-gray-50 stroke-[1px]"
					cx="250"
					cy="250"
					r="220"
					transition:draw={{ duration: 5000, delay: 500, easing: quintOut }}
				/>
				<foreignObject x="75" y="180" width="70%" height="100%">
					<div class="uppercase font-semibold ">
						<div transition:fade={{ delay: 500, duration: 1000 }} class="text-5xl">Robert</div>
						<div transition:fade={{ delay: 500, duration: 1000 }} class="text-5xl">Zioltkowski</div>
						<div
							transition:fade={{ delay: 500, duration: 1000 }}
							class="mt-5 ml-5 text-3xl italic font-light"
						>
							Webdevelopment
						</div>
					</div>
				</foreignObject>
			</svg>
			<div class="flex flex-col gap-5 ml-5">
				<a href="/#about">
					<div class="-translate-x-10">
						<div
							transition:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
							class="-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
						>
							About
						</div>
					</div>
				</a>
				<div
					transition:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
					class="w-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
				>
					Projects
				</div>
				<div
					transition:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
					class="w-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
				>
					Blog
				</div>
				<div class="-translate-x-10">
					<div
						transition:scale={{ delay: 3000, duration: 2000, start: 0, opacity: 0 }}
						class="-24 h-24 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
					>
						Contact
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
