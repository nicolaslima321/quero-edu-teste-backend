let Offer = require('./../Models/Offer.js')

module.exports = {
  async index (request, response) {
    var offers = await Offer.findAll()

    return response.json({
      offers: offers
    })
  },

  async getOffers (request, response) {
    var { filterBy } = request.query

    var offers = await Offer.findAll()

    

    return response.json({
      offers: offers
    })
  }
}