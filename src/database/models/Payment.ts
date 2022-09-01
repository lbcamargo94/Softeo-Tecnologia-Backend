import { DataTypes, Model } from 'sequelize';
import db from '.';
import Purchase from './Purchase';

class Payment extends Model {
  private id: number;
  private purchaseId: number;
  private paymantValue: number;
  private paymantType: string;
  private paymantDate: Date;
  private dueDate: Date;
  private paid: boolean;

  get customerData() {
    return {
      id: this.id,
      purchaseId: this.purchaseId,
      paymantValue: this.paymantValue,
      paymantType: this.paymantType,
      paymantDate: this.paymantDate,
      dueDate: this.dueDate,
      paid: this.paid,
    };
  }
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
    paymantValue: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2),
      field: 'paymant_value',
    },
    paymantType: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: 'paymant_type',
    },
    paymantDate: {
      allowNull: false,
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

Payment.belongsTo(Purchase, { foreignKey: 'purchaseId', as: 'id' });

export default Payment;
