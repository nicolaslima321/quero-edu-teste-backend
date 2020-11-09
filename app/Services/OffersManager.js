let Offer = require('./../Models/Offer.js')
let University = require('./../Models/University.js')
let Course = require('./../Models/Course.js')
let Campus = require('./../Models/Campus.js')

module.exports = {
  async getFilteredOffer (option, optionValue) {
    let offers
    let course
    let university
    let campus

    console.log(option, optionValue)

    switch (option) {
      case 'university_name':
        university = await University.findOne({ where: { 'name': optionValue } })
        offers = await Offer.findAll({ where: { universityId: university.id }})
        break

      case 'course_name':
        course = await Course.findOne({ where: { 'name': optionValue } })
        offers = await Offer.findAll({ where: { courseId: course.id }})
        break
      
      case 'kind':
        course = await Course.findOne({ where: { 'kind': optionValue } })
        offers = await Offer.findAll({ where: { courseId: course.id }})
        break
      
      case 'level':
        course = await Course.findOne({ where: { 'level': optionValue } })
        offers = await Offer.findAll({ where: { courseId: course.id }})
        break

      case 'shift':
        course = await Course.findOne({ where: { 'shift': optionValue } })
        offers = await Offer.findAll({ where: { courseId: course.id }})
        break

      case 'city':
        campus = await Campus.findOne({ where: { 'city': optionValue } })
        offers = await Offer.findAll({ where: { campusId: campus.id }})
        break

      default:
        return await Offer.findAll()
    }

    return offers
  }
}