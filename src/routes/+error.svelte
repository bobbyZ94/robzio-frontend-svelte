<script>
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center flex-grow">
	<div>
		{$page.error.message}. This page does not exists! 404!
		<div>
			<a
				href="/"
				class="underline"
			>
				Go back to the frontpage ...</a
			>
		</div>
	</div>
</div>
