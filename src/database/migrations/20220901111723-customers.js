'use strict';

module.exports = {
  async up(queryInterface, Sequelize)
  {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true,
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(14),
        unique: true,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.INTEGER(8),
        unique: true,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
    });
  },

  async down(queryInterface)
  {
    await queryInterface.dropTable('customers');
  },
};
