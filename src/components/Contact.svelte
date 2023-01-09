<script>
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	export let contactPageData;
</script>

<div class="w-full h-screen flex justify-center items-center">
	<div class="max-w-4xl rounded-xl bg-zinc-800 p-10 px-10 mx-5 opacity-95">
		<div class="text-xl mb-5">{contactPageData.data.attributes.Text}</div>
		<div class="text-center text-2xl">
			<a href={`mailto:${contactPageData.data.attributes.Email}`}>
				<Email class="inline mr-2" size={24} />
				{contactPageData.data.attributes.Email}
			</a>
		</div>
	</div>
</div>
