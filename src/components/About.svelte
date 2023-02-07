<script>
	import serialize from '../utils/serialize';
	export let about;
	const aboutText = { children: about.text };
</script>

<div class="w-full h-screen flex justify-center items-center">
	<div
		class="max-w-4xl rounded-xl bg-zinc-800 p-10 px-10 mx-5 prose-base prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline prose-a:text-blue-600 z-20 opacity-95"
	>
		{@html serialize(aboutText)}
	</div>
</div>
