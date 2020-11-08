const Sequelize = require("sequelize");
const db = require("../../config/database")
const sequelizeInstance = new Sequelize(db);

const University = sequelizeInstance.define('universities', {
  name: Sequelize.STRING,
  score: Sequelize.FLOAT,
  logo_url: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

University.associate = function(models) {
  University.belongsTo(models.Offer)
  University.hasMany(models.Course)
  University.hasMany(models.Campus)
};

module.exports = University