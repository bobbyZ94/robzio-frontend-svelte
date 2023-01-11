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


use:viewport
					on:enterViewport={() => {
						showNavbar.set(false);
						showAboutText.set(false);
					}}
					on:exitViewport={() => {
						showNavbar.set(true);
						showAboutText.set(true);
					}}


          <!--PAGINATOR-->
          <div class="mt-10 flex gap-5 z-20">
            <button
              class="border border-gray-50 rounded-full h-8 w-8 flex items-center justify-center "
              on:click={() => {
                if (currentPage === 1) currentPage = maxNumberOfPages;
                else currentPage--;
                flyDirection = 'left';
              }}><ChevronLeft size={24} /></button
            >
            {#each { length: maxNumberOfPages } as _, i}
              <button
                on:click={() => (currentPage = i + 1)}
                class={`${currentPage === i + 1 ? 'scale-110 font-semibold' : ''}`}>{i + 1}</button
              >
            {/each}
            <button
              class="border border-gray-50 rounded-full h-8 w-8 flex items-center justify-center"
              on:click={() => {
                if (currentPage === maxNumberOfPages) currentPage = 1;
                else currentPage++;
                flyDirection = 'right';
              }}><ChevronRight size={24} /></button
            >
          </div>
        </div>
