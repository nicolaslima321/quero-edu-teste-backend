'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('campus', [
      // The next 5 Campus is to UNIP (universityId = 1)
      {
        "universityId": 1,
        "name": "Jardim das Indústrias",
        "city": "São José dos Campos"
      },
      {
        "universityId": 1,
        "name": "Água Branca",
        "city": "São Paulo"
      },
      {
        "universityId": 1,
        "name": "Jaguaré",
        "city": "São Paulo"
      },
      {
        "universityId": 1,
        "name": "Parque São Jorge",
        "city": "São Paulo"
      },
      {
        "universityId": 1,
        "name": "Paraíso",
        "city": "São Paulo"
      },
      // The next two Campus is to Ahembi Morumbi (universityId = 2)
      {
        "universityId": 2,
        "name": "Vila Olímpia",
        "city": "São Paulo"
      },
      {
        "universityId": 2,
        "name": "Bela Vista",
        "city": "São Paulo"
      },
      // The next four Campus is to UNICSUL (universityId = 3)
      {
        universityId: 3,
        name: "Paulista",
        city: "São Paulo"
      },
      {
        universityId: 3,
        name: "Anália Franco",
        city: "São Paulo"
      },
      {
        universityId: 3,
        name: "Liberdade",
        city: "São Paulo"
      },
      {
        universityId: 3,
        name: "São Miguel Paulista",
        city: "São Paulo"
      },
      // The next one Campus is to Ahanguera (universityId = 4)
      {
        universityId: 4,
        name: "Rio Comprido",
        city: "São José dos Campos"
      },
      // The next three Campus is to Estácio (universityId = 5)
      {
        universityId: 5,
        name: "Patriolino Ribeiro",
        city: "Fortaleza"
      },
      {
        universityId: 5,
        name: "Centro",
        city: "Jacareí"
      },
      {
        universityId: 5,
        name: "Centro",
        city: "São José dos Campos"
      },
      // The next two Campus is to UNOPAR (universityId = 6)
      {
        universityId: 6,
        name: "São José dos Campos",
        city: "São José dos Campos"
      },
      {
        universityId: 6,
        name: "Motorama",
        city: "São José dos Campos"
      },
      // The next one Campus is to ETEP (universityId = 7)
      {
        universityId: 7,
        name: "Jardim Esplanada",
        city: "São José dos Campos"
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('campus', null, {});
  }
};
