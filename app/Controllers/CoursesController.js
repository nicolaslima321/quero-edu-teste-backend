const models = require('../Models');

const Offer = models.Offer;
const Course = models.Course;
const University = models.University;
const Campus = models.Campus;

module.exports = {
  index (request, response) {
    response.json({
      message: "Im at courses contoller =]"
    })
  },

  create (request, response) {
    const { univeristyId, name, kind, level, shift } = request.body

    Course.create({
      univeristyId: univeristyId, 
      name: name, 
      kind: kind, 
      level: level, 
      shift: shift
    })

    response.json({
      message: "Im at courses contoller =]"
    })
  }
}