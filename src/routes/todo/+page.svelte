<script lang="ts">
	import { LibSQLTransaction } from 'drizzle-orm/libsql';
	import Modal from '../../components/Modal.svelte';
	// import { list } from '$lib/stores.svelte';
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

	function createListStore(intial = []) {
		let list = $state([
			{ id: 1, text: 'Learn SvelteKit', completed: true },
			{ id: 2, text: 'Build a To-Do App', completed: false }
		]);

		return {
			addTodo(text: string) {
				let newItem = {
					id: list.length + 1,
					text: text,
					completed: false
				};
				list.push(newItem);
			},
			getList() {
				return list;
			},
			deleteTodo(id: number) {
				list = list.filter((todo) => todo.id != id);
			},
			toggleComplete(key) {
				list[key].completed = !list[key].completed;
			},
			list
		};
	}

	console.clear();
	const list = createListStore();
	console.log(list.getList());
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
	<Modal {isModalOpen} />

	<!-- list the todos -->
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-2">
		<!-- {#each Object.entries(list) as [key, singleList]}
			<Card {singleList} {key} />
		{/each} -->
		{#each list.getList() as singleList, key}
			<div class="rounded-md border border-black p-3 text-primaryText">
				<h2 class="text-accent">{key}</h2>
				<button class="p-2" onclick={() => (singleList.completed = !singleList.completed)}
					>done</button
				>
				{#if singleList.completed}
					<p class=" text-lightShade line-through">{singleList.text}</p>
				{:else}
					<p>{singleList.text}</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
