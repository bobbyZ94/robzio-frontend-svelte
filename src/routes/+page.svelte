<script>
	import { Motion } from 'svelte-motion';
	import { fade } from 'svelte/transition';
	// Enables transistion at page load
	import { onMount } from 'svelte';
	let visible = false;
	onMount(() => {
		visible = true;
	});
	let i = 0;
</script>

<div class="uppercase tracking-wider font-semibold w-full h-full">
	<div class="w-full h-full flex items-center justify-center bg-red-200 relative">
		{#if visible}
			<div class="">
				<div class="">
					<div transition:fade={{ delay: 500, duration: 1000 }} class="text-3xl">Robert</div>
					<div transition:fade={{ delay: 500, duration: 1000 }} class="text-3xl">Zioltkowski</div>
				</div>
				<div class="">
					<Motion let:motion>
						<svg width="100%" height="100%" use:motion>
							<circle cx="100" cy="100" r="50" />
						</svg>
					</Motion>
				</div>
			</div>
		{/if}
	</div>
</div>
