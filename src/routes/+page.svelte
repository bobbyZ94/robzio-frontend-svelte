<script>
	import About from '../components/About.svelte';
	import Home from '../components/Home.svelte';
	import Projects from '../components/Projects.svelte';
	import Blog from '../components/Blog.svelte';
	import Contact from '../components/Contact.svelte';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { showNavbar } from '../lib/stores';
	/** @type {import('./$types').PageData} */
	export let data;
	let aboutIsInView, projectsIsInView, blogIsInView, contactIsInView;
	const options = {
		rootMargin: '-50%'
	};
</script>

<div class="w-full h-full">
	<div
		id="home"
		use:inview={options}
		on:change={(event) => {
			const { inView } = event.detail;
			showNavbar.set(!inView);
		}}
	>
		<Home />
	</div>

	<div
		id="about"
		class="relative"
		use:inview={options}
		on:change={(event) => {
			const { inView } = event.detail;
			aboutIsInView = inView;
		}}
	>
		{#if aboutIsInView}
			<div
				in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
				out:fly|local={{ duration: 2000, x: 2000, y: 0 }}
				class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
			>
				<div class="opacity-40 text-[20vw] select-none">ABOUT</div>
			</div>
		{/if}
		<About about={data.about} />
	</div>

	<div
		id="projects"
		class="relative"
		use:inview={options}
		on:change={(event) => {
			const { inView } = event.detail;
			projectsIsInView = inView;
		}}
	>
		{#if projectsIsInView}
			<div
				in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
				out:fly|local={{ duration: 2000, x: 2000, y: 0 }}
				class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
			>
				<div class="opacity-40 text-[16vw] select-none">PROJECTS</div>
			</div>
		{/if}
		<Projects
			projects={data.projects}
			{projectsIsInView}
		/>
	</div>

	<div
		id="blog"
		class="relative"
		use:inview={options}
		on:change={(event) => {
			const { inView } = event.detail;
			blogIsInView = inView;
		}}
	>
		{#if blogIsInView}
			<div
				in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
				out:fly|local={{ duration: 2000, x: 2000, y: 0 }}
				class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
			>
				<div class="opacity-40 text-[25vw] select-none">BLOG</div>
			</div>
		{/if}
		<Blog blog={data.blog} />
	</div>

	<div
		id="contact"
		class="relative"
		use:inview={options}
		on:change={(event) => {
			const { inView } = event.detail;
			contactIsInView = inView;
		}}
	>
		{#if contactIsInView}
			<div
				in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
				out:fly|local={{ duration: 2000, x: 2000, y: 0 }}
				class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
			>
				<div class="opacity-40 text-[16vw] select-none">CONTACT</div>
			</div>
		{/if}
		<Contact contact={data.contact} />
	</div>
</div>
