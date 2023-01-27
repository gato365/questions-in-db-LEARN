// Notes Model using Sequelize
const { Model, DataTypes } = require('sequelize');
const notes = require('../routes/notes');
const sequelize = require('./config/connection');


Notes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'notes'
    }
);

module.exports = Notes;





