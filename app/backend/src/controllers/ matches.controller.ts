import { NextFunction, Request, Response } from 'express';
import Matche from '../services/matches.service';

export default class Matches {
  getAll = async (_req: Request, res: Response) => {
    console.log('achoooooooooooooooo!!!!!!!!!!!!!!!!!!!!!!!!!!');
    const response = await Matche.getAll();
    console.log(response);
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
  // user os filtros como middleware
  // filterProgress = async (_req: Request, res: Response) => {
  //   const response = await Matche.findAll({
  //     where: { inProgress: true },
  //     include: Team,
  //   });
  //   console.log(response);
  //   res.status(200).json(response);
  // };

  // filterEnd = async (_req: Request, res: Response) => {
  //   const response = await Matche.findAll({ where: { inProgress: false } });
  //   console.log(response);
  //   res.status(200).json(response);
  // };
  // getById = async (req: Request, res: Response) => {
  //   const { params: { id } } = req;
  //   console.log(id);
  //   const response = await Team.findByPk(id);
  //   console.log(response);
  //   res.status(200).json({ data: response });
  // };
}
