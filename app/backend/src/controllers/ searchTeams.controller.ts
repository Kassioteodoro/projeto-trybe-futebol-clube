import { Request, Response } from 'express';
import Team from '../services/team.service';

export default class SearchTeams {
  getAll = async (_req: Request, res: Response) => {
    const response = await Team.getAll();
    res.status(200).json(response);
  };

  getById = async (req: Request, res: Response) => {
    const { params: { id } } = req;
    const response = await Team.getById(Number(id));
    res.status(200).json(response);
  };
}
