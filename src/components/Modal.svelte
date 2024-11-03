<script>
	import { fade, scale } from 'svelte/transition';
	import { list } from '$lib/stores.svelte';
	import { is } from 'drizzle-orm';

	// props
	let { isModalOpen } = $props();
	// state
	let title = $state('new list_' + (Object.entries(list).length + 1));
	let tasks = $state([]);
	let newTask = $state('');

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
	function closeModal() {
		if (tasks.length != 0) list[title] = tasks;
		isModalOpen = false;
		tasks = [];
	}
	$effect(() => {
		if (list) title = 'new list_' + (Object.entries(list).length + 1);
	});
</script>

{#if isModalOpen}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70"
	>
		<!-- modal -->
		<div
			class="bg-background relative w-full max-w-lg rounded-lg p-8 shadow-lg"
			transition:scale={{ duration: 200 }}
		>
			<button
				class=" text-primaryText absolute right-3 top-2 border-transparent text-3xl font-bold"
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
					class=" bg-lightShade text-primaryText focus:ring-accent rounded-md border-transparent pl-3 italic focus:outline-none focus:ring-2"
				/>
			</div>
			<!-- list div -->
			<div class="mb-4 flex">
				<input
					type="text"
					bind:value={newTask}
					placeholder="Add a new task"
					class="bg-lightShade border-lightShade focus:ring-accent text-primaryText flex-grow rounded-md border p-3 text-base focus:outline-none focus:ring-2"
				/>
				<button
					onclick={addTask}
					class="bg-accent border-accent ml-2 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2"
				>
					Add
				</button>
			</div>

			<ul class="space-y-4">
				<!-- all lists -->
				{#each tasks as task}
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
