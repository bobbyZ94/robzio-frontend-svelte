<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { showNavbar } from '../../../lib/stores';
	showNavbar.set(true);
</script>

<div class="flex-grow flex items-center justify-center flex-col">
	<div>{data.blogData.data[0].attributes.Title}</div>
</div>
