<script>
	import { fade, fly, scale } from 'svelte/transition';
	import bars from '$lib/assets/bars.svelte';
	import { isSideOpen } from '$lib/stores.svelte';

	let categoryList = $state(['Work', 'Personal', 'Shopping', 'Health']);
	let overlay = $state();
</script>

<!-- Sidebar -->
{#if isSideOpen.state}
	<!-- overlay -->
	<div
		bind:this={overlay}
		role="button"
		tabindex="0"
		onclickcapture={(e) => {
			if (e.target == overlay) isSideOpen.state = !isSideOpen.state;
		}}
		transition:fade={{ duration: 200 }}
		class="{isSideOpen
			? 'block'
			: 'hidden'} fixed inset-0 z-50 bg-black bg-opacity-70 transition-all"
	>
		<!-- modal -->
		<div
			in:fly={{ x: -200 }}
			out:fly={{ x: -200 }}
			class="absolute left-0 top-0 h-full w-64 bg-background px-4 text-white"
		>
			<div class="flex h-16">
				<button
					class=" ml-auto w-6 border-none text-4xl text-lightShade hover:opacity-80"
					onclick={() => (isSideOpen.state = !isSideOpen.state)}>&lt;</button
				>
			</div>
			<div class="flex flex-col space-y-4">
				<h3 class="px-4 text-2xl">categories</h3>
				<!-- list -->
				{#each categoryList as category}
					<li
						class="flex items-center justify-between rounded-lg bg-lightShade p-4 text-primaryText shadow"
					>
						<div class="flex items-center">
							{category}
						</div>
					</li>
				{/each}
			</div>
		</div>
	</div>
{/if}
