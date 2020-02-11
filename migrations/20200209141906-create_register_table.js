'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Register", {
      id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      TeacherEmail: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      StudentEmail: {
        type: Sequelize.STRING(),
        allowNull: false,
      }
    }, {
      freezeTableName: true,
      timestamps: false,
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Register");
  }
};