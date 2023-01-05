<script>
	import '../app.css';
	const year = new Date().getFullYear();
</script>

<div
	class="antialiased scroll-smooth h-full flex flex-col items-center bg-zinc-900 text-gray-50 font-montserrat"
>
	<!-- <nav class="bg-red-500">
		<a href="/">About</a>
		<a href="/projects">Projects</a>
		<a href="/blog">Blog</a>
		<a href="/contact">Contact</a>
	</nav> -->
	<slot />
	<footer>
		<a href="/impressum">Impressum</a>
		<a href="/legal">Legal</a>
		<div>Robzio © {year}</div>
	</footer>
</div>
