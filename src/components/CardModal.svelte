<script>
	import { fade, scale } from 'svelte/transition';
	import { listStore, sampleTodos } from '$lib/stores.svelte';
	import { is } from 'drizzle-orm';
	import { onMount } from 'svelte';
	//obj structure
	// '36fb5d95-ad2': {
	// 	title: 'Groceries',
	// 	todos: [
	// 		{ id: 1, text: 'Buy milk', completed: false },
	// 		{ id: 2, text: 'Buy bread', completed: true }
	// 	],
	// 	createdAt: new Date('2024-01-01'),
	// 	updatedAt: new Date('2024-02-01')
	// },

	// props
	let { isModalOpen = $bindable(false), uniqueId } = $props();
	// state
	let { title, todos, createdAt, updatedAt } = listStore[uniqueId];
	let newTitle = $state(title);
	let newTodos = $state(todos);
	let newTask = $state(getRandomTodo(sampleTodos));
	let overlay = $state();

	// functions
	function getRandomTodo(todos) {
		const randomIndex = Math.floor(Math.random() * todos.length);
		return todos[randomIndex];
	}

	function addTask() {
		if (newTask.trim()) {
			newTodos.push({
				id: newTodos.length + 1,
				text: newTask,
				completed: false
			});
			newTask = getRandomTodo(sampleTodos);
		}
		updatedAt = new Date().toLocaleString();
	}
	function deleteTask(id) {
		newTodos = newTodos.filter((task) => task.id !== id);
	}
	function closeModal() {
		listStore[uniqueId].title = newTitle;
		listStore[uniqueId].todos = newTodos;
		isModalOpen = false;
	}
	$effect(() => {
		$inspect(title, ' was clicked');
	});
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
			<button
				class=" absolute right-3 top-2 border-transparent text-3xl font-bold text-primaryText"
				onclick={closeModal}
			>
				&times;
			</button>
			<!-- title div -->
			<div class="mb-4 flex justify-between">
				<input
					type="text"
					bind:value={newTitle}
					placeholder="title"
					class=" rounded-md border-transparent bg-transparent pl-3 italic text-secondaryText focus:outline-none focus:ring-2 focus:ring-secondaryText"
				/>
			</div>
			<!-- list div -->
			<div class="mb-4 flex">
				<input
					type="text"
					bind:value={newTask}
					placeholder="Add a new task"
					class="flex-grow rounded-md border border-lightShade bg-lightShade p-3 text-base text-primaryText focus:outline-none focus:ring-2 focus:ring-accent"
				/>
				<button
					onclick={addTask}
					class="ml-2 rounded-md border-accent bg-accent px-4 py-3 text-white focus:outline-none focus:ring-2"
				>
					Add
				</button>
			</div>

			<ul class="space-y-4">
				<!-- all lists -->
				{#each newTodos as task}
					<li
						class="flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow hover:bg-gray-200"
					>
						<div class="flex items-center">
							<input
								type="checkbox"
								bind:checked={task.completed}
								class="mr-2 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
							/>
							<span class={task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}
								>{task.text}</span
							>
						</div>
						<button
							onclick={() => deleteTask(task.id)}
							class=" border border-transparent text-gray-500 hover:text-blue-600"
						>
							remove
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
