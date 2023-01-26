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
}
