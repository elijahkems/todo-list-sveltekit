<script>
	// props
	let { singleList, key } = $props();
	let tasks = $state([]);
</script>

<div class="bg-secondaryBackground w-full max-w-lg rounded-lg p-8 shadow-lg">
	<h2 class="text-accent mb-6 text-center text-3xl font-semibold">{key}</h2>

	{#if singleList.length === 0}
		<p class="text-center text-gray-500">No tasks available. Add a task to get started!</p>
	{:else}
		<ul class="space-y-4">
			{#each singleList as task}
				<li class="bg-lightShade flex items-center justify-between rounded-lg p-4 shadow">
					<div class="flex items-center">
						<input type="checkbox" bind:checked={task.completed} class="  mr-2 h-5 w-5 rounded" />
						<span class={task.completed ? ' text-secondaryText line-through' : 'text-primaryText'}
							>{task.text}</span
						>
					</div>
					<button
						onclick={() => deleteTask(key, task.id)}
						class=" hover:text-accent text-secondaryText ml-3 border border-transparent"
					>
						remove
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
