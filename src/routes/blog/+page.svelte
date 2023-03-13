<script>
	import { env } from '$env/dynamic/public';
	import { fly } from 'svelte/transition';
	import { showNavbar } from '../../lib/stores';
	import BlogCard from '../../components/BlogCard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const blog = data.blog;
	showNavbar.set(true);
</script>

<svelte:head>
	<title>Robzio - Blog</title>
	<meta
		name="description"
		content="Blog Page"
	/>
</svelte:head>

<div class="items-center justify-center flex h-screen w-full my-[10rem] p-10 mt-20">
	<div
		in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
		out:fly|local={{ duration: 2000, x: 2000, y: 0 }}
		class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
	>
		<div class="opacity-40 text-[25vw] select-none">BLOG</div>
	</div>
	<div class="max-w-7xl flex gap-8 lg:gap-16 z-20 flex-wrap items-center justify-center mx-[7rem]">
		{#each blog?.docs.sort((a, b) => new Date(b.date) - new Date(a.date)) as blogEntry}
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
</div>
