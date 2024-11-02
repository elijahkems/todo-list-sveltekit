<script>
	// props
	let { singleList, key } = $props();
	let tasks = $state([]);
</script>

<div class="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
	<h2 class="mb-6 text-center text-3xl font-semibold text-blue-600">{key}</h2>

	{#if singleList.length === 0}
		<p class="text-center text-gray-500">No tasks available. Add a task to get started!</p>
	{:else}
		<ul class="space-y-4">
			{#each singleList as task}
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
						onclick={() => deleteTask(key, task.id)}
						class=" border border-transparent text-gray-500 hover:text-blue-600"
					>
						remove
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
