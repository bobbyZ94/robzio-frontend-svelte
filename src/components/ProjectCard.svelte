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
		class="bg-zinc-800 w-[18rem] md:w-[45rem] md:h-[34rem] h-[25rem] flex flex-col rounded-xl overflow-hidden opacity-95"
	>
		<div class="w-[18rem] md:w-[45rem] md:h-[22rem] h-[15rem]">
			<img
				src={projectImage}
				alt={projectTitle}
				class="w-full h-full object-cover"
			/>
		</div>
		<div class="p-5 flex flex-col justify-between flex-grow">
			<div class="md:text-3xl text-xl font-semibold text-center">{projectTitle}</div>
			<div class="mt-2 md:text-base text-sm">{projectDescription}</div>
			<div class="mt-2 flex flex-wrap gap-1 md:text-base text-sm">
				<div class="p-1">Tech-Stack:</div>
				{#each projectKeywordsArray as keyword}
					<div class="bg-zinc-700 rounded-lg p-1 shadow-xl">{keyword}</div>
				{/each}
			</div>
		</div>
	</div>
</a>
