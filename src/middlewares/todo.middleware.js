const mongoose = require('mongoose');

const validId = (req, res, next) => {
	const idParam = req.params.id;
	if (!mongoose.Types.ObjectId.isValid(idParam)) {
		return res.status(400).send({ message: 'Invalid Id!' });
	}
	next();
};

const validObjectBody = (req, res, next) => {
	const todo = req.body;
	if (!todo || !todo.todo || !todo.status) {
		return res.status(400).send({ message: 'Please fill all form fields!' });
	}
	next();
};

module.exports = {
	validId,
	validObjectBody,
};
