<script>
	export let aboutPageData;
</script>

<div class="w-full h-screen flex justify-center items-center">
	<div
		class="opacity-95 z-10 max-w-4xl rounded-xl bg-zinc-800 p-10 px-10 mx-5 prose-base prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline prose-a:text-blue-600"
	>
		{@html aboutPageData.data.attributes.Text}
	</div>
</div>
