import { DataTypes, Model } from 'sequelize';
import db from '.';
import Team from './Team';
// import OtherModel from './OtherModel';

class Matche extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matche.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
    field: 'away_team_id',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    field: 'in_progress',
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'user',
  tableName: 'matches',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Matche.belongsTo(Team, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matche.belongsTo(Team, { foreignKey: 'awayTeamId', as: 'awayTeam' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

Team.hasMany(Matche, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Team.hasMany(Matche, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default Matche;
