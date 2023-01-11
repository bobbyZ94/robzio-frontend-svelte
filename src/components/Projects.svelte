<script>
	import { env } from '$env/dynamic/public';
	import { fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import ProjectCard from './ProjectCard.svelte';
	export let projectsPageData;

	const projectsCount = projectsPageData.data.length;
	const projectsPerPage = 1;
	const maxNumberOfPages = projectsCount / projectsPerPage;
	let currentPage = 1;
	let flyDirection = 'right';

	// custom in/out transition functions to ensure that component gets updated flyDirection asap
	const myIn = (el) => {
		return fly(el, {
			duration: 500,
			delay: 0,
			x: flyDirection === 'right' ? 800 : -800,
			y: 0,
			opacity: 1,
			easing: linear
		});
	};
	const myOut = (el) => {
		return fly(el, {
			duration: 500,
			delay: 0,
			x: flyDirection === 'right' ? -800 : 800,
			y: 0,
			opacity: 1,
			easing: linear
		});
	};
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
	<div class="z-20 items-center justify-center gap-10 container">
		{#key currentPage}
			{#key flyDirection}
				<div
					class="item flex items-center justify-center gap-16 overflow-hidden hover:scale-[1.02] duration-300 ease-in-out"
				>
					{#each projectsPageData.data.slice(projectsPerPage * currentPage - projectsPerPage, projectsPerPage * currentPage) as project}
						<div class="rounded-xl overflow-hidden">
							<div in:myIn out:myOut>
								<ProjectCard
									projectTitle={project.attributes.Title}
									projectText={project.attributes.Text}
									projectImage={`${env.PUBLIC_STRAPI_URL}${project.attributes.Image.data.attributes.formats.large.url}`}
									projectLink={project.attributes.Link ? project.attributes.Link : null}
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
