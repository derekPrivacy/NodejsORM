'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Student", {
      id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      StudentEmail: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
      },
      SuspensionFlag: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
      }
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Student");
  }
};
