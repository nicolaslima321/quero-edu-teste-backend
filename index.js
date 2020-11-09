require("dotenv-safe").config();

const JWTAuth = require("./app/Middlewares/JWTAuth.js")
const CacheEndpoints = require("./app/Middlewares/CacheEndpoints.js")

const express = require('express');

const routes = require('./app/routes.js');

const app = express();

const middlewares = [JWTAuth.verifyJWTAuthorization, CacheEndpoints.handle]

// Setting up middlewares
app.use('/api/courses', middlewares);
app.use('/api/offers', middlewares);

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(process.env.PORT || 8080);

// Export of app will only to use as module through tests
module.exports = app;