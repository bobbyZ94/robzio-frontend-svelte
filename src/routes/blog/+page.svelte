<script>
	import { env } from '$env/dynamic/public';
	import { fly } from 'svelte/transition';
	import { showNavbar } from '../../lib/stores';
	/** @type {import('./$types').PageData} */
	export let data;
	const blog = data.blog.docs;
	$: console.log(blog);
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
	<div>
		<div
			in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
			out:fly|local={{ duration: 2000, x: 2000, y: 0 }}
			class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
		>
			<div class="opacity-40 text-[25vw] select-none">BLOG</div>
		</div>
	</div>

	<div class="z-20 opacity-95 max-w-5xl">
		<div
			class="flex flex-col items-center justify-center bg-zinc-800 rounded-xl p-10 gap-5 md:text-xl text-sm"
		>
			<div class="text-xl md:text-2xl font-semibold">Blog</div>
			<div>
				<ul class="">
					{#each blog as blogEntry}
						<li class="">
							<div class="w-40 h-40">
								<img
									src={`${env.PUBLIC_PAYLOADCMS_URL}${blogEntry.image.url}`}
									alt={blogEntry.image.title}
									class="w-10 h-10 object-fit"
								/>
							</div>
							<div>
								{blogEntry.title}
							</div>
							<div>{blogEntry.date}</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
