const Sequelize = require("sequelize");
const db = require("../../config/database")
const sequelizeInstance = new Sequelize(db);

let University = sequelizeInstance.define('universities', {
  name: Sequelize.STRING,
  score: Sequelize.FLOAT,
  logo_url: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

University.associate = function(models) {
  University.belongsTo(models.Course)
};

module.exports = University