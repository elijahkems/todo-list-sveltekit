<script>
	let { userLogged = false } = $props();
</script>

<!-- navigation -->
<nav class=" bg-background shadow-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<h1 class="text-accent text-2xl font-bold">
					<a href="/" class=" transition duration-200 hover:text-blue-500">To-Do List</a>
				</h1>
			</div>
			<div class=" space-x-4 text-lg md:flex">
				<a href="/todo" class=" text-primaryText hover:text-accent transition duration-200">Todo</a>
				<a href="/login" class="text-primaryText hover:text-accent transition duration-200"
					>{userLogged ? 'User' : 'Login'}</a
				>
			</div>
		</div>
	</div>
</nav>
