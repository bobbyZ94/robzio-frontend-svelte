<script>
	import About from '../components/About.svelte';
	import Home from '../components/Home.svelte';
	import Projects from '../components/Projects.svelte';
	import Blog from '../components/Blog.svelte';
	import Contact from '../components/Contact.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="w-full h-full">
	<div id="home">
		<Home />
	</div>
	<div id="about"><About aboutPageData={data.aboutPageData} /></div>
	<div id="projects"><Projects /></div>
	<div id="blog"><Blog /></div>
	<div id="contact"><Contact /></div>
</div>
