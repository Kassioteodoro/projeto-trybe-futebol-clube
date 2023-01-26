import IMatches from '../interfaces/IMatches';
import Team from '../database/models/Team';
import Matche from '../database/models/Matche';

export default class matchesService {
  static getAll = async () => {
    const response = await Matche.findAll({
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
      ] });
    return response;
  };

  static getFilterInProgress = async () => {
    const response = await Matche.findAll({
      where: { inProgress: true },
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

  static createNewMatche = async (dataMatche: IMatches) => {
    const response = await Matche.create({
      homeTeamId: dataMatche.homeTeamId,
      awayTeamId: dataMatche.awayTeamId,
      homeTeamGoals: dataMatche.homeTeamGoals,
      awayTeamGoals: dataMatche.awayTeamGoals,
      inProgress: true });
    console.log('esse sou eu', response);
    return response;
  };

  static endMatche = async (id: number) => {
    const response = await Matche.update(
      { inProgress: false },
      { where: { id } },
    );
    console.log(response);
  };
}
