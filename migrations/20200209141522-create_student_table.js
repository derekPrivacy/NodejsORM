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
      Student_Email: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
      },
      Suspension_Flag: {
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
