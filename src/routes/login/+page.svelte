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
	// colors: {
	// 			background: '#343541', // Main background
	// 			secondaryBackground: '#40414F', // Container or card background
	// 			primaryText: '#ECECF1', // Primary text
	// 			secondaryText: '#A0A1A7', // Secondary text
	// 			accent: '#10A37F', // Accent color for buttons
	// 			error: '#F56565' // Error color
	// 		}
</script>

<div class="bg-background flex min-h-screen items-center justify-center p-6">
	<div class="bg-secondaryBackground w-full max-w-md rounded-lg p-8 shadow-lg">
		<h2 class="text-accent mb-6 text-center text-3xl font-semibold">
			{user.logged ? 'You are Logged In' : 'Create Username'}
		</h2>

		<!-- User not logged in -->
		{#if !user.logged}
			<div class="space-y-4">
				<input
					type="text"
					bind:value={text}
					placeholder="Enter your username"
					class="focus:ring-accent w-full rounded-md border border-gray-300 p-3 text-base focus:outline-none focus:ring-2"
				/>
				<button
					type="submit"
					on:click={clickHandler}
					class="hover:bg-accent bg-accent border-accent w-full rounded-md border px-4 py-2 text-white focus:outline-none"
				>
					Log In
				</button>
			</div>
		{:else}
			<button
				type="submit"
				on:click={logOutHandler}
				class="bg-accent hover:bg-accent focus:ring-accent border-accent active:bg-accent w-full rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2"
			>
				Log Out
			</button>
		{/if}
	</div>
</div>
