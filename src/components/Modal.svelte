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
	let { isModalOpen = $bindable(false) } = $props();
	// state
	let title = $state(getNewTitle());
	let todos = $state([]);
	let newTask = $state(getRandomTodo(sampleTodos));
	let overlay = $state();
	let uniqueId = $state(getUniqueId());
	let createdAt = $state(new Date().toLocaleString());
	let updatedAt = $state('');
	let categories = $state(Object.values(listStore).map((list) => list.title));

	// functions
	function getRandomTodo(todos) {
		const randomIndex = Math.floor(Math.random() * todos.length);
		return todos[randomIndex];
	}
	function getNewTitle(str = 'new_todo_') {
		let allTitles = Object.values(listStore).map((list) => list.title);
		let count = 1;
		let title = str + count;
		while (allTitles.includes(title)) {
			title = str + ++count;
		}
		return title;
	}

	function getUniqueId() {
		let id = crypto.randomUUID().slice(0, 12);
		while (listStore[id]) {
			id = crypto.randomUUID().slice(0, 12);
		}
		return id;
	}

	function addTask() {
		if (newTask.trim()) {
			todos.push({
				id: todos.length + 1,
				text: newTask,
				completed: false
			});
			newTask = getRandomTodo(sampleTodos);
		}
		updatedAt = new Date().toLocaleString();
	}
	function deleteTask(id) {
		todos = todos.filter((task) => task.id !== id);
	}
	function closeModal() {
		if (todos.length != 0) {
			listStore[uniqueId] = {
				title,
				todos,
				createdAt,
				updatedAt
			};
		}
		isModalOpen = false;
		todos = [];
	}
	$effect(() => {
		title = getNewTitle();
		uniqueId = getUniqueId();
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
					bind:value={title}
					placeholder="title"
					class=" rounded-md border-transparent bg-transparent pl-3 italic text-secondaryText focus:outline-none focus:ring-2 focus:ring-secondaryText"
				/>
			</div>
			<!-- list div -->
			<div class="just mb-4 flex">
				<!-- input container -->
				<div
					class="flex flex-grow rounded-md border-2 border-transparent bg-lightShade focus-within:border-accent"
				>
					<input
						type="text"
						bind:value={newTask}
						placeholder="Add a new task"
						class="flex-grow rounded-md border border-lightShade bg-transparent p-3 text-base text-primaryText focus:outline-none"
					/>
					<button
						onclick={() => (newTask = '')}
						class="mx-4 border-transparent bg-transparent pb-2 text-2xl text-background"
						>&lt
					</button>
				</div>
				<button
					onclick={addTask}
					class="ml-2 rounded-md border-none bg-accent px-4 py-3 text-white hover:opacity-80"
				>
					Add
				</button>
			</div>

			<ul class="space-y-4">
				<!-- all lists -->
				{#each todos as task}
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
