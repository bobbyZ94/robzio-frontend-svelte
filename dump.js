<div class="bg-red-200">
			<div class="">
				<div transition:fade={{ delay: 500, duration: 1000 }} class="text-3xl">Robert</div>
				<div transition:fade={{ delay: 500, duration: 1000 }} class="text-3xl">Zioltkowski</div>
			</div>
		</div>



		<div class="w-full h-full bg-red-200">
			<Motion let:motion>
				<svg width="100%" height="100%" viewBox="0 0 200 200" use:motion>
					<circle cx="100" cy="100" r="60" />
				</svg>
			</Motion>
		</div>
