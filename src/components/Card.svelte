<script>
	import { listStore } from '$lib/stores.svelte';
	import CardModal from './CardModal.svelte';
	import PopupModal from './PopupModal.svelte';

	// props
	let { list, uniqueId } = $props();
	let { todos, createdAt, updatedAt, title } = $derived(listStore[uniqueId]);
	//state
	let isModalOpen = $state(false);
	let isPopUpOpen = $state(false);

	// functions
	function deleteCard() {
		isPopUpOpen = !isPopUpOpen;
	}
	function editCard() {
		isModalOpen = !isModalOpen;
	}

	function cancelHandler() {
		isPopUpOpen = !isPopUpOpen;
	}
	function confirmHandler() {
		if (listStore[uniqueId]) delete listStore[uniqueId];
		isPopUpOpen = !isPopUpOpen;
	}
</script>

<!-- popup modal  -->
<PopupModal bind:isPopUpOpen onCancel={cancelHandler} onConfirm={confirmHandler} {title} />
{#if isModalOpen}
	<CardModal bind:isModalOpen {uniqueId} />
{/if}

<div class="h-full w-full max-w-lg rounded-lg bg-secondaryBackground p-8 shadow-lg">
	<!--card title -->
	<div class=" flex justify-between">
		<h2 class="  w-fit overflow-hidden whitespace-pre-line text-xl font-semibold text-accent">
			{title} <span> ({todos.length})</span>
		</h2>
		<div>
			<button
				onclick={editCard}
				class=" rounded-md border-none px-3 text-secondaryText hover:text-accent">edit</button
			>
			<button
				onclick={deleteCard}
				class=" rounded-md border-none px-3 text-secondaryText hover:text-red-400">delete</button
			>
		</div>
	</div>
	<!-- card modal -->
	<!-- list todos -->
	{#if todos.length == 0}
		<p class="text-center text-gray-500">No tasks available. Add a task to get started!</p>
	{:else}
		<div class="mt-2 flex h-full flex-col">
			<ul class=" space-y-4">
				{#each todos as task}
					<li class=" flex items-center justify-between rounded-lg bg-lightShade p-4 shadow">
						<div class="flex items-center">
							<input type="checkbox" bind:checked={task.completed} class="  mr-2 h-5 w-5 rounded" />
							<span class={task.completed ? ' text-secondaryText line-through' : 'text-primaryText'}
								>{task.text}</span
							>
						</div>
					</li>
				{/each}
			</ul>
			<p class="mb-10 mt-auto italic text-secondaryText">created on {createdAt}</p>
		</div>
	{/if}
</div>
