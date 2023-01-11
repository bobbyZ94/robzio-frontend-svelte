<script>
	import { env } from '$env/dynamic/public';
	import { fly } from 'svelte/transition';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import CardWIthImage from './CardWIthImage.svelte';
	export let projectsPageData;
	const projectsCount = projectsPageData.data.length;
	const projectsPerPage = 1;
	const maxNumberOfPages = projectsCount / projectsPerPage;
	let currentPage = 1;
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
	<div class="z-20 items-center justify-center gap-10 container">
		{#key currentPage}
			<div class="item flex items-center justify-center gap-16">
				{#each projectsPageData.data.slice(currentPage - 1, currentPage) as project}
					<div
						in:fly={{ duration: 1000, delay: 100, x: -200, y: 0 }}
						out:fly={{ duration: 1000, delay: 0, x: 200, y: 0 }}
					>
						<CardWIthImage
							projectTitle={project.attributes.Title}
							projectText={project.attributes.Text}
							projectImage={`${env.PUBLIC_STRAPI_URL}${project.attributes.Image.data.attributes.formats.large.url}`}
							projectLink={project.attributes.Link ? project.attributes.Link : null}
						/>
					</div>
				{/each}
			</div>
		{/key}
	</div>
	<div class="mt-10 flex gap-5 z-20">
		<button
			class="border border-gray-50 rounded-full h-8 w-8 flex items-center justify-center "
			on:click={() => {
				if (currentPage === 1) currentPage = maxNumberOfPages;
				else currentPage--;
			}}><ChevronLeft size={24} /></button
		>
		{#each { length: maxNumberOfPages } as _, i}
			<button
				on:click={() => (currentPage = i + 1)}
				class={`${currentPage === i + 1 ? 'scale-110 font-semibold' : ''}`}>{i + 1}</button
			>
		{/each}
		<button
			class="border border-gray-50 rounded-full h-8 w-8 flex items-center justify-center"
			on:click={() => {
				if (currentPage === maxNumberOfPages) currentPage = 1;
				else currentPage++;
			}}><ChevronRight size={24} /></button
		>
	</div>
</div>

<!-- css hack for problem with transition of same elements; svelte does not have a fix yet -->
<style>
	.container {
		display: grid;
	}

	.item {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
	}
</style>
