<script>
	import bars from '$lib/assets/bars.svelte';
	import { isSideOpen } from '$lib/stores.svelte';
	let { userLogged = false } = $props();
</script>

<!-- navigation -->
<nav class=" bg-background shadow-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<button
					class="mr-4 w-6 border-none hover:opacity-80"
					onclick={() => (isSideOpen.state = !isSideOpen.state)}
				>
					<svelte:component this={bars} />
				</button>
				<h1 class="text-2xl font-bold text-accent">
					<a href="/" class=" transition duration-200 hover:opacity-80">To-Do List</a>
				</h1>
			</div>
			<div class=" space-x-4 text-lg md:flex">
				<a href="/todo" class=" text-primaryText transition duration-200 hover:text-accent">Todo</a>
				<a href="/login" class="text-primaryText transition duration-200 hover:text-accent"
					>{userLogged ? 'User' : 'Login'}</a
				>
			</div>
		</div>
	</div>
</nav>
