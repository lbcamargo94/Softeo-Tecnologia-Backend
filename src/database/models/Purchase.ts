import { DataTypes, Model } from 'sequelize';
import db from '.';
import Treatment from './Treatment';

class Purchase extends Model {
  private id: number;
  // private treatmentId: number;
  private paymantType: string;
  private purchaseDate: Date;
  private totalInstallments: number;
  private totalValue: number;
  public treatmentId: { id: number };

  get customerData() {
    return {
      id: this.id,
      treatmentId: this.treatmentId,
      paymantType: this.paymantType,
      purchaseDate: this.purchaseDate,
      totalInstallments: this.totalInstallments,
      totalValue: this.totalValue,
    };
  }
}

Purchase.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    treatmentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'treatment_id',
    },
    paymantType: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: 'treatment_type',
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
    timestamps: false,
  },
);

export default Purchase;

Purchase.hasOne(Treatment, { foreignKey: 'treatment_id', as: 'id' });
