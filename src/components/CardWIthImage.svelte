<script>
	export let projectTitle;
	export let projectText;
	export let projectImage;
	export let projectLink;
</script>

<a href={projectLink}>
	<div
		class="bg-zinc-800 w-[45rem] h-[35rem] flex flex-col justify-between rounded-xl overflow-hidden shadow-x hover:scale-[1.02] duration-300 ease-in-out opacity-95"
	>
		<div class="w-[45rem] h-[22rem]">
			<img src={projectImage} alt={projectTitle} class="w-full h-full object-cover" />
		</div>

		<div class="px-5 text-3xl font-semibold text-center">{projectTitle}</div>
		<div class="px-5 pb-5">
			{@html projectText.slice(0, 300) + ' ...'}
		</div>
	</div>
</a>
