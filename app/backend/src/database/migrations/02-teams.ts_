import { DataTypes, QueryInterface } from "sequelize";

export default {
  async up(QueryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await QueryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamName: {
        type: Sequelize.STRING,
        field: 'team_name'
      }
    })
  },
  async down(QueryInterface: QueryInterface, _Sequelize: typeof DataTypes) {
    await QueryInterface.dropTable('teams')
  }
};
