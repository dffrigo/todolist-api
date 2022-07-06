const todosService = require('../services/todos.service');

const findTodosController = async (req, res) => {
	const allTodos = await todosService.findTodosService();
	if (allTodos.length == 0) {
		return res.status(404).send({ message: 'Any To Do found!' });
	}
	res.send(allTodos);
};

const findTodoByIdController = async (req, res) => {
	const idParam = req.params.id;
	const chosenTodo = await todosService.findTodoByIdService(idParam);
	if (!chosenTodo) {
		return res.status(404).send({ message: 'To Do not found!' });
	}
	res.send(chosenTodo);
};

const createTodoController = async (req, res) => {
	const todo = req.body;
	const newTodo = await todosService.createTodoService(todo);
	res.status(201).send(newTodo);
};

const updateTodoController = async (req, res) => {
	const idParam = req.params.id;
	const editTodo = req.body;
	const updatedTodo = await todosService.updateTodoService(idParam, editTodo);
	res.send(updatedTodo);
};

const deleteTodoController = async (req, res) => {
	const idParam = req.params.id;
	await todosService.deleteTodoService(idParam);
	res.send({ message: 'To Do deleted!' });
};

module.exports = {
	findTodosController,
	findTodoByIdController,
	createTodoController,
	updateTodoController,
	deleteTodoController,
};
