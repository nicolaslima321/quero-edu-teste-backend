const Sequelize = require("sequelize");
const db = require("../../config/database")
const sequelizeInstance = new Sequelize(db);

const Offer = sequelizeInstance.define('offers', {
  full_price: Sequelize.FLOAT,
  price_with_discount: Sequelize.FLOAT,
  discount_percentage: Sequelize.FLOAT,
  start_date: Sequelize.DATE,
  enrollment_semester: Sequelize.STRING,
  enabled: Sequelize.FLOAT,
  course_id: Sequelize.INTEGER,
  university_id: Sequelize.INTEGER,
  campus_id: Sequelize.INTEGER
});
  
module.exports = Offer;
