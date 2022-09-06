'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoINcrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      email: Sequelize.STRING //opcional
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
