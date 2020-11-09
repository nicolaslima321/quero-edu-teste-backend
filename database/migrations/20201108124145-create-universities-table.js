module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('universities', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      score: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      logo_url: {
        allowNull: false,
        type: Sequelize.STRING,
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

  down: async (queryInterface) => {
    await queryInterface.dropTable('universities');
  }
};
