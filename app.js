const express = require('express');
const app = express();
const routes = require('./routes/taskRoutes');

app.use(express.json());
app.use('/tasks', routes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => console.log('Servidor en puerto 3000'));
}

module.exports = app;