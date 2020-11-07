const Sequelize = require("sequelize");
const db = require("../../config/database")
const sequelizeInstance = new Sequelize(db);

const Offer = sequelizeInstance.define('offers', {
  offer: Sequelize.JSON
});
  
module.exports = Offer;
