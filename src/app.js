const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler'); // Adicionado

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler); // Adicionado como último middleware

module.exports = app;
