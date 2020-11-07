'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      fullName: 'Nicolas Pedroso Lima',
      email: 'nicolas.pedroso2145@gmail.com',
      password: bcrypt.hashSync('loremipsum123', 5),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
