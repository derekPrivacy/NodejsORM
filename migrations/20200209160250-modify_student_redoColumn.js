'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Student', 'SuspensionFlag'),
    ]);
  },

  down: (queryInterface, Sequelize) => {


  }
};