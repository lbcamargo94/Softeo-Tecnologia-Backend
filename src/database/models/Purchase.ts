import { DataTypes, Model } from 'sequelize';
import db from '.';
import Customer from './Customer';
// import Treatment from './Treatment';

class Purchase extends Model {
  public id: number;
  public customerId: number;
  public paymantType: string;
  public purchaseDate: Date;
  public totalInstallments: number;
  public totalValue: number;
  public id_customer: { id: number };
}

Purchase.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    customerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'customer_id',
    },
    paymantType: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: 'paymant_type',
    },
    purchaseDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'purchase_date',
    },
    totalInstallments: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'total_installments',
    },
    totalValue: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2),
      field: 'total_value',
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Purchase',
    tableName: 'purchases',
    timestamps: false,
  },
);

// Purchase.hasOne(Treatment, { foreignKey: 'treatment_id', as: 'id' });
Purchase.belongsTo(Customer, { foreignKey: 'customerId', as: 'id_customer' });

export default Purchase;
