const route = require('express').Router();
const todosController = require('../controllers/todos.controller');
const { validId, validObjectBody } = require('../middlewares/todo.middleware');

route.get('/alltodos', todosController.findTodosController);
route.get('/todo/:id', validId, todosController.findTodoByIdController);
route.post('/create', validObjectBody, todosController.createTodoController);
route.put(
	'/update/:id',
	validId,
	validObjectBody,
	todosController.updateTodoController,
);
route.delete('/delete/:id', validId, todosController.deleteTodoController);

module.exports = route;
