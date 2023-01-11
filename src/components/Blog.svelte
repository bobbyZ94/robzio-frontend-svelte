<script>
	import { env } from '$env/dynamic/public';
	import { fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import BlogCard from './BlogCard.svelte';
	export let blogPageData;

	const blogEntriesCount = blogPageData.data.length;
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
	<div class="z-20 items-center justify-center gap-10 containerForTransition">
		{#key currentPage}
			{#key flyDirection}
				<div
					class="itemForTransition flex items-center justify-center gap-16 overflow-hidden rounded-xl"
				>
					{#each blogPageData.data.slice(blogEntriesPerPage * currentPage - blogEntriesPerPage, blogEntriesPerPage * currentPage) as blogEntry}
						<div class="hover:scale-[1.02] duration-300 ease-in-out rounded-xl">
							<div in:myIn out:myOut>
								<BlogCard
									blogTitle={blogEntry.attributes.Title}
									blogText={blogEntry.attributes.Text}
									blogImage={`${env.PUBLIC_STRAPI_URL}${blogEntry.attributes.Image.data.attributes.formats.large.url}`}
									blogLink={blogEntry.attributes.Link ? blogEntry.attributes.Link : null}
									blogDate={new Date(blogEntry.attributes.Date).toLocaleDateString('de-DE')}
								/>
							</div>
						</div>
					{/each}
				</div>
			{/key}
		{/key}
	</div>

	<!--PAGINATOR-->
	<div class="mt-10 flex gap-1 z-20 items-center">
		<button
			class="border border-gray-50 rounded-full h-8 w-8 flex items-center justify-center"
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
			class="border border-gray-50 rounded-full h-8 w-8 flex items-center justify-center"
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
	.containerForTransition {
		display: grid;
	}

	.itemForTransition {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
	}
</style>
