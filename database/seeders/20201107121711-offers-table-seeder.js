'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('offers', [
      {
        full_price: 2139.64,
        price_with_discount: 706.08,
        discount_percentage: 67.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 1,
        universityId: 1,
        campusId: 1
      },
      {
        full_price: 1227.05,
        price_with_discount: 515.36,
        discount_percentage: 58.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 2,
        universityId: 1,
        campusId: 2
      },
      {
        full_price: 1487.31,
        price_with_discount: 520.56,
        discount_percentage: 65.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 3,
        universityId: 1,
        campusId: 3
      },
      {
        full_price: 1668.4,
        price_with_discount: 617.31,
        discount_percentage: 63.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 4,
        universityId: 1,
        campusId: 4
      },
      {
        full_price: 1447.29,
        price_with_discount: 477.61,
        discount_percentage: 67.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 5,
        universityId: 1,
        campusId: 5
      },
      {
        full_price: 1461.16,
        price_with_discount: 1241.99,
        discount_percentage: 15.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 6,
        universityId: 2,
        campusId: 6
      },
      {
        full_price: 1520.0,
        price_with_discount: 1368.0,
        discount_percentage: 10.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 7,
        universityId: 2,
        campusId: 7
      },
      {
        full_price: 1498.0,
        price_with_discount: 1273.3,
        discount_percentage: 15.0,
        start_date: "01/02/2020",
        enrollment_semester: "2020.1",
        enabled: false,
        courseId: 8,
        universityId: 2,
        campusId: 6
      },
      {
        full_price: 1745.22,
        price_with_discount: 539.1,
        discount_percentage: 69.11,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 9,
        universityId: 3,
        campusId: 8
      },
      {
        full_price: 1367.34,
        price_with_discount: 539.14,
        discount_percentage: 60.57,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 10,
        universityId: 3,
        campusId: 8
      },
      {
        full_price: 2038.19,
        price_with_discount: 1259.02,
        discount_percentage: 38.24,
        start_date: "01/02/2020",
        enrollment_semester: "2020.1",
        enabled: false,
        courseId: 11,
        universityId: 3,
        campusId: 9
      },
      {
        full_price: 437.0,
        price_with_discount: 142.9,
        discount_percentage: 67.3,
        start_date: "01/02/2020",
        enrollment_semester: "2020.1",
        enabled: true,
        courseId: 12,
        universityId: 3,
        campusId: 10
      },
      {
        full_price: 453.0,
        price_with_discount: 186.82,
        discount_percentage: 58.76,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 13,
        universityId: 3,
        campusId: 11
      },
      {
        full_price: 453.0,
        price_with_discount: 163.03,
        discount_percentage: 64.01,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 14,
        universityId: 3,
        campusId: 10
      },
      {
        full_price: 499.0,
        price_with_discount: 159.23,
        discount_percentage: 68.09,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 15,
        universityId: 3,
        campusId: 8
      },
      {
        full_price: 998.33,
        price_with_discount: 748.75,
        discount_percentage: 25.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 16,
        universityId: 4,
        campusId: 12
      },
      {
        full_price: 1408.63,
        price_with_discount: 493.02,
        discount_percentage: 65.0,
        start_date: "01/02/2020",
        enrollment_semester: "2020.1",
        enabled: true,
        courseId: 17,
        universityId: 4,
        campusId: 12
      },
      {
        full_price: 1385.57,
        price_with_discount: 692.79,
        discount_percentage: 50.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 18,
        universityId: 5,
        campusId: 13
      },
      {
        full_price: 414.14,
        price_with_discount: 207.07,
        discount_percentage: 50.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 19,
        universityId: 5,
        campusId: 14
      },
      {
        full_price: 414.14,
        price_with_discount: 207.07,
        discount_percentage: 50.0,
        start_date: "01/02/2020",
        enrollment_semester: "2020.1",
        enabled: true,
        courseId: 20,
        universityId: 5,
        campusId: 15
      },
      {
        full_price: 428.43,
        price_with_discount: 278.48,
        discount_percentage: 35.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 21,
        universityId: 5,
        campusId: 15
      },
      {
        full_price: 519.71,
        price_with_discount: 222.23,
        discount_percentage: 57.24,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 22,
        universityId: 6,
        campusId: 16
      },
      {
        full_price: 454.56,
        price_with_discount: 174.01,
        discount_percentage: 61.72,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 23,
        universityId: 6,
        campusId: 17
      },
      {
        full_price: 1219.86,
        price_with_discount: 609.93,
        discount_percentage: 50.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 24,
        universityId: 7,
        campusId: 18
      },
      {
        full_price: 932.58,
        price_with_discount: 606.18,
        discount_percentage: 35.0,
        start_date: "01/08/2019",
        enrollment_semester: "2019.2",
        enabled: true,
        courseId: 25,
        universityId: 7,
        campusId: 18
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('offers', null, {});
  }
};
