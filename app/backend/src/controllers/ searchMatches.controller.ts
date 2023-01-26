import { Request, Response } from 'express';
// import Team from '../database/models/Team';
import Matche from '../database/models/Matche';

export default class SearchMatches {
  getAll = async (_req: Request, res: Response) => {
    console.log('achoooooooooooooooo!!!!!!!!!!!!!!!!!!!!!!!!!!');
    const response = await Matche.findAll();
    console.log(response);
    res.status(200).json(response);
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
