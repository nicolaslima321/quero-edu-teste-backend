let Offer = require('./../Models/Offer.js')

module.exports = {
  async index (request, response) {
    var offers = await Offer.findAll()
    response.json({
      offers: offers
    })
  }
}