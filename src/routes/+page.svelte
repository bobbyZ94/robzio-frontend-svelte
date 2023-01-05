<script>
	import About from '../components/About.svelte';
	import Home from '../components/Home.svelte';
	import Projects from '../components/Projects.svelte';
	import Blog from '../components/Blog.svelte';
	import Contact from '../components/Contact.svelte';
	import SideNavbar from '../components/SideNavbar.svelte';
	import { showNavbar } from '../lib/stores';
	let showNavbarValue;
	showNavbar.subscribe((value) => {
		showNavbarValue = value;
	});
</script>

<div class="w-full h-full">
	<div id="home">
		<Home />
	</div>
	<!-- Navbar -->
	{#if showNavbarValue}
		<div class="fixed top-[30%] right-20">
			<SideNavbar />
		</div>
	{/if}
	<!--Page Components-->

	<div id="about"><About /></div>
	<div id="projects"><Projects /></div>
	<div id="blog"><Blog /></div>
	<div id="contact"><Contact /></div>
</div>
