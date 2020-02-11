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
        type: Sequelize.INTEGER(),
        allowNull: false,
        unique: false
      }
    }, {
      freezeTableName: true,
      timestamps: false,
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Student");
  }
};
