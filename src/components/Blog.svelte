<script>
	import { env } from '$env/dynamic/public';
	import BlogCard from './BlogCard.svelte';
	export let blog;

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="flex flex-col items-center justify-center w-full h-screen">
	<div class="max-w-7xl flex gap-8 lg:gap-16 z-20 flex-col xl:flex-row">
		{#each blog?.docs
			.sort((a, b) => new Date(b.date) - new Date(a.date))
			.slice(0, innerWidth < 1536 ? 2 : 3) as blogEntry}
			<div class="hover:scale-[1.02] duration-300 ease-in-out">
				<BlogCard
					blogTitle={blogEntry.title}
					blogDate={new Date(blogEntry.date).toLocaleDateString('de-DE')}
					blogImage={`${env.PUBLIC_PAYLOADCMS_URL}${blogEntry.image.url}`}
					blogSlug={blogEntry.slug}
				/>
			</div>
		{/each}
	</div>
	<a
		href="/blog"
		class="p-2 mt-10 border rounded-xl bg-zinc-900 hover:scale-105 transistion-all ease-in-out duration-300 z-30 text-xs md:text-base"
	>
		<button>All Blog Entries ..</button>
	</a>
</div>
