<script>
	import { listStore } from '$lib/stores.svelte';
	import CardModal from './CardModal.svelte';
	import Modal from './Modal.svelte';
	import PopupModal from './PopupModal.svelte';

	// props
	let { todo, title } = $props();
	//state
	let isModalOpen = $state(false);
	let isPopUpOpen = $state(false);

	// functions
	function deleteCard() {
		isPopUpOpen = !isPopUpOpen;
	}
	function editCard() {
		isModalOpen = !isModalOpen;
		if (!isModalOpen) isModalOpen = true;
	}

	function cancelHandler() {
		isPopUpOpen = !isPopUpOpen;
	}
	function confirmHandler() {
		if (listStore[title]) delete listStore[title];
		isPopUpOpen = !isPopUpOpen;
		console.log('deleting ..', title);
	}
</script>

<!-- popup modal  -->
<PopupModal bind:isPopUpOpen onCancel={cancelHandler} onConfirm={confirmHandler} {title} />

<div class="w-full max-w-lg rounded-lg bg-secondaryBackground p-8 shadow-lg">
	<!--card title -->
	<div class="flex justify-between">
		<h2 class="mb-6 text-xl font-semibold text-accent">{title}</h2>
		<div>
			<button
				onclick={editCard}
				class=" rounded-md border-none px-3 text-secondaryText hover:text-accent">edit</button
			>
			<button
				onclick={deleteCard}
				class=" rounded-md border-none px-3 text-secondaryText hover:text-red-500">delete</button
			>
		</div>
	</div>
	<!-- card modal -->
	<CardModal {isModalOpen} {title} />
	<!-- list todos -->
	{#if todo.length == 0}
		<p class="text-center text-gray-500">No tasks available. Add a task to get started!</p>
	{:else}
		<ul class="space-y-4">
			{#each todo as task}
				<li class="flex items-center justify-between rounded-lg bg-lightShade p-4 shadow">
					<div class="flex items-center">
						<input type="checkbox" bind:checked={task.completed} class="  mr-2 h-5 w-5 rounded" />
						<span class={task.completed ? ' text-secondaryText line-through' : 'text-primaryText'}
							>{task.text}</span
						>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
