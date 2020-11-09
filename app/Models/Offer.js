const Sequelize = require("sequelize");
const db = require("../../config/database")
const sequelizeInstance = new Sequelize(db);

let Offer = sequelizeInstance.define('offers', {
  full_price: Sequelize.FLOAT,
  price_with_discount: Sequelize.FLOAT,
  discount_percentage: Sequelize.FLOAT,
  start_date: Sequelize.STRING,
  enrollment_semester: Sequelize.STRING,
  enabled: Sequelize.FLOAT,
  courseId: Sequelize.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

Offer.associate = function(models) {
  Offer.hasOne(models.Course, { foreignKey: 'courseId' })
};
  
module.exports = Offer;
