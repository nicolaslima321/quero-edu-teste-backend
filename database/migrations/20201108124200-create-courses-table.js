module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      kind: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      shift: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      universityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      campusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('courses');
  }
};
