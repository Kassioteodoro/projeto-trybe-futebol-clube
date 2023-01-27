import Team from '../database/models/Team';

export default class TeamService {
  static getAll = async () => {
    const response = await Team.findAll();
    console.log(response);
    return response;
  };

  static getById = async (id: number) => {
    const response = await Team.findByPk(id);
    console.log(response);
    return response;
  };
}
