const Todo = require('../models/Todo');

const findTodosService = async () => {
	const todos = await Todo.find();
	return todos;
};

const findTodoByIdService = async (id) => {
	const todo = await Todo.findById(id);
	return todo;
};

const createTodoService = async (newTodo) => {
	const todoCreated = await Todo.create(newTodo);
	return todoCreated;
};

const updateTodoService = async (id, todoEdited) => {
	const todoUpdated = await Todo.findByIdAndUpdate(id, todoEdited);
	return todoUpdated; //////////////////////////////////
};

const deleteTodoService = async (id) => {
	return await Todo.findByIdAndDelete(id);
};

module.exports = {
	findTodosService,
	findTodoByIdService,
	createTodoService,
	updateTodoService,
	deleteTodoService,
};
