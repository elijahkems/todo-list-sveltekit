<script lang="ts">
	import { LibSQLTransaction } from 'drizzle-orm/libsql';
	import Modal from '../../components/Modal.svelte';
	import { listStore } from '$lib/stores.svelte';
	import Card from '../../components/Card.svelte';
	import PopupModal from '../../components/PopupModal.svelte';
	let isModalOpen = $state(false);
	let isPopUpOpen = $state(false);
	// let tasks = $state([
	// 	{ id: 1, text: 'Learn SvelteKit', completed: false },
	// 	{ id: 2, text: 'Build a To-Do App', completed: false }
	// ]);

	// let tasks = $state([]);

	// function deleteTask(key, id) {
	// 	let task = listStore[key];
	// 	tasks = tasks.filter((task) => task.id !== id);
	// 	listStore[key] = task;
	// 	console.log(task);
	// }
	function createList() {
		isModalOpen = !isModalOpen;
		if (!isModalOpen) isModalOpen = true;
	}
	function showPopUp() {
		isPopUpOpen = !isPopUpOpen;
		if (!isPopUpOpen) isPopUpOpen = true;
	}
</script>

<div class="flex min-h-screen flex-col items-center bg-background p-6">
	<!-- add new list -->
	<div class="mb-4">
		<button
			onclick={createList}
			class="ml-2 rounded-md border-accent bg-accent px-4 py-3 text-primaryText hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent active:bg-accent"
		>
			New List
		</button>
	</div>
	<!-- newlist modal -->
	<Modal {isModalOpen} />
	<!-- popup modal -->
	<PopupModal isModalOpen={isPopUpOpen} {showPopUp} />

	<!-- list the todos -->
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-2">
		<!-- {#each Object.entries(list) as [key, singleList]}
			<Card {singleList} {key} />
		{/each} -->
		{#each Object.entries(listStore) as [title, todo], key}
			<Card {todo} {title} {key} />
		{/each}
	</div>
</div>
