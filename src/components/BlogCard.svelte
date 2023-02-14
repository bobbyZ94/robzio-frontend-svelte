<script>
	export let blogTitle;
	export let blogImage;
	export let blogDate;
	export let blogSlug;
	console.log('URL', blogImage);
</script>

<a href={`/blog/${blogSlug}`}>
	<div
		class="bg-zinc-800 md:w-[23rem] md:h-[20rem] w-[15rem] h-[12rem] flex flex-col rounded-xl overflow-hidden opacity-95"
	>
		<div class="md:w-[23rem] md:h-[10rem] w-full h-[5rem]">
			<img
				src={blogImage}
				alt={blogTitle}
				class="w-full h-full object-cover"
			/>
		</div>

		<div
			class="px-5 py-2 w-full flex flex-col justify-center items-center h-full md:text-xl text-sm md:font-semibold"
		>
			<div class="flex-grow items-center justify-center flex">
				{blogTitle.length > 100 ? blogTitle.slice(0, 100) + ' ...' : blogTitle}
			</div>
			<div class="text-xs italic font-normal self-end">
				{blogDate}
			</div>
		</div>
	</div>
</a>
