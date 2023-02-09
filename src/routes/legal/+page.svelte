<script>
	import { fly } from 'svelte/transition';
	import { showNavbar } from '../../lib/stores';
	import serialize from '../../utils/serialize';
	/** @type {import('./$types').PageData} */
	export let data;
	const legalText = { children: data.legal.text };
	showNavbar.set(true);
</script>

<div class="flex-grow items-center justify-center flex my-20 overflow-hidden">
	<div>
		<div
			in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
			class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
		>
			<div class="opacity-40 text-[24vw] select-none">LEGAL</div>
		</div>
	</div>

	<div
		class="overflow-hidden break-words prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg md:prose-h2:text-3xl md:prose-h3:text-2xl md:prose-h1:text-4xl max-w-4xl rounded-xl bg-zinc-800 
    p-5 md:p-10 px-5 m-5 md:px-10 prose-sm md:prose-base prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline prose-a:text-blue-600 
    z-20 opacity-95 leading-5 md:leading-6"
	>
		{@html serialize(legalText)}
	</div>
</div>
