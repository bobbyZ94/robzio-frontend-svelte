<script>
	export let blogTitle;
	export let blogImage;
	export let blogDate;
	export let blogSlug;
</script>

<a href={`/blog/${blogSlug}`}>
	<div class="bg-zinc-800 w-[23rem] h-[14rem] flex flex-col rounded-xl overflow-hidden opacity-95">
		<div class="w-[23rem] h-[8rem]">
			<img src={blogImage} alt={blogTitle} class="w-full h-full object-cover" />
		</div>

		<div class="px-5 py-2 font-semibold w-full flex justify-between h-full text-xl">
			{blogTitle}
			<span class="ml-5 text-xs italic self-start pt-1">{blogDate}</span>
		</div>
	</div>
</a>
