import { DataTypes, Model } from 'sequelize';
import db from '.';
import Customer from './Customer';
// import Treatment from './Treatment';

class Purchase extends Model {
  public id: number;
  public customerId: number;
  public paymentType: string;
  public purchaseDate: Date;
  public totalInstallments: number;
  public totalValue: number;
  public id_customer: { id: number };
  // public id_customer: { id: number };
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
    // treatmentId: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    //   field: 'treatment_id',
    // },
    paymentType: {
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

// Purchase.belongsTo(Treatment, { foreignKey: 'treatmentId', as: 'id_treatment' });
Purchase.belongsTo(Customer, { foreignKey: 'customerId', as: 'id_customer' });

export default Purchase;
