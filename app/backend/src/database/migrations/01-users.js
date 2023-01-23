'use strict';

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    })
  },
  down: async (QueryInterface, _Sequelize) => {
    await QueryInterface.dropTable('users')
  }
};
