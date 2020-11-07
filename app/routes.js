const { Router } = require('express')

const routes = Router()

routes.get('/', function(request, response){
    response.json({ message: "Hello world"})
})

module.exports = routes