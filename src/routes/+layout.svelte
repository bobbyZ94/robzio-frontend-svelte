<script>
	import '../app.css';
	import { page } from '$app/stores';
	import SideNavbar from '../components/SideNavbar.svelte';
	import NavArrow from '../components/NavArrow.svelte';
	import Footer from '../components/Footer.svelte';
	import { showNavbar, currentScrollY } from '../lib/stores';

	export let data;

	let showNavbarValue;
	showNavbar.subscribe((value) => {
		showNavbarValue = value;
	});

	$: scrollY = 0;
	$: currentScrollY.set(scrollY);
</script>

<!--SEO-->
<svelte:head>
	<title>Robzio - Frontpage</title>
	<meta
		name="description"
		content={data.settings.description}
	/>
	<meta
		name="author"
		content={data.settings.author}
	/>
	<meta
		name="keywords"
		content={data.settings.keywords}
	/>
	<meta
		name="language"
		content="en"
	/>

	<!-- Canonical link url of current page to show google that website is original; Google compares to url without www domain, so replace is needed -->
	<link
		rel="canonical"
		href={$page.url.href.replace('www.', '')}
	/>
</svelte:head>

<!--
  Rotates Nav Arrow on mobile and changes nav method according to scrollY pos.
  Binding with window method scrollY had to be done inside top level component like +layout, instead of inside NavArrow.
  There was a weird scrolling issue that may be connected to the scroll-behavior: smooth.
-->
<svelte:window bind:scrollY />

<div
	class="flex flex-col items-center w-full min-h-screen bg-zinc-900 text-gray-50 font-montserrat"
>
	{#if showNavbarValue}
		<div class="hidden lg:block fixed top-[30%] right-20 z-30">
			<SideNavbar />
		</div>
		<div class="fixed top-0 right-0 z-30 lg:hidden">
			<NavArrow />
		</div>
	{/if}
	<div class="flex flex-grow w-full h-full">
		<slot />
	</div>
	<Footer />
</div>
