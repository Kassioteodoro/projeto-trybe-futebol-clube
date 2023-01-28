// import IUpdateMatch from '../interfaces/IUpdateMatch';
// import IMatches from '../interfaces/IMatches';
import Team from '../database/models/Team';
import Matche from '../database/models/Matche';

export default class leardBoardService {
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
  static getFilterEnd = async () => {
    const response = await Matche.findAll({
      where: { inProgress: false },
      include: [
        {
          model: Team,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Team,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return response;
  };
}
