<script>
	import '../app.css';
	import SideNavbar from '../components/SideNavbar.svelte';
	import MobileBackButton from '../components/MobileBackButton.svelte';
	import Footer from '../components/Footer.svelte';
	import { showNavbar } from '../lib/stores';
	let showNavbarValue;
	showNavbar.subscribe((value) => {
		showNavbarValue = value;
	});
</script>

<div
	class="flex flex-col items-center w-full min-h-screen bg-zinc-900 text-gray-50 font-montserrat"
>
	{#if showNavbarValue}
		<div class="hidden lg:block fixed top-[30%] right-20 z-30">
			<SideNavbar />
		</div>
		<div class="fixed top-0 right-0 z-30 lg:hidden">
			<MobileBackButton />
		</div>
	{/if}
	<div class="flex flex-grow w-full h-full">
		<slot />
	</div>
	<Footer />
</div>
