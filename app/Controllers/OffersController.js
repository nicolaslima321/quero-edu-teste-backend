let OffersManager = require('../Services/OffersManager.js')

module.exports = {
  async index (request, response) {
    var offers = await Offer.findAll()

    return response.json({
      offers: offers
    })
  },

  async getOffers (request, response) {
    var { filterBy, filterValue } = request.query

    let offers = await OffersManager.getFilteredOffers(filterBy, filterValue)
    
    if (typeof offers == undefined) {
      return response.json({
        message: "Theres no offers found with the filter applied."
      }, 404)
    }

    return response.json({
      offers
    }, 200)
  }
}