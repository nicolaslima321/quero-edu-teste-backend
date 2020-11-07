const express = require('express');
const routes = require('./app/routes.js');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(3007);