const Sequelize = require('sequelize');
const database = require('../db');
 
const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})
 
module.exports = User;