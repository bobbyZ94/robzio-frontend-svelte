<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { showNavbar } from '../../lib/stores';
	showNavbar.set(true);
</script>

<!-- <div class="flex flex-col items-center justify-center flex-grow gap-5">
	{#each data.blogsData.data as blogEntry}
		<a href={`/blog/${blogEntry.attributes.Slug}`}><div>{blogEntry.attributes.Title}</div></a>
	{/each}
</div> -->
<div>Test Blogs Page</div>
