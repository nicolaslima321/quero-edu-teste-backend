const Course = require('../Models/Campus');

module.exports = {
  index (request, response) {
    response.json({
      message: "Im at courses contoller =]"
    })
  },

  create (request, response) {
    const { universityId, name, city } = request.body

    Campus.create({
      universityId: universityId, 
      name: name, 
      city: city
    }).then((newCampus) => {
      console.log(newCampus.get())
      response.json({
        message: "Campus Successfully Created",
        campus: newCampus.get()
      })
    }).catch((err) => {
      console.log("Error while campus creation : ", err)
      response.json({
        message: "An error ocurred during campus creation"
      })
    })
  }
}