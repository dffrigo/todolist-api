const express = require('express');
const cors = require('cors');
const route = require('./src/routes/todos.route');
const connectToDatabase = require('./src/database/database');

const port = 3000;

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use('/todos', route);

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
