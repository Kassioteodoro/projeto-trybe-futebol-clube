import { Request, Response } from 'express';
import Team from '../database/models/Team';

export default class SearchTeams {
  getAll = async (_req: Request, res: Response) => {
    const response = await Team.findAll();
    console.log(response);
    res.status(200).json(response);
  };

  getById = async (req: Request, res: Response) => {
    const { params: { id } } = req;
    console.log(id);
    const response = await Team.findByPk(id);
    console.log(response);
    res.status(200).json(response);
  };
}
