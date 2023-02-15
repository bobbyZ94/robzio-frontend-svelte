<script>
	import { scale } from 'svelte/transition';
</script>

<div class="flex flex-col items-center gap-10 text-xs">
	<a href="/#about">
		<div
			transition:scale|local={{ delay: 100, duration: 1000, start: 0, opacity: 0 }}
			class="bg-zinc-900 hover:scale-105 ease-in-out duration-300 w-20 h-20 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
		>
			About
		</div>
	</a>
	<a href="/#projects">
		<div
			transition:scale|local={{ delay: 100, duration: 1000, start: 0, opacity: 0 }}
			class="bg-zinc-900 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
		>
			Projects
		</div>
	</a>

	<a href="/#blog">
		<div
			transition:scale|local={{ delay: 100, duration: 1000, start: 0, opacity: 0 }}
			class="bg-zinc-900 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
		>
			Blog
		</div>
	</a>
	<a href="/#contact">
		<div
			transition:scale|local={{ delay: 100, duration: 1000, start: 0, opacity: 0 }}
			class="bg-zinc-900 hover:scale-105 ease-in-out duration-300 w-16 h-16 border-[1px] border-gray-50 rounded-full flex items-center justify-center"
		>
			Contact
		</div>
	</a>
</div>
