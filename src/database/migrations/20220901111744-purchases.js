'use strict';

module.exports = {
  async up(queryInterface, Sequelize)
  {
    await queryInterface.createTable('purchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      treatmentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'treatment_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'treatments',
          key: 'id',
        },
      },
      paymantType: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      purchaseDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      totalInstallments: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      totalValue: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      },
    });
  },

  async down(queryInterface)
  {
    await queryInterface.dropTable('purchases');
  },
};
