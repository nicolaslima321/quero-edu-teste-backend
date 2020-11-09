let Offer = require('./../Models/Offer.js')
let University = require('./../Models/University.js')
let Course = require('./../Models/Course.js')
let Campus = require('./../Models/Campus.js')

module.exports = {
  async getFilteredOffers (option, optionValue) {
    let offers = {}
    let courses
    let university
    let campus

    /**
     * Only an observation, i had noticed that has a field 'enabled' at 'offers' json input, then i assumed that
     * offers that arent enabled (this is, 'enable' is equal to 0), dont will be shown
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
        courses = await Course.findAll({ where: { 'kind': optionValue } })
        offers = courses.map((course) => {
          return this.getOffersAcordingCourses(course)
        })
        break
      
      case 'level':
        courses = await Course.findAll({ where: { 'level': optionValue } })
        offers = courses.map((course) => {
          this.getOffersAcordingCourses(course)
        })
        break

      case 'shift':
        courses = await Course.findAll({ where: { 'shift': optionValue } })
        offers = courses.map((course) => {
          this.getOffersAcordingCourses(course)
        })
        break

      case 'city':
        campus = await Campus.findAll({ where: { 'city': optionValue } })
        offers = campus.map((campus) => {
          this.getOffersAcordingCampus(campus)
        })
        break

      case 'cheapest_price':
        offers = await Offer.findAll({
          order: [['full_price', 'ASC']]
        })
        break

      case 'highest_price':
        offers = await Offer.findAll({
          order: [['full_price', 'DESC']]
        })
        break

      case 'cheapest_price_discount':
        offers = await Offer.findAll({
          order: [['price_with_discount', 'ASC']]
        })
        break

      case 'highest_price_discount':
        offers = await Offer.findAll({
          order: [['price_with_discount', 'DESC']]
        })
        break


      default:
        return await Offer.findAll({ where: { enabled: 1 }})
      }

    return offers
  },

  getOffersAcordingCourses (course) {
    return Offer.findOne({ where: { courseId: course.id, enabled: 1 }})
      .then((offer) => {
        return offer
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getOffersAcordingCampus (campus) {
    return Offer.findOne({ where: { campusId: campus.id, enabled: 1 }})
      .then((offer) => {
        return offer
      })
      .catch((err) => {
        console.log(err)
      })
  }
}