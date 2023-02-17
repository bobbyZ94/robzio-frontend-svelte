<script>
	import { env } from '$env/dynamic/public';
	import { fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import BlogCard from './BlogCard.svelte';
	export let blog;

	// md breakpoint in pixels
	const xl = 1500;
	$: innerWidth = 0;

	const blogEntriesCount = blog.docs.length;
	$: blogEntriesPerPage = innerWidth > xl ? 3 : 2;
	$: maxNumberOfPages = Math.ceil(blogEntriesCount / blogEntriesPerPage);
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

<!-- track innerWidth of screen in pixels  -->
<svelte:window bind:innerWidth />

<div class="flex flex-col items-center justify-center w-full h-screen">
	<div class="overflow-hidden fixContainerTransition rounded-xl max-w-7xl">
		{#key currentPage}
			<div
				in:myIn|local
				out:myOut|local
				class="z-20 flex flex-wrap items-center justify-center gap-10 fixItemTransition"
			>
				{#each blog.docs
					.sort((a, b) => new Date(b.date) - new Date(a.date))
					.slice(blogEntriesPerPage * currentPage - blogEntriesPerPage, blogEntriesPerPage * currentPage) as blogEntry}
					<div class="rounded-xl overflow-hidden hover:scale-[1.02] duration-300 ease-in-out">
						<BlogCard
							blogTitle={blogEntry.title}
							blogImage={`${env.PUBLIC_PAYLOADCMS_URL}${blogEntry.image.url}`}
							blogDate={new Date(blogEntry.date).toLocaleDateString('de-DE')}
							blogSlug={blogEntry.slug}
						/>
					</div>
				{/each}
			</div>
		{/key}
	</div>

	<!--PAGINATOR-->
	<div class="z-20 flex items-center gap-1 mt-10">
		<button
			class="flex items-center justify-center w-8 h-8 border rounded-full border-gray-50 bg-zinc-900 opacity-95"
			on:click={() => {
				flyDirection = 'left';
				if (currentPage === 1) currentPage = maxNumberOfPages;
				else currentPage--;
			}}><ChevronLeft size={24} /></button
		>

		<div class="w-12 h-6 tracking-widest text-center">
			{currentPage}/{maxNumberOfPages}
		</div>

		<button
			class="flex items-center justify-center w-8 h-8 border rounded-full border-gray-50 bg-zinc-900 opacity-95"
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
