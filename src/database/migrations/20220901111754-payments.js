'use strict';

module.exports = {
  async up(queryInterface, Sequelize)
  {
    await queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      purchaseId: {
        allowNull: false,
        field: "purchase_id",
        // onDelete: "CASCADE",
        // onUpdate: "CASCADE",
        // references: {
        //   model: "Purchase",
        //   key: "id",
        // },
        type: Sequelize.INTEGER,
      },
      paymantValue: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      },
      paymantType: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      paymantDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      dueDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      paid: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
    });
  },

  async down(queryInterface)
  {
    await queryInterface.dropTable('payments');
  }
};
