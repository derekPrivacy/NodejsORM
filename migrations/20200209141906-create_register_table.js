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
      Teacher_Email: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      Student_Email: {
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