const Sequelize = require("sequelize");

module.exports = sequelize.define(
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