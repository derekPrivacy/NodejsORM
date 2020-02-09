'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Student', 'SuspensionFlag', {
        type: Sequelize.INTEGER(),
        allowNull: false,
        unique: false
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.changeColumn('Student', 'SuspensionFlag', {
        type: Sequelize.STRING(),
        allowNull: true,
        unique: true
      }),
    ]);

  }
};