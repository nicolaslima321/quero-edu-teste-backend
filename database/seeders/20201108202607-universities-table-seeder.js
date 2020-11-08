'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('universities', [
      // UNIP represents the universityId 1
      {
        name: "UNIP",
        score: 4.5,
        logo_url: "https://www.tryimg.com/u/2019/04/16/unip.png"
      },
      // Anhembi Morumbi represents the universityId 2
      {
        name: "Anhembi Morumbi",
        score: 4.2,
        logo_url: "https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png"
      },
      // UNICSUL represents the universityId 3
      {
        name: "UNICSUL",
        score: 3.9,
        logo_url: "https://www.tryimg.com/u/2019/04/16/unicsul.png"
      },
      // Anhanguera represents the universityId 4
      {
        name: "Anhanguera",
        score: 3.5,
        logo_url: "https://www.tryimg.com/u/2019/04/16/anhanguera.png"
      },
      // Estácio represents the universityId 5
      {
        name: "Estácio",
        score: 4.1,
        logo_url: "https://www.tryimg.com/u/2019/04/16/estacio.png"
      },
      // Unopar represents the universityId 6
      {
        name: "Unopar",
        score: 4.0,
        logo_url: "https://www.tryimg.com/u/2019/04/16/unopar.png"
      },
      // ETEP represents the universityId 7
      {
        name: "ETEP",
        score: 3.2,
        logo_url: "https://www.tryimg.com/u/2019/04/16/etep.png"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('universities', null, {});
  }
};
