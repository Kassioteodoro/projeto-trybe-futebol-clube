import { NextFunction, Request, Response } from 'express';
import Matche from '../services/matches.service';

export default class Matches {
  getAll = async (_req: Request, res: Response) => {
    const response = await Matche.getAll();

    res.status(200).json(response);
  };

  filter = async (req: Request, res: Response, next: NextFunction) => {
    const { query: { inProgress } } = req;
    if (inProgress === 'true') {
      const response = await Matche.getFilterInProgress();
      return res.status(200).json(response);
    }
    if (inProgress === 'false') {
      const response = await Matche.getFilterEnd();
      return res.status(200).json(response);
    }
    next();
  };

  create = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await Matche.createNewMatche(body);
    res.status(201).json(response);
  };

  endMatch = async (req: Request, res: Response) => {
    const { params: { id } } = req;
    await Matche.endMatche(Number(id));
    res.status(200).json({ message: 'Finished' });
  };

  updateMatch = async (req: Request, res: Response) => {
    const { params: { id }, body } = req;
    await Matche.updateMatch(Number(id), body);
    res.status(200).json({ message: 'atualizado' });
  };
}
