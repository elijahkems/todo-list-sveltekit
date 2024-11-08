export let user = $state({ username: '', logged: false, userUrl: 0 });
export let listStore = $state({
	'list 1': [
		{ id: 1, text: 'Learn SvelteKit', completed: false },
		{ id: 2, text: 'Build a To-Do App', completed: false }
	],
	'list 2': [
		{ id: 1, text: 'add lists', completed: false },
		{ id: 2, text: 'upload to server', completed: false }
	]
});

// function createListStore(intial = []) {
// 	let list = $state([
// 		{ id: 1, text: 'Learn SvelteKit', completed: true },
// 		{ id: 2, text: 'Build a To-Do App', completed: false }
// 	]);

// 	return {
// 		addTodo(text: string) {
// 			let newItem = {
// 				id: list.length + 1,
// 				text: text,
// 				completed: false
// 			};
// 			list.push(newItem);
// 		},
// 		getList() {
// 			return list;
// 		},
// 		deleteTodo(id: number) {
// 			list = list.filter((todo) => todo.id != id);
// 		},
// 		toggleComplete(key) {
// 			list[key].completed = !list[key].completed;
// 		},
// 		list
// 	};
// }
