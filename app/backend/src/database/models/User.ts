import { DataTypes, Model } from 'sequelize';
import db from '.';
// import Matche from './Matche';

class User extends Model {
  declare id: number;
  declare userName: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userName: {
    type: DataTypes.STRING,
    field: 'user_name',
  },
  role: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'user',
  tableName: 'users',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// User.hasMany(Matche, { foreignKey: 'homeTeamId', as: 'matcheSTeamHome' });
// User.hasMany(Matche, { foreignKey: 'awayTeamId', as: 'matcheSTeamAway' });

export default User;
