<script>
	import ArrowUp from 'carbon-icons-svelte/lib/ArrowUp.svelte';
	import { scale } from 'svelte/transition';
</script>

<div
	on:click={() => window.scrollTo(0, 0)}
	on:keyup={() => window.scrollTo(0, 0)}
	class="p-1 m-5 duration-300 ease-in-out border rounded-full bg-zinc-900 hover:scale-105"
	transition:scale|local={{ delay: 100, duration: 1000, start: 0, opacity: 0 }}
>
	<ArrowUp size={32} />
</div>
