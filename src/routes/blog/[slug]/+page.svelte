<script>
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import typescript from 'svelte-highlight/languages/typescript';
	import css from 'svelte-highlight/languages/css';
	import xml from 'svelte-highlight/languages/xml';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import CopyFile from 'carbon-icons-svelte/lib/CopyFile.svelte';
	import { fly } from 'svelte/transition';
	/** @type {import('./$types').PageData} */
	export let data;
	const blogEntry = data.blogEntry.docs[0];
	import { showNavbar } from '../../../lib/stores';
	import serialize from '../../../utils/serialize';
	showNavbar.set(true);

	const languagesToHighlite = [
		{ languageName: 'html', languageHighlite: xml },
		{ languageName: 'css', languageHighlite: css },
		{ languageName: 'javascript', languageHighlite: javascript },
		{ languageName: 'typescript', languageHighlite: typescript }
	];

	async function saveToClipboard(code) {
		try {
			await navigator.clipboard.writeText(code);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<div class="flex items-center justify-center flex-grow my-20 overflow-hidden">
	<div>
		<div
			in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
			class="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full"
		>
			<div class="opacity-40 text-[24vw] select-none">BLOG</div>
		</div>
	</div>

	<div
		class="z-20 max-w-4xl p-5 px-5 m-5 overflow-hidden leading-7 tracking-wider prose-sm break-words prose-code:text-sm md:prose-code:text-base prose-table:my-2 prose-pre:p-0 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg md:prose-h2:text-3xl md:prose-h3:text-2xl md:prose-h1:text-4xl rounded-xl bg-zinc-800 md:p-10 md:px-10 md:prose-base prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline prose-a:text-orange-500 opacity-95 prose-p:my-2 prose-headings:my-7"
	>
		<div class="mb-10 text-2xl font-semibold md:text-5xl">
			<span class="bg-half-color">{blogEntry.title}</span>
		</div>
		{#each blogEntry.contentBlocks as block}
			{#if block.blockType === 'richText'}
				{@html serialize(new Object({ children: block.text }))}
			{/if}
			{#each languagesToHighlite as language}
				{#if block.blockType === `code ${language.languageName}`}
					<div class="flex items-center justify-between gap-3 px-5 py-2 translate-y-2 bg-gray-900">
						<div class="break-all">{block.filename}</div>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							on:click={saveToClipboard(block.code)}
							class="cursor-pointer hover:scale-105"
						>
							<CopyFile size={24} />
						</div>
					</div>
					<Highlight
						language={language.languageHighlite}
						code={block.code}
						let:highlighted
					>
						<LineNumbers
							{highlighted}
							hideBorder
						/>
					</Highlight>
				{/if}
			{/each}
		{/each}
	</div>
</div>
