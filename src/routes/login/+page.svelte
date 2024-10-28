<script>
	import { user } from '$lib/stores.svelte';

	let text = '';
	console.log;

	function clickHandler() {
		if (text) {
			user.username = text;
			user.logged = true;
			text = '';
		}
	}
	function logOutHandler() {
		user.username = '';
		user.logged = false;
	}
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-50 p-6">
	<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
		<h2 class="mb-6 text-center text-3xl font-semibold text-blue-600">
			{user.logged ? 'You are Logged In' : 'Create Username'}
		</h2>

		<!-- User not logged in -->
		{#if !user.logged}
			<div class="space-y-4">
				<input
					type="text"
					bind:value={text}
					placeholder="Enter your username"
					class="w-full rounded-md border border-gray-300 p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					type="submit"
					on:click={clickHandler}
					class="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700"
				>
					Log In
				</button>
			</div>
		{:else}
			<button
				type="submit"
				on:click={logOutHandler}
				class="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700"
			>
				Log Out
			</button>
		{/if}
	</div>
</div>
