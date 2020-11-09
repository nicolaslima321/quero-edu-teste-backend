const { Router } = require('express');

const AuthController = require("./Controllers/AuthController");
const OffersController = require("./Controllers/OffersController");
const CoursesController = require("./Controllers/CoursesController");
const UniversitiesController = require("./Controllers/UniversitiesController");

const routes = Router()

routes.get('/', function(request, response){
  response.json({ message: "Hello world"})
})

routes.post('/api/login', AuthController.login)

routes.post('/api/courses', CoursesController.create)

routes.post('/api/universities', UniversitiesController.create)

routes.get('/api/offers', OffersController.getOffers)

module.exports = routes