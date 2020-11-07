const { Router } = require('express');
const AuthController = require("./Controllers/AuthController");
const routes = Router()

routes.get('/', function(request, response){
  response.json({ message: "Hello world"})
})

routes.post('/api/login', AuthController.login)

module.exports = routes