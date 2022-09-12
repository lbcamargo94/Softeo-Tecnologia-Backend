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
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'customer_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'customers',
          key: 'id',
        }
      },
      paymantType: {
        allowNull: false,
        type: Sequelize.STRING(50),
        field: 'paymant_type',
      },
      purchaseDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'purchase_date',
      },
      totalInstallments: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'total_installments',
      },
      totalValue: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_value',
      },
    });
  },

  async down(queryInterface)
  {
    await queryInterface.dropTable('purchases');
  },
};