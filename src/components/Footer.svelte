<script>
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	const year = new Date().getFullYear();
</script>

<footer class="flex flex-col items-center gap-5 my-10">
	<a href={`mailto:info@robzio.com`}>
		<span><Email class="inline mr-2" />info@robzio.com</span>
	</a>
	<div>
		<a
			href="/impressum"
			class="mr-5 hover:border-gray-50 border-b border-transparent transition-all duration-300 ease-in-out"
			>Impressum</a
		>
		<a
			href="/legal"
			class="hover:border-gray-50 border-b border-transparent transition-all duration-300 ease-in-out"
			>Legal</a
		>
	</div>
	<div>Robzio © {year}</div>
</footer>
