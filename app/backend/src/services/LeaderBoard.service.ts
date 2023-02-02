import Team from '../database/models/Team';
import Matche from '../database/models/Matche';

export default class leardBoardService {
  static getTotal(response: { homeTeamGoals: number, awayTeamGoals: number }[]) {
    const totalGames = response.length;
    const totalVictories = response
      .filter((match) => match.homeTeamGoals > match.awayTeamGoals).length;
    const totalDraws = response
      .filter((match) => match.homeTeamGoals === match.awayTeamGoals).length;
    const totalLosses = response
      .filter((match) => match.homeTeamGoals < match.awayTeamGoals).length;
    const goalsFavor = response.reduce((acc, match) => acc + match.homeTeamGoals, 0);
    const goalsOwn = response.reduce((acc, match) => acc + match.awayTeamGoals, 0);
    const goalsBalance = goalsFavor - goalsOwn;
    return {
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance };
  }

  static calculatorPoints(total: {
    totalGames: number,
    totalVictories: number,
    totalDraws: number,
  }) {
    // (totalDePoints / (totalDeGames * 3)) * 100
    const totalPoints = (total.totalVictories * 3) + total.totalDraws;
    // achei em uma resposta no slack
    const efficiency = ((totalPoints / (total.totalGames * 3)) * 100).toFixed(2);
    return { totalPoints, efficiency };
  }

  static getTeamsEndHome = async () => {
    const response = await Matche.findAll({
      where: { inProgress: false },
      include: [{ model: Team, as: 'homeTeam' }, { model: Team, as: 'awayTeam' }],
    });

    const names = response.map((t) => t.homeTeamId);
    const newList = new Set();
    names.forEach((name) => newList.add(name));
    // https://www.youtube.com/watch?v=AiTyr_n5pws
    // console.log('names', [...newList.values()]);

    return [...newList.values()];
  };

  static getFilterEndTeam = async (id: number) => {
    const response = await Matche.findAll({
      where: { inProgress: false, homeTeamId: id },
      include: [{ model: Team, as: 'homeTeam' }, { model: Team, as: 'awayTeam' }],
    });
    const totals = this.getTotal(response);
    const cal = this.calculatorPoints({ totalGames: totals.totalGames,
      totalVictories: totals.totalVictories,
      totalDraws: totals.totalDraws });
    const { dataValues: { homeTeam: { dataValues: { teamName } } } } = response[0];
    return { name: teamName, totalPoints: cal.totalPoints, ...totals, efficiency: cal.efficiency };
  };

  static getListHome = async () => {
    const names = await this.getTeamsEndHome();
    const promises = names.map(async (name) => {
      const res = await this.getFilterEndTeam(name as number);
      return res;
    });
    const response: any = await Promise.all(promises);
    return response;
  };
}
