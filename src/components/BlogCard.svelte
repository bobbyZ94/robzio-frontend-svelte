<script>
	export let blogTitle;
	export let blogText;
	export let blogImage;
	export let blogDate;
	export let blogSlug;
</script>

<a href={`/blog/${blogSlug}`}>
	<div
		class="bg-zinc-800 w-[23rem] h-[16rem] flex flex-col gap-3 rounded-xl overflow-hidden opacity-95"
	>
		<div class="w-[23rem] h-[8rem]">
			<img src={blogImage} alt={blogTitle} class="w-full h-full object-cover" />
		</div>

		<div class="px-5 font-semibold w-full flex justify-between text-lg">
			{blogTitle}
			<span class="ml-5 text-sm italic">{blogDate}</span>
		</div>

		<div class="text-sm px-5 pb-5">
			{@html blogText.slice(0, 80) + ' ...'}
		</div>
	</div>
</a>
