<script>
	export let blogTitle;
	export let blogText;
	export let blogImage;
	export let blogLink;
	export let blogDate;
</script>

<a href={blogLink}>
	<div
		class="bg-zinc-800 w-[25rem] h-[20rem] flex flex-col gap-5 rounded-xl overflow-hidden opacity-95"
	>
		<div class="w-[25rem] h-[10rem]">
			<img src={blogImage} alt={blogTitle} class="w-full h-full object-cover" />
		</div>

		<div class="px-5 text-xl font-semibold w-full flex justify-between">
			{blogTitle}
			<span class="ml-5 text-sm italic">{blogDate}</span>
		</div>

		<div class="px-5 pb-5">
			{@html blogText.slice(0, 100) + ' ...'}
		</div>
	</div>
</a>
