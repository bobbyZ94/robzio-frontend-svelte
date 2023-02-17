<script>
	import { env } from '$env/dynamic/public';
	import { fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import ProjectCard from './ProjectCard.svelte';
	export let projects;
	export let projectsIsInView;
	// project slider autoplay feature
	const autoPlayInterval = 8000;
	let isPlaying = false;
	let intervalID;
	function autoPlay(autoPlayInterval) {
		intervalID = setInterval(() => {
			if (projectsIsInView) {
				flyDirection = 'right';
				if (currentPage === maxNumberOfPages) currentPage = 1;
				else currentPage++;
			}
		}, autoPlayInterval);
	}
	// reactive binding, so autoPlay only start when projectsIsInView changes
	$: if (projectsIsInView && !isPlaying) {
		autoPlay(autoPlayInterval);
		isPlaying = true;
	}
	const projectsCount = projects.docs.length;
	const projectsPerPage = 1;
	const maxNumberOfPages = Math.ceil(projectsCount / projectsPerPage);
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
	<div class="z-20 flex items-center gap-10 justify-center">
		{#each projects.docs
			.sort((a, b) => new Date(b.date) - new Date(a.date))
			.slice(projectsPerPage * currentPage - projectsPerPage, projectsPerPage * currentPage) as project}
			<div
				class="fixContainerTransition rounded-xl overflow-hidden hover:scale-[1.02] duration-300 ease-in-out"
			>
				{#key currentPage}
					<div
						class="fixItemTransition"
						in:myIn|local
						out:myOut|local
					>
						<ProjectCard
							projectTitle={project.title}
							projectDescription={project.text}
							projectKeywords={project.keywords}
							projectImage={`${env.PUBLIC_PAYLOADCMS_URL}${project.image.url}`}
							projectLink={project.link ? project.link : null}
						/>
					</div>
				{/key}
			</div>
		{/each}
	</div>

	<!--PAGINATOR-->
	<div class="mt-10 flex gap-1 z-20 items-center">
		<button
			class="border border-gray-50 rounded-full h-8 w-8 flex items-center justify-center bg-zinc-900 opacity-95"
			on:click={() => {
				clearInterval(intervalID);
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
				clearInterval(intervalID);
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
