import { DataTypes, Model } from 'sequelize';
import db from '.';

class Customer extends Model {
  public id: number;
  public fullName: string;
  public email: string;
  public phoneNumber: string;
  public cpf: string;
  public address: string;
  public customer_purchases: { id: number };
}

Customer.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fullName: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: 'full_name',
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(100),
      unique: true,
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING(14),
    },
    cpf: {
      allowNull: false,
      type: DataTypes.STRING(11),
      unique: true,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(200),
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Customer',
    tableName: 'customers',
    timestamps: false,
  },
);

export default Customer;
