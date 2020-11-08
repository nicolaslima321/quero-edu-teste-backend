let Offer = require('./../Models/Offer.js')

module.exports = {
  async index (request, response) {
    var offers = await Offer.findAll()
    return response.json({
      offers: offers
    })
  }
}