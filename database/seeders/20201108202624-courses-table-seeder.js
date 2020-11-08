'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('courses', [{
      // The next 5 Courses is to UNIP (universityId = 1)
        universityId: 1,
        name: "Engenharia Mecânica",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 1,
        name: "Jornalismo",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 1,
        name: "Biomedicina",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 1,
        name: "Arquitetura e Urbanismo",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Manhã"
      },
      {
        universityId: 1,
        name: "Propaganda e Marketing",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      // The next three Courses is to Ahembi Morumbi (universityId = 2)
      {
        universityId: 2,
        name: "Jornalismo",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 2,
        name: "Marketing",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 2,
        name: "Biomedicina",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Manhã"
      },
      // The next seven Courses is to UNICSUL (universityId = 3)
      {
        universityId: 3,
        name: "Engenharia Mecânica",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Manhã"
      },
      {
        universityId: 3,
        name: "Ciência da Computação",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      {
        universityId: 3,
        name: "Gastronomia",
        kind: "Presencial",
        level: "Tecnólogo",
        shift: "Noite"
      },
      {
        universityId: 3,
        name: "Jogos Digitais",
        kind: "EaD",
        level: "Tecnólogo",
        shift: "Virtual"
      },
      {
        universityId: 3,
        name: "Ciência da Computação",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      {
        universityId: 3,
        name: "Sistemas de Informação",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      {
        universityId: 3,
        name: "Ciências Econômicas",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      // The next two Courses is to Ahanguera (universityId = 4)
      {
        universityId: 4,
        name: "Gestão de Recursos Humanos",
        kind: "Presencial",
        level: "Tecnólogo",
        shift: "Noite"
      },
      {
        universityId: 4,
        name: "Arquitetura e Urbanismo",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Noite"
      },
      // The next four Courses is to Estácio (universityId = 5)
      {
        universityId: 5,
        name: "Farmácia",
        kind: "Presencial",
        level: "Bacharelado",
        shift: "Manhã"
      },
      {
        universityId: 5,
        name: "Sistemas de Informação",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      {
        universityId: 5,
        name: "Gestão de Recursos Humanos",
        kind: "EaD",
        level: "Tecnólogo",
        shift: "Virtual"
      },
      {
        universityId: 5,
        name: "Administração",
        kind: "EaD",
        level: "Bacharelado",
        shift: "Virtual"
      },
      // The next two Courses is to UNOPAR (universityId = 6)
      {
        universityId: 6,
        name: "História",
        kind: "EaD",
        level: "Licenciatura",
        shift: "Virtual"
      },
      {
        universityId: 6,
        name: "Gestão de Recursos Humanos",
        kind: "EaD",
        level: "Tecnólogo",
        shift: "Virtual"
      },
      // The next one Courses is to ETEP (universityId = 7)
      {
        universityId: 7,
      name: "Administração",
      kind: "Presencial",
      level: "Bacharelado",
      shift: "Noite"
      },
      {
        universityId: 7,
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
