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
  courseId: Sequelize.INTEGER,
  universityId: Sequelize.INTEGER,
  campusId: Sequelize.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

Offer.associate = function(models) {
  Offer.hasMany(models.Course, { foreignKey: 'courseId' })
  Offer.hasMany(models.University, { foreignKey: 'universityId' })
  Offer.hasMany(models.Campus, { foreignKey: 'courseId' })
};
  
module.exports = Offer;
