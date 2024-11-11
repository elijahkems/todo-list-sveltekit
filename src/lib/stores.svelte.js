export let user = $state({ username: '', logged: false, userUrl: 0 });
export let isSideOpen = $state({
	state: false
});
export let listStore = $state({
	'36fb5d95-ad2': {
		category: '',
		title: 'Groceries',
		todos: [
			{ id: 1, text: 'Buy milk', completed: false },
			{ id: 2, text: 'Buy bread', completed: true }
		],
		createdAt: new Date().toLocaleString(),
		updatedAt: new Date().toLocaleString()
	},
	'8401b83b-054': {
		category: '',
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
export const sampleTodos = $state([
	'Buy groceries',
	'Walk the dog',
	'Prepare dinner',
	'Finish project report',
	'Call mom',
	'Pay utility bills',
	'Read a new book',
	'Organize the garage',
	'Respond to emails',
	'Clean the kitchen',
	'Exercise for 30 minutes',
	'Plan weekend trip',
	'Schedule dentist appointment',
	'Update resume',
	'Mow the lawn',
	'Backup computer files',
	'Write blog post',
	'Water the plants',
	'Take out the trash',
	'Learn a new recipe'
]);
