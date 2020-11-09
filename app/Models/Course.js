const Sequelize = require("sequelize");
const db = require("../../config/database")
const sequelizeInstance = new Sequelize(db);

let Course = sequelizeInstance.define('courses', {
  universityId: Sequelize.INTEGER,
  campusId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  kind: Sequelize.STRING,
  level: Sequelize.STRING,
  shift: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

Course.associate = function(models) {
  Course.belongsTo(models.Offer)
  Course.hasOne(models.University)
  Course.hasOne(models.Campus)
};

module.exports = Course