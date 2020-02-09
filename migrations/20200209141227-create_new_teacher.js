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
      TeacherEmail: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
      }
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Teacher");
  }
};
