<script>
	import '../app.css';
	import SideNavbar from '../components/SideNavbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { showNavbar } from '../lib/stores';
	let showNavbarValue;
	showNavbar.subscribe((value) => {
		showNavbarValue = value;
	});
</script>

<div
	class="w-full min-h-screen flex flex-col items-center  bg-zinc-900 text-gray-50 font-montserrat"
>
	{#if showNavbarValue}
		<div class="fixed top-[30%] right-20 z-30">
			<SideNavbar />
		</div>
	{/if}
	<div class="flex flex-grow h-full w-full">
		<slot />
	</div>
	<Footer />
</div>
