// import IUpdateMatch from '../interfaces/IUpdateMatch';
// import IMatches from '../interfaces/IMatches';
import Team from '../database/models/Team';
import Matche from '../database/models/Matche';

// endPoint LeaderBorad/home
// 1 filtrar a classificacao dos times da casa
//  ou seja, fazer um top 1 com os times que jogaram em casa
// apenas partidas que ja foram finalizadas
// retorno e um array exatamente assim:
// [
//   {
//     "name": "Santos",
//     "totalPoints": 9,
//     "totalGames": 3,
//     "totalVictories": 3,
//     "totalDraws": 0,
//     "totalLosses": 0,
//     "goalsFavor": 9,
//     "goalsOwn": 3,
//     "goalsBalance": 6,
//     "efficiency": "100.00"
//   },
//   {
//     "name": "Palmeiras",
//     "totalPoints": 7,
//     "totalGames": 3,
//     "totalVictories": 2,
//     "totalDraws": 1,
//     "totalLosses": 0,
//     "goalsFavor": 10,
//     "goalsOwn": 5,
//     "goalsBalance": 5,
//     "efficiency": "77.78"
//   },
// ]
export default class leardBoardService {
  // protected name: string;
  // protected totalPoints: number;
  // protected totalGames: number;
  // protected totalVictories: number;
  // protected totalDraws: number;
  // protected totalLosses: number;
  // protected goalsFavor: number;
  // protected goalsOwn: number;
  // protected goalsBalance: number;
  // protected efficiency: number;
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
    // (totalDeVitorias / (totalDeGames * 3)) * 100
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
    // console.log('Service', totals, cal, teamName);
    return { name: teamName, totalPoints: cal.totalPoints, ...totals, efficiency: cal.efficiency };
  };

  static getListHome = async () => {
    const names = await this.getTeamsEndHome();
    const promises = names.map(async (name) => {
      const res = await this.getFilterEndTeam(name as number);
      return res;
    });
    const response: any = await Promise.all(promises);
    // const result = response.sort((a, b) => {
    //   if (a.totalPoints < b.totalPoints) return -1;
    //   return true;
    // });
    console.log(response);
    return response;
  };
}
