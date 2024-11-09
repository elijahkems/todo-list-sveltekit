<script lang="ts">
	import { LibSQLTransaction } from 'drizzle-orm/libsql';
	import Modal from '../../components/Modal.svelte';
	import { listStore } from '$lib/stores.svelte';
	import Card from '../../components/Card.svelte';
	// state
	let isModalOpen = $state(false);
	let numberOfTodos = $derived(Object.entries(listStore).length);
	// functions
	function createList() {
		isModalOpen = !isModalOpen;
	}
	$effect(() => $inspect(listStore));
</script>

<div class="flex min-h-screen flex-col items-center bg-background p-6">
	<!-- add new list -->
	<div class="mb-4 ml-16 mr-auto">
		<button
			onclick={createList}
			class=" rounded-md border-accent bg-accent px-4 py-3 text-primaryText hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent active:bg-accent"
		>
			New List
		</button>
		<p class=" text-lg text-primaryText">{numberOfTodos} {numberOfTodos == 1 ? 'todo' : 'todos'}</p>
	</div>
	<!-- newlist modal -->
	<Modal bind:isModalOpen />
	<!-- list the todos -->
	<div class="grid max-w-4xl grid-cols-1 gap-8 px-6 md:mx-10 md:grid-cols-2 lg:grid-cols-2">
		{#each Object.entries(listStore).reverse() as [uniqueId, list], key}
			<Card {list} {key} {uniqueId} />
		{/each}
	</div>
</div>
