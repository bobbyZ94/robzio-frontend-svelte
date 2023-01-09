<script>
	import About from '../components/About.svelte';
	import Home from '../components/Home.svelte';
	import Projects from '../components/Projects.svelte';
	import Blog from '../components/Blog.svelte';
	import Contact from '../components/Contact.svelte';
	import { fade } from 'svelte/transition';
	import viewport from '../lib/useViewportAction';
	import { showAboutText, showProjectsText, showBlogText, showContactText } from '../lib/stores';
	let showAboutTextValue;
	showAboutText.subscribe((value) => {
		showAboutTextValue = value;
	});
	let showProjectsTextValue;
	showProjectsText.subscribe((value) => {
		showProjectsTextValue = value;
	});
	let showBlogTextValue;
	showBlogText.subscribe((value) => {
		showBlogTextValue = value;
	});
	let showContactTextValue;
	showContactText.subscribe((value) => {
		showContactTextValue = value;
	});
	/** @type {import('./$types').PageData} */
	export let data;
	$: console.log(showAboutTextValue);
</script>

<div class="w-full h-full">
	<div id="home">
		<Home />
	</div>

	<div
		id="about"
		class="relative"
		use:viewport
		on:enterViewport={() => {
			showAboutText.set(true);
		}}
		on:exitViewport={() => {
			showProjectsText.set(true);
		}}
	>
		{#if showAboutTextValue}
			<div
				transition:fade|local={{ duration: 1000 }}
				class="fixed text-[25rem] top-[20%] left-[10%] z-0"
			>
				<div class="opacity-40">ABOUT</div>
			</div>
		{/if}
		<About aboutPageData={data.aboutPageData} />
	</div>

	<div
		id="projects"
		class="relative"
		use:viewport
		on:enterViewport={() => {
			showAboutText.set(false);
		}}
		on:exitViewport={() => {
			showProjectsText.set(false);
		}}
	>
		{#if showProjectsTextValue}
			<div
				transition:fade|local={{ duration: 1000 }}
				class="fixed text-[25rem] top-[20%] left-[10%] z-0"
			>
				<div class="opacity-40">PROJECTS</div>
			</div>
		{/if}
		<Projects projectsPageData={data.projectsPageData} />
	</div>

	<div id="blog"><Blog blogPageData={data.blogPageData} /></div>

	<div id="contact"><Contact contactPageData={data.contactPageData} /></div>
</div>
