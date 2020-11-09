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

routes.get('/api/courses', CoursesController.getCourses)
routes.get('/api/courses/:courseId', CoursesController.getCourseById)
routes.get('/api/offers', OffersController.getOffers)
routes.get('/api/offers/:offerId', OffersController.getOfferById)

routes.post('/api/courses', CoursesController.create)
routes.post('/api/universities', UniversitiesController.create)


module.exports = routes