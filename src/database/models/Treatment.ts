import { DataTypes, Model } from 'sequelize';
import db from '.';

class Treatment extends Model {
  private id: number;
  private treatmentName: string;
  private treatmentValue: number;
  private description: string;

  get customerData() {
    return {
      id: this.id,
      treatmentName: this.treatmentName,
      treatmentValue: this.treatmentValue,
      description: this.description,
    };
  }
}

Treatment.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    treatmentName: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: 'treatment_name',
    },
    treatmentValue: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2),
      field: 'treatment_value',
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(500),
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Treatment',
    timestamps: false,
  },
);

export default Treatment;
