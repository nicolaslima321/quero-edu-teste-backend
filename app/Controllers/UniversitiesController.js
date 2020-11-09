const University = require('../Models/University');

module.exports = {
  index (request, response) {
    response.json({
      message: "Im at campus contoller =]"
    })
  },

  create (request, response) {
    const { name, score, logo_url } = request.body

    University.create({ 
      name: name, 
      score: score, 
      logo_url: logo_url
    }).then((newUniversity) => {
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