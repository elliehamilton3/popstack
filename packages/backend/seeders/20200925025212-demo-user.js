'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      userUuid: "0001",
      authId: "0001",
      name: 'Example Person',
      email: "email@test.com",
      phoneNumber: "0123123123"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
