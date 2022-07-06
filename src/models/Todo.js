const mongooose = require('mongoose');

const TodoSchema = new mongooose.Schema({
	todo: { type: String, required: true },
	status: { type: String, required: true },
});

const Todo = mongooose.model('todos', TodoSchema);

module.exports = Todo;
