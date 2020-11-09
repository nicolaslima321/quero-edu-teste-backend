let University = require('./../Models/University.js')
let Course = require('./../Models/Course.js')

module.exports = {
  async getFilteredCourses (option, optionValue) {
    let courses
    let university

    switch (option) {
      case 'university_name':
        university = await University.findOne({ where: { name: optionValue } })
        courses = await Course.findAll({ where: { universityId: university.id }})
        break

      case 'course_name':
        courses = await Course.findAll({ where: { name: optionValue }})
        break
      
      case 'kind':
        courses = await Course.findAll({ where: { kind: optionValue } })
        break
      
      case 'level':
        courses = await Course.findAll({ where: { level: optionValue } })
        break

      case 'shift':
        courses = await Course.findAll({ where: { shift: optionValue } })
        break

      default:
        return await Course.findAll()
      }

    return courses
  },
}