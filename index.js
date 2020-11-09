require("dotenv-safe").config();

const JWTAuth = require("./app/Middlewares/JWTAuth.js")

const express = require('express');

const routes = require('./app/routes.js');

const app = express();

// Setting up middlewares
app.use('/api/courses', JWTAuth.verifyJWTAuthorization);
app.use('/api/offers', JWTAuth.verifyJWTAuthorization);

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(process.env.PORT || 8080);