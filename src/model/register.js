const Sequelize = require("sequelize");

module.exports = sequelize.define(
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