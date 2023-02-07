<script>
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import typescript from 'svelte-highlight/languages/typescript';
	import css from 'svelte-highlight/languages/css';
	import xml from 'svelte-highlight/languages/xml';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { fly } from 'svelte/transition';
	/** @type {import('./$types').PageData} */
	export let data;
	const blogEntry = data.blogEntry.docs[0];
	import { showNavbar } from '../../../lib/stores';
	import serialize from '../../../utils/serialize';
	showNavbar.set(true);
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<div class="flex-grow items-center justify-center flex my-20">
	<div>
		<div
			in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
			class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
		>
			<div class="opacity-40 text-[24vw] select-none">BLOG</div>
		</div>
	</div>

	<div
		class="prose-table:my-2 prose-pre:p-0 prose-code:text-base max-w-4xl rounded-xl bg-zinc-800 p-10 px-10 mx-5 prose-base prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline prose-a:text-blue-600 z-20 opacity-95"
	>
		<div class="text-3xl mb-5">{blogEntry.title}</div>
		{#each blogEntry.contentBlocks as block}
			{#if block.blockType === 'richText'}
				{@html serialize(new Object({ children: block.text }))}
			{/if}
			{#if block.blockType === 'code javascript'}
				<div class="bg-gray-800 translate-y-2 px-3">{block.filename}</div>
				<Highlight language={javascript} code={block.code} let:highlighted>
					<LineNumbers {highlighted} hideBorder />
				</Highlight>
			{/if}
			{#if block.blockType === 'code typescript'}
				<div class="bg-gray-800 translate-y-2 px-3">{block.filename}</div>
				<Highlight language={typescript} code={block.code} let:highlighted>
					<LineNumbers {highlighted} hideBorder />
				</Highlight>
			{/if}
			{#if block.blockType === 'code html'}
				<div class="bg-gray-800 translate-y-2 px-3">{block.filename}</div>
				<Highlight language={xml} code={block.code} let:highlighted>
					<LineNumbers {highlighted} hideBorder />
				</Highlight>
			{/if}
			{#if block.blockType === 'code css'}
				<div class="bg-gray-800 translate-y-2 px-3">{block.filename}</div>
				<Highlight language={css} code={block.code} let:highlighted>
					<LineNumbers {highlighted} hideBorder />
				</Highlight>
			{/if}
		{/each}
	</div>
</div>
