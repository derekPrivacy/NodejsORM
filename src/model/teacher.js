const Sequelize = require("sequelize");

module.exports = sequelize.define(
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
}, {
    freezeTableName: true,
    timestamps: false,
}
);