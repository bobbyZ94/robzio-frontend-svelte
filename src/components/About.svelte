<script>
	import serialize from '../utils/serialize';
	export let about;
	const aboutText = { children: about.text };
</script>

<div class="w-full h-screen flex justify-center items-center overflow-hidden">
	<div
		class="overflow-hidden break-words prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg md:prose-h2:text-3xl md:prose-h3:text-2xl md:prose-h1:text-4xl max-w-4xl rounded-xl bg-zinc-800 
    p-5 md:p-10 px-5 md:px-10 mx-5 prose-sm md:prose-base prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline prose-a:text-blue-600 
    z-20 opacity-95 leading-5 md:leading-6"
	>
		{@html serialize(aboutText)}
	</div>
</div>
