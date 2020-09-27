'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Resumes', [{
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae viverra leo, vitae elementum nibh. Vivamus et pharetra eros, sed blandit mauris.',
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Resumes', null, {});
  }
};
