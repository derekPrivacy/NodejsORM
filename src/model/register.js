const Sequelize = require("sequelize");

module.exports = sequelize.define(
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