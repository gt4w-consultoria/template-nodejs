const { HTTP_PORT } = require('./app/configs');
const express = require('express');
const app = express();
const mainRoutes = require('./app/routes');

app.use('/v1', mainRoutes);

const server = app.listen(HTTP_PORT, () => {
  console.log(`App listening on port ${HTTP_PORT}!`);
});

module.exports = server;