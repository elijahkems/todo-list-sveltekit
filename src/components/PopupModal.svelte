<script>
	import { fade, scale } from 'svelte/transition';
	// props
	let { isPopUpOpen = $bindable(false), onCancel, onConfirm, title } = $props();
	// state
	// functions
</script>

{#if isPopUpOpen}
	<!-- overlay div -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		transition:fade={{ duration: 200 }}
		class=" fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70"
	>
		<!-- modal -->
		<div
			class="relative max-w-lg rounded-lg bg-background p-8 px-20 shadow-lg"
			transition:scale={{ duration: 200 }}
		>
			<p class=" p-3 text-xl text-primaryText">Would you like to delete {title}</p>
			<div class=" flex justify-around text-primaryText">
				<button
					onclick={onConfirm}
					class=" rounded-md border-gray-600 bg-secondaryBackground px-6 py-3 hover:opacity-80"
				>
					okay
				</button>
				<button
					onclick={onCancel}
					class="rounded-md border-none bg-accent px-6 py-3 hover:opacity-80"
				>
					cancel
				</button>
			</div>
		</div>
	</div>
{/if}
