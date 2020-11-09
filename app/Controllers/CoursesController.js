var memoryCache = require('memory-cache');
const Course = require('../Models/Course');

let CoursesManager = require('../Services/CoursesManager.js')

module.exports = {
  async index (request, response) {
    var offers = await Offer.findAll()

    return response.json({
      offers: offers
    })
  },

  async getCourses (request, response) {
    var { filterBy, filterValue } = request.query

    let courses = await CoursesManager.getFilteredCourses(filterBy, filterValue)
    
    if (typeof courses == undefined) {
      return response.json({
        message: "Theres no courses found with the filter applied."
      }, 404)
    }

    let cacheKey = '__API_QUERO__' + request.originalUrl || request.url
    memoryCache.put(cacheKey, courses, 5200);

    return response.json({
      courses
    }, 200)
  },

  async getCourseById (request, response) {
    let course = await Course.findOne({ where: { id: request.params.courseId }})
    
    if (typeof course == undefined) {
      return response.json({
        message: `Course #${request.params.courseId} was not found`
      }, 404)
    }

    let cacheKey = '__API_QUERO__' + request.originalUrl || request.url
    memoryCache.put(cacheKey, course, 5200);

    return response.json({
      course
    }, 200)
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