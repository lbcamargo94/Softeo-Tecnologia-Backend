import { DataTypes, Model } from 'sequelize';
import db from '.';

class Customer extends Model {
  private id: number;
  private fullName: string;
  private email: string;
  private phoneNumber: string;
  private cpf: string;
  private address: string;

  get customerData() {
    return {
      id: this.id,
      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      cpf: this.cpf,
      address: this.address,
    };
  }
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
      unique: true,
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
