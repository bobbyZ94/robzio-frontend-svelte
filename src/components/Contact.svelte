<script>
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	export let contact;
</script>

<div class="w-full h-screen flex justify-center items-center">
	<div class="max-w-4xl rounded-xl bg-zinc-800 p-10 px-10 mx-5 opacity-95 z-20">
		<div class="text-xl mb-5">{contact.text}</div>
		<div class="text-center text-2xl">
			<a href={`mailto:${contact.email}`}>
				<Email class="inline mr-2" size={24} />
				{contact.email}
			</a>
		</div>
	</div>
</div>
