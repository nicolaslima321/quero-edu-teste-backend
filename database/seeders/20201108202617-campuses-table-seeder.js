'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('campuses', [
      // The next 5 Campus is to UNIP (universityId = 1)
      {
        name: "Jardim das Indústrias",
        city: "São José dos Campos"
      },
      {
        name: "Água Branca",
        city: "São Paulo"
      },
      {
        name: "Jaguaré",
        city: "São Paulo"
      },
      {
        name: "Parque São Jorge",
        city: "São Paulo"
      },
      {
        name: "Paraíso",
        city: "São Paulo"
      },
      // The next two Campus is to Ahembi Morumbi (universityId = 2)
      {
        name: "Vila Olímpia",
        city: "São Paulo"
      },
      {
        name: "Bela Vista",
        city: "São Paulo"
      },
      // The next four Campus is to UNICSUL (universityId = 3)
      {
        name: "Paulista",
        city: "São Paulo"
      },
      {
        name: "Anália Franco",
        city: "São Paulo"
      },
      {
        name: "Liberdade",
        city: "São Paulo"
      },
      {
        name: "São Miguel Paulista",
        city: "São Paulo"
      },
      // The next one Campus is to Ahanguera (universityId = 4)
      {
        name: "Rio Comprido",
        city: "São José dos Campos"
      },
      // The next three Campus is to Estácio (universityId = 5)
      {
        name: "Patriolino Ribeiro",
        city: "Fortaleza"
      },
      {
        name: "Centro",
        city: "Jacareí"
      },
      {
        name: "Centro",
        city: "São José dos Campos"
      },
      // The next two Campus is to UNOPAR (universityId = 6)
      {
        name: "São José dos Campos",
        city: "São José dos Campos"
      },
      {
        name: "Motorama",
        city: "São José dos Campos"
      },
      // The next one Campus is to ETEP (universityId = 7)
      {
        name: "Jardim Esplanada",
        city: "São José dos Campos"
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('campuses', null, {});
  }
};
