<script>
	import { fly } from 'svelte/transition';
	import { showNavbar } from '../../lib/stores';
	/** @type {import('./$types').PageData} */
	export let data;
	const siteInformation = data.siteInformation.data.attributes;
	showNavbar.set(true);
</script>

<div class="flex-grow items-center justify-center flex h-screen">
	<div>
		<div
			in:fly|local={{ duration: 2000, x: -2000, y: 0, delay: 500 }}
			class="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10"
		>
			<div class="opacity-40 text-[15vw]">IMPRESSUM</div>
		</div>
	</div>

	<div class="z-20 opacity-95">
		<div class="flex flex-col items-center justify-center bg-zinc-800 rounded-xl p-10 gap-5">
			<div class="text-xl font-semibold">Impressum</div>
			<div>{siteInformation.Owner}</div>
			<div>{siteInformation.Street}</div>
			<div>{siteInformation.City}</div>
			<div>{siteInformation.Email}</div>
		</div>
	</div>
</div>
