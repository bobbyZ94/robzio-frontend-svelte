<script>
	export let blogTitle;
	export let blogImage;
	export let blogDate;
	export let blogSlug;
</script>

<a href={`/blog/${blogSlug}`}>
	<div class="bg-zinc-800 w-[23rem] h-[20rem] flex flex-col rounded-xl overflow-hidden opacity-95">
		<div class="w-[23rem] h-[10rem]">
			<img src={blogImage} alt={blogTitle} class="w-full h-full object-cover" />
		</div>

		<div class="px-5 py-2 w-full flex justify-between items-center h-full text-xl font-semibold">
			{blogTitle.length > 100 ? blogTitle.slice(0, 100) + ' ...' : blogTitle}
			<span class="ml-5 text-xs italic self-start pt-1 font-normal">{blogDate}</span>
		</div>
	</div>
</a>
