<script>
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores.svelte';

	let id = $state(0);
	let baseUrl = '/users/';
	function clickHandler() {
		if (id) {
			user.userUrl = id;
			goto(baseUrl + id);
		}
	}
</script>

<main class="bg-background flex min-h-screen flex-col items-center justify-center p-6">
	<header class="mb-10 text-center">
		<h1 class=" text-accent mb-2 text-4xl font-bold">Welcome to Your To-Do List App!</h1>
		<p class="text-secondaryText text-lg">Stay organized and boost your productivity.</p>
	</header>

	<section class="bg-secondaryBackground w-full max-w-md rounded-lg p-6 shadow-lg">
		<h2 class="text-primaryText mb-4 text-2xl font-semibold">Features You'll Love</h2>
		<ul class=" text-secondaryText list-inside list-disc space-y-2">
			<li>🗂️ Organize tasks by categories.</li>
			<li>🔔 Set reminders to never miss a deadline.</li>
			<li>✅ Mark tasks as complete for a sense of achievement.</li>
			<li>📊 Track your progress and stay motivated.</li>
		</ul>
	</section>

	<section class="mt-8 flex space-x-4">
		{#if !user.logged}
			<a
				href="/login"
				class="bg-accent inline-block rounded-lg px-6 py-3 text-white transition duration-200"
			>
				Log In
			</a>
		{/if}
		<a
			href="/todo"
			class="text-accent hover:bg-accent border-accent inline-block rounded-lg border px-6 py-3 transition duration-200 hover:text-white"
		>
			Get Started
		</a>
	</section>

	<footer class="mt-10 text-gray-500">
		<p>&copy; 2024 To-Do List App. All rights reserved.</p>
	</footer>
</main>
<!-- homepage -->
