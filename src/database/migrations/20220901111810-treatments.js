'use strict';

module.exports = {
  async up(queryInterface, Sequelize)
  {
    await queryInterface.createTable('treatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      treatmentName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      treatmentValue: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
    });
  },

  async down(queryInterface)
  {
    await queryInterface.dropTable('treatments');
  }
};
