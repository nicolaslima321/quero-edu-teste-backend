const { Router } = require('express');

const AuthController = require("./Controllers/AuthController");
const OffersController = require("./Controllers/OffersController");
const CoursesController = require("./Controllers/CoursesController");

const routes = Router()

routes.get('/', function(request, response){
  response.json({ message: "Hello world"})
})

routes.post('/api/login', AuthController.login)

// routes.get('/api/courses', AuthController.login)

routes.get('/api/offers', OffersController.index)

module.exports = routes