const Sequelize = require("sequelize");

module.exports = sequelize.define(
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