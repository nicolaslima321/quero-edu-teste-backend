let Offer = require('./../Models/Offer.js')
let University = require('./../Models/University.js')
let Course = require('./../Models/Course.js')
let Campus = require('./../Models/Campus.js')

module.exports = {
  async getFilteredOffer (option, optionValue) {
    let offers = {}
    let courses
    let university
    let campus

    console.log(option, optionValue)

    /**
     * Only an observation, i had noticed that a field 'enabled' at offers json input, then i assumed that
     * offers that arent enabled (this is, enable is equal to 0), dont will be shown
     */

    switch (option) {
      case 'university_name':
        university = await University.findOne({ where: { 'name': optionValue } })
        offers = await Offer.findAll({ where: { universityId: university.id, enabled: 1 }})
        break

      case 'course_name':
        course = await Course.findOne({ where: { 'name': optionValue } })
        offers = await Offer.findAll({ where: { courseId: course.id, enabled: 1 }})
        break
      
      case 'kind':
        offers = []
        let courses = await Course.findAll({ where: { 'kind': optionValue } })
        await courses.forEach(async (course) => {
          offersFound = await Offer.findOne({ where: { courseId: course.id, enabled: 1 }})
          offers.push(offersFound)
        })
        break
      
      case 'level':
        offers = []
        let courses = await Course.findAll({ where: { 'level': optionValue } })
        await courses.forEach(async (course) => {
          offersFound = await Offer.findOne({ where: { courseId: course.id, enabled: 1 }})
          offers.push(offersFound)
        })
        break

      case 'shift':
        offers = []
        let courses = await Course.findAll({ where: { 'shift': optionValue } })
        await courses.forEach(async (course) => {
          offersFound = await Offer.findOne({ where: { courseId: course.id, enabled: 1 }})
          offers.push(offersFound)
        })
        break

      case 'city':
        offers = []
        let campus = await Campus.findAll({ where: { 'city': optionValue } })
        await campus.forEach(async (campus) => {
          offersFound = await Offer.findOne({ where: { campusId: campus.id, enabled: 1 }})
          offers.push(offersFound)
        })
        break

      default:
        return await Offer.findAll({ where: { enabled: 1 }})
    }

    return offers
  }
}