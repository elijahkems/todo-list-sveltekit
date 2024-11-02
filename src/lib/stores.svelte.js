export let user = $state({ username: '', logged: false, userUrl: 0 });
export let list = $state({
	'list 1': [
		{ id: 1, text: 'Learn SvelteKit', completed: false },
		{ id: 2, text: 'Build a To-Do App', completed: false }
	],
	'list 2': [
		{ id: 1, text: 'add lists', completed: false },
		{ id: 2, text: 'upload to server', completed: false }
	]
});
