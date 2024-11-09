export let user = $state({ username: '', logged: false, userUrl: 0 });

export let listStore = $state({
	'36fb5d95-ad2': {
		title: 'Groceries',
		todos: [
			{ id: 1, text: 'Buy milk', completed: false },
			{ id: 2, text: 'Buy bread', completed: true }
		],
		createdAt: new Date().toLocaleString(),
		updatedAt: new Date().toLocaleString()
	},
	'8401b83b-054': {
		title: 'test app',
		todos: [
			{ id: 1, text: 'add lists', completed: false },
			{ id: 2, text: 'upload to server', completed: false },
			{ id: 3, text: 'check for bugs', completed: false },
			{ id: 4, text: 'add database', completed: true }
		],
		createdAt: new Date().toLocaleString(),
		updatedAt: new Date().toLocaleString()
	}
});
