<script>
	import { fade, scale } from 'svelte/transition';
	import { listStore } from '$lib/stores.svelte';
	import { is } from 'drizzle-orm';
	import { onMount } from 'svelte';

	// props
	let { isModalOpen = $bindable(false), title, showPopUp } = $props();
	// state
	let tasks = $state(listStore[title]);
	let newTask = $state('');
	let overlay = $state();

	// functions

	function addTask() {
		if (newTask.trim()) {
			tasks.push({
				id: tasks.length + 1,
				text: newTask,
				completed: false
			});
			newTask = '';
		}
	}
	function deleteTask(id) {
		tasks = tasks.filter((task) => task.id !== id);
	}
	function closeModal(event) {
		isModalOpen = false;
		showPopUp();
	}
	$effect(() => {});
</script>

{#if isModalOpen}
	<!-- overlay div -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		bind:this={overlay}
		role="button"
		tabindex="0"
		onclickcapture={(e) => {
			if (e.target == overlay) closeModal();
		}}
		transition:fade={{ duration: 200 }}
		class=" fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70"
	>
		<!-- modal -->
		<div
			class="relative w-full max-w-lg rounded-lg bg-background p-8 shadow-lg"
			transition:scale={{ duration: 200 }}
		>
			<h2>this is a pop</h2>
		</div>
	</div>
{/if}
