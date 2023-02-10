<script>
	import ArrowUp from 'carbon-icons-svelte/lib/ArrowUp.svelte';
	import { scale } from 'svelte/transition';
</script>

<a href="/">
	<div
		class="p-1 border rounded-full bg-zinc-900 m-5 hover:scale-105 ease-in-out duration-300"
		transition:scale|local={{ delay: 100, duration: 1000, start: 0, opacity: 0 }}
	>
		<ArrowUp size={32} />
	</div>
</a>
