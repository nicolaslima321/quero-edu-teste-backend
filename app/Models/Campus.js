const Sequelize = require("sequelize");
const db = require("../../config/database")
const sequelizeInstance = new Sequelize(db);

let Campus = sequelizeInstance.define('campuses', {
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

Campus.associate = function(models) {
  Campus.belongsTo(models.Course)
};

module.exports = Campus