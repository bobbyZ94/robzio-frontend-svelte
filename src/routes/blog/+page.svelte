<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { showNavbar } from '../../lib/stores';
	showNavbar.set(true);
</script>

<div class="flex-grow flex flex-col justify-center items-center gap-5">
	{#each data.blogsData.data as blogEntry}
		<a href={`/blog/${blogEntry.attributes.Slug}`}><div>{blogEntry.attributes.Title}</div></a>
	{/each}
</div>
