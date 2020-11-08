const Course = require('../Models/Course');

module.exports = {
  index (request, response) {
    response.json({
      message: "Im at courses contoller =]"
    })
  },

  create (request, response) {
    const { universityId, name, kind, level, shift } = request.body

    Course.create({
      universityId: universityId, 
      name: name, 
      kind: kind, 
      level: level, 
      shift: shift
    }).then((newCourse) => {
      console.log(newCourse.get())
      response.json({
        message: "Course Successfully Created",
        course: newCourse.get()
      })
    }).catch((err) => {
      console.log("Error while course creation : ", err)
      response.json({
        message: "An error ocurred during course creation"
      })
    })
  }
}