'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //You must return a promise 
    return queryInterface.createTable(
      "Teacher", {
      id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Teacher_Email: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
      }
    }, {
      freezeTableName: true,
      timestamps: false,
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Teacher");
  }
};
