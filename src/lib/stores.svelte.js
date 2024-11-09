export let user = $state({ username: '', logged: false, userUrl: 0 });
export let listStore = $state({
	'36fb5d95-ad2': [
		{ id: 1, text: 'Learn SvelteKit', completed: false },
		{ id: 2, text: 'Build a To-Do App', completed: false }
	],
	'8401b83b-054': [
		{ id: 1, text: 'add lists', completed: false },
		{ id: 2, text: 'upload to server', completed: false }
	]
});
