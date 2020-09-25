'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Resume', [{
        bio: 'About me seed',
      }], {});
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Resume', null, {});
  }
};
