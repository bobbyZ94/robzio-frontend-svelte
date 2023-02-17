<script>
	import ArrowUp from 'carbon-icons-svelte/lib/ArrowUp.svelte';
	import { scale } from 'svelte/transition';
	import { currentScrollY } from '../lib/stores';

	// scroll to top of page or navigate to previous page if already at top
	let currentScrollYValue;
	currentScrollY.subscribe((value) => {
		currentScrollYValue = value;
	});
</script>

<div
	on:click={() => (currentScrollYValue > 100 ? window.scrollTo(0, 0) : history.back())}
	on:keyup={() => (currentScrollYValue > 100 ? window.scrollTo(0, 0) : history.back())}
	class={`p-1 m-5 border rounded-full bg-zinc-900 hover:scale-105 transistion-all ease-in-out duration-300 ${
		currentScrollYValue < 100 && '-rotate-90 '
	}`}
	transition:scale|local={{ delay: 100, duration: 1000, start: 0, opacity: 0 }}
>
	<ArrowUp size={32} />
</div>
