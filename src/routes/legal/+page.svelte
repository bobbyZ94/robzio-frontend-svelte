<script>
	import { fly } from 'svelte/transition';
	import { showNavbar } from '../../lib/stores';
	import serialize from '../../utils/serialize';
	/** @type {import('./$types').PageData} */
	export let data;
	const legalText = { children: data.legal.text };
	showNavbar.set(true);
</script>

<div class="flex-grow items-center justify-center flex my-20">
	<div>
		<div
			in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
			class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
		>
			<div class="opacity-40 text-[24vw] select-none">LEGAL</div>
		</div>
	</div>

	<div
		class="max-w-4xl rounded-xl bg-zinc-800 p-10 px-10 mx-5 prose-base prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline prose-a:text-blue-600 z-20 opacity-95"
	>
		{@html serialize(legalText)}
	</div>
</div>
