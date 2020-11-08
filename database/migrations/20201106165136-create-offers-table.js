'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },
      full_price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      price_with_discount: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      discount_percentage: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      start_date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      enrollment_semester: {
        allowNull: false,
        type: Sequelize.STRING
      },
      enabled: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      courseId: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },
      universityId: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },
      campusId: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('offers');
  }
};
