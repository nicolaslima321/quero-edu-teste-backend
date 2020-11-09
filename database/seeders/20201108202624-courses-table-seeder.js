'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('courses', [{
      // The next 5 Courses is to UNIP (universityId = 1)
        universityId: 1,
        campusId: 1,
        name: "Engenharia Mecânica",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 1,
        campusId: 2,
        name: "Jornalismo",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 1,
        campusId: 3,
        name: "Biomedicina",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 1,
        campusId: 4,
        name: "Arquitetura e Urbanismo",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Manhã"
      },
      {
        universityId: 1,
        campusId: 5,
        name: "Propaganda e Marketing",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      // The next three Courses is to Ahembi Morumbi (universityId = 2)
      {
        universityId: 2,
        campusId: 6,
        name: "Jornalismo",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 2,
        campusId: 7,
        name: "Marketing",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 2,
        campusId: 6,
        name: "Biomedicina",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Manhã"
      },
      // The next seven Courses is to UNICSUL (universityId = 3)
      {
        universityId: 3,
        campusId: 8,
        name: "Engenharia Mecânica",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Manhã"
      },
      {
        universityId: 3,
        campusId: 8,
        name: "Ciência da Computação",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 3,
        campusId: 9,
        name: "Gastronomia",
        kind: "Presencial",
        level: "Tecnólogo",
        shift: "Noite"
      },
      {
        universityId: 3,
        campusId: 10,
        name: "Jogos Digitais",
        kind: "EaD",
        level: "Tecnólogo",
        shift: "Virtual"
      },
      {
        universityId: 3,
        campusId: 11,
        name: "Ciência da Computação",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      {
        universityId: 3,
        campusId: 10,
        name: "Sistemas de Informação",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      {
        universityId: 3,
        campusId: 8,
        name: "Ciências Econômicas",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      // The next two Courses is to Ahanguera (universityId = 4)
      {
        universityId: 4,
        campusId: 12,
        name: "Gestão de Recursos Humanos",
        kind: "Presencial",
        level: "Tecnólogo",
        shift: "Noite"
      },
      {
        universityId: 4,
        campusId: 12,
        name: "Arquitetura e Urbanismo",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      // The next four Courses is to Estácio (universityId = 5)
      {
        universityId: 5,
        campusId: 13,
        name: "Farmácia",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Manhã"
      },
      {
        universityId: 5,
        campusId: 14,
        name: "Sistemas de Informação",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      {
        universityId: 5,
        campusId: 15,
        name: "Gestão de Recursos Humanos",
        kind: "EaD",
        level: "Tecnólogo",
        shift: "Virtual"
      },
      {
        universityId: 5,
        campusId: 15,
        name: "Administração",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      // The next two Courses is to UNOPAR (universityId = 6)
      {
        universityId: 6,
        campusId: 16,
        name: "História",
        kind: "EaD",
        level: "Licenciatura",
        shift: "Virtual"
      },
      {
        universityId: 6,
        campusId: 17,
        name: "Gestão de Recursos Humanos",
        kind: "EaD",
        level: "Tecnólogo",
        shift: "Virtual"
      },
      // The next one Courses is to ETEP (universityId = 7)
      {
        universityId: 7,
        campusId: 18,
        name: "Administração",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 7,
        campusId: 18,
        name: "Educação Física",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
