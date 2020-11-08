'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE
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
        type: Sequelize.INTEGER,
        references: {
          model: 'Course',
          key: 'id'
        }
      },
      universityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'University',
          key: 'id'
        }
      },
      campusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Campus',
          key: 'id'
        }
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
