const Sequelize = require("sequelize");
const db = require("../../config/database")
const sequelizeInstance = new Sequelize(db);

const Course = sequelizeInstance.define('courses', {
  univeristyId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  kind: Sequelize.STRING,
  level: Sequelize.STRING,
  shift: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

Course.associate = function(models) {
  Course.belongsTo(models.Offer)
  Campus.belongsTo(models.University, { foreignKey: 'universityId' })
};

module.exports = Course