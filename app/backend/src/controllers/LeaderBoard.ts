import { Request, Response } from 'express';
import Matche from '../services/matches.service';

export default class LeaderBoard {
  getAllFilterEnd = async (req: Request, res: Response) => {
    // retornar todos os marches finalizados
    const response = await Matche.getFilterEnd();
    console.log('controllers', response);
    res.status(200).json(response);
  };
}
