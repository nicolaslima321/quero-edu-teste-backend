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
        type: Sequelize.INTEGER,
        allowNull: false,
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
