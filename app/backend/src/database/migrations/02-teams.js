'use strict';

module.exports = {
  up: async (QueryInterface, Sequelize) => {
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
  down: async (QueryInterface, _Sequelize) => {
    await QueryInterface.dropTable('teams')
  }
};
