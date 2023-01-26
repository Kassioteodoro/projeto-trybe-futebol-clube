
module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeTeamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        field: 'home_team_id'
      },
      homeTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'home_team_goals'
      },
      awayTeamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        field: 'away_team_id'
      },
      awayTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'away_team_goals'
      },
      inProgress: {
        type: Sequelize.BOOLEAN,
        field: 'in_progress'
      },
    })
  },
  down: async (QueryInterface, _Sequelize) => {
    await QueryInterface.dropTable('matches')
  }
};
