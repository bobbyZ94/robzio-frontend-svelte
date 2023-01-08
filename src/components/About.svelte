<script>
	export let aboutPageData;
</script>

<div class="w-full h-screen flex justify-center items-center">
	<div
		class="max-w-3xl bg-zinc-800 p-10 px-5 prose-base lg:prose-xl prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline prose-a:text-blue-600"
	>
		{@html aboutPageData.data.attributes.text}
	</div>
</div>
