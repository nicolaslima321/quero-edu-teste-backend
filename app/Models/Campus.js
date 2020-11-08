const Sequelize = require("sequelize");
const db = require("../../config/database")
const sequelizeInstance = new Sequelize(db);

const Campus = sequelizeInstance.define('campus', {
  universityId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

Campus.associate = function(models) {
  Campus.belongsTo(models.Offer)
  Campus.belongsTo(models.University, { foreignKey: 'universityId' })
};

module.exports = Campus