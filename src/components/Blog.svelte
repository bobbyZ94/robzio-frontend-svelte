<script>
	import { env } from '$env/dynamic/public';
	import { fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import BlogCard from './BlogCard.svelte';
	export let blog;
	const blogEntries = blog.docs;

	const blogEntriesCount = blogEntries.length;
	const blogEntriesPerPage = 3;
	const maxNumberOfPages = Math.ceil(blogEntriesCount / blogEntriesPerPage);
	let currentPage = 1;
	let flyDirection = 'right';

	// custom in/out transition functions to ensure that component gets updated flyDirection asap
	const myIn = (el) => {
		return fly(el, {
			duration: 500,
			delay: 0,
			x: flyDirection === 'right' ? 1000 : -1000,
			y: 0,
			opacity: 1,
			easing: linear
		});
	};
	const myOut = (el) => {
		return fly(el, {
			duration: 500,
			delay: 0,
			x: flyDirection === 'right' ? -1000 : 1000,
			y: 0,
			opacity: 1,
			easing: linear
		});
	};
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
	<div class="fixContainerTransition overflow-hidden rounded-xl max-w-7xl">
		{#key currentPage}
			<div
				in:myIn|local
				out:myOut|local
				class="fixItemTransition z-20 items-center justify-center gap-10 flex flex-wrap"
			>
				{#each blogEntries.data.slice(blogEntriesPerPage * currentPage - blogEntriesPerPage, blogEntriesPerPage * currentPage) as blogEntry}
					<div class="rounded-xl overflow-hidden hover:scale-[1.02] duration-300 ease-in-out">
						<BlogCard
							blogTitle={blogEntry.title}
							blogImage={`${env.PUBLIC_PAYLOADCMS_URL}${blogEntry.attributes.Image.data.attributes.formats.large.url}`}
							blogDate={new Date(blogEntry.date).toLocaleDateString('de-DE')}
							blogSlug={blogEntry.attributes.Slug}
						/>
					</div>
				{/each}
			</div>
		{/key}
	</div>

	<!--PAGINATOR-->
	<div class="mt-10 flex gap-1 z-20 items-center">
		<button
			class="border border-gray-50 rounded-full h-8 w-8 flex items-center justify-center bg-zinc-900 opacity-95"
			on:click={() => {
				flyDirection = 'left';
				if (currentPage === 1) currentPage = maxNumberOfPages;
				else currentPage--;
			}}><ChevronLeft size={24} /></button
		>

		<div class="w-12 text-center h-6 tracking-widest">
			{currentPage}/{maxNumberOfPages}
		</div>

		<button
			class="border border-gray-50 rounded-full h-8 w-8 flex items-center justify-center bg-zinc-900 opacity-95"
			on:click={() => {
				flyDirection = 'right';
				if (currentPage === maxNumberOfPages) currentPage = 1;
				else currentPage++;
			}}><ChevronRight size={24} /></button
		>
	</div>
</div>

<!-- css hack for problem with transition of same elements; svelte does not have a fix yet -->
<style>
	.fixContainerTransition {
		display: grid;
	}

	.fixItemTransition {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 1;
	}
</style>
