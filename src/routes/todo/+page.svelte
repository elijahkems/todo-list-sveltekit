<script>
	import { LibSQLTransaction } from 'drizzle-orm/libsql';
	import Modal from '../../components/Modal.svelte';
	import { list } from '$lib/stores.svelte';
	import Card from '../../components/Card.svelte';
	let isModalOpen = $state(false);
	// let tasks = $state([
	// 	{ id: 1, text: 'Learn SvelteKit', completed: false },
	// 	{ id: 2, text: 'Build a To-Do App', completed: false }
	// ]);

	let tasks = $state([]);

	function deleteTask(key, id) {
		let task = list[key];
		tasks = tasks.filter((task) => task.id !== id);
		list[key] = task;
		console.log(task);
	}
	function createList() {
		isModalOpen = !isModalOpen;
		if (!isModalOpen) isModalOpen = true;
	}
</script>

<div class="bg-background flex min-h-screen flex-col items-center p-6">
	<!-- add new list -->
	<div class="mb-4">
		<button
			onclick={createList}
			class="bg-accent hover:bg-accent border-accent focus:ring-accent active:bg-accent ml-2 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2"
		>
			New List
		</button>
	</div>
	<Modal {isModalOpen} />

	<!-- list the todos -->
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-2">
		{#each Object.entries(list) as [key, singleList]}
			<Card {singleList} {key} />
		{/each}
	</div>
</div>
