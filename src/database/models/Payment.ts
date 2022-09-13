import { DataTypes, Model } from 'sequelize';
import db from '.';
// import Purchase from './Purchase';

class Payment extends Model {
  public id: number;
  public purchaseId: number;
  public paymentValue: number;
  public paymentType: string;
  public paymantDate: Date;
  public dueDate: Date;
  public paid: boolean;
}

Payment.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    purchaseId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'purchase_id',
    },
    paymentValue: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2),
      field: 'paymant_value',
    },
    paymentType: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: 'paymant_type',
    },
    paymentDate: {
      allowNull: true,
      type: DataTypes.DATE,
      field: 'paymantdate',
    },
    dueDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'due_date',
    },
    paid: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Payment',
    timestamps: false,
  },
);

Payment.belongsTo(Purchase, { foreignKey: 'purchaseId', as: 'id_purchase' });

export default Payment;
