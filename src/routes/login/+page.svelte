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

<div class="flex min-h-screen items-center justify-center bg-background p-6">
	<div class="w-full max-w-md rounded-lg bg-secondaryBackground p-8 shadow-lg">
		<h2 class="mb-6 text-center text-3xl font-semibold text-accent">
			{user.logged ? 'You are Logged In' : 'Create Username'}
		</h2>

		<!-- User not logged in -->
		{#if !user.logged}
			<div class="space-y-4">
				<input
					type="text"
					bind:value={text}
					placeholder="Enter your username"
					class=" w-full rounded-md border-none bg-lightShade p-3 text-base text-primaryText focus:outline-none focus:ring-2 focus:ring-accent"
				/>
				<button
					type="submit"
					on:click={clickHandler}
					class="w-full rounded-md border border-accent bg-accent px-4 py-2 text-white hover:bg-accent focus:outline-none"
				>
					Log In
				</button>
			</div>
		{:else}
			<button
				type="submit"
				on:click={logOutHandler}
				class="w-full rounded-md border-accent bg-accent px-4 py-2 text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent active:bg-accent"
			>
				Log Out
			</button>
		{/if}
	</div>
</div>
