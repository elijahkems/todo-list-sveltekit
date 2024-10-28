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

<main class="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
	<header class="mb-10 text-center">
		<h1 class="mb-2 text-4xl font-bold text-blue-600">Welcome to Your To-Do List App!</h1>
		<p class="text-lg text-gray-700">Stay organized and boost your productivity.</p>
	</header>

	<section class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
		<h2 class="mb-4 text-2xl font-semibold text-gray-800">Features You'll Love</h2>
		<ul class="list-inside list-disc space-y-2 text-gray-600">
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
				class="inline-block rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-200 hover:bg-blue-600"
			>
				Log In
			</a>
		{/if}
		<a
			href="/todo"
			class="inline-block rounded-lg border border-blue-500 px-6 py-3 text-blue-500 transition duration-200 hover:bg-blue-500 hover:text-white"
		>
			Get Started
		</a>
	</section>

	<footer class="mt-10 text-gray-500">
		<p>&copy; 2024 To-Do List App. All rights reserved.</p>
	</footer>
</main>
<!-- homepage -->
