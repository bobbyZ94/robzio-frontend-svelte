<script>
	import '../app.css';
	const year = new Date().getFullYear();
</script>

<div
	class="h-screen flex flex-col items-center justify-between bg-zinc-800 text-gray-100 font-montserrat"
>
	<nav class="bg-red-500">
		<a href="/">About</a>
		<!-- <a href="/projects">Projects</a>
		<a href="/blog">Blog</a>
		<a href="/contact">Contact</a> -->
	</nav>
	<slot />
	<footer>
		<a href="/impressum">Impressum</a>
		<a href="/legal">Legal</a>
		<div>Robzio © {year}</div>
	</footer>
</div>
