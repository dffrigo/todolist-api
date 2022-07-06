const mongoose = require('mongoose');

function connectToDatabase() {
	mongoose
		.connect('mongodb://localhost:27017/todos-db', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log('MongoDB CONNECTED');
		})
		.catch((err) => {
			return console.log(`Database connection ERROR: ${err}`);
		});
}

module.exports = connectToDatabase;
