<script>
	import { each } from 'svelte/internal';

	export let projectTitle;
	export let projectDescription;
	export let projectKeywords;
	export let projectImage;
	export let projectLink;
	const projectKeywordsArray = projectKeywords.split(',');
</script>

<a href={projectLink}>
	<div
		class="bg-zinc-800 w-[20rem] lg:w-[45rem] h-[34rem] flex flex-col rounded-xl overflow-hidden opacity-95"
	>
		<div class="w-[20rem] lg:w-[45rem] h-[22rem]">
			<img src={projectImage} alt={projectTitle} class="w-full h-full object-cover" />
		</div>
		<div class="p-5 flex flex-col justify-between flex-grow">
			<div class="text-3xl font-semibold text-center">{projectTitle}</div>
			<div class="mt-2">{projectDescription}</div>
			<div class="mt-2 flex flex-wrap gap-1">
				<div class="p-1">Tech-Stack:</div>
				{#each projectKeywordsArray as keyword}
					<div class="bg-zinc-700 rounded-lg p-1 shadow-xl">{keyword}</div>
				{/each}
			</div>
		</div>
	</div>
</a>
