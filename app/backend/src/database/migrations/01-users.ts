import { DataTypes, QueryInterface } from "sequelize";

export default {
  async up(QueryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await QueryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        field: 'user_name'
      },
      role: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    })
  },
  async down(QueryInterface: QueryInterface, _Sequelize: typeof DataTypes) {
    await QueryInterface.dropTable('users')
  }
};
