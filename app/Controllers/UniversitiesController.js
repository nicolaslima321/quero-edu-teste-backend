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
    const { name, score, logo_url } = request.body

    University.create({ 
      name: name, 
      score: score, 
      logo_url: logo_url
    }).then((newUniversity) => {
      // The get() function allows you to recover only the DataValues of the object
      console.log(newUniversity.get())
      response.json({
        message: "University Successfully Created",
        university: newUniversity.get()
      })
    }).catch((err) => {
      console.log("Error while university creation : ", err)
      response.json({
        message: "An error ocurred during university creation"
      })
    })
  }
}