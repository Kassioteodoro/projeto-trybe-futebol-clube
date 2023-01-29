import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoard.service';

export default class LeaderBoard {
  getAllFilterEnd = async (req: Request, res: Response) => {
    // retornar todos os marches finalizados
    const response = await LeaderBoardService.getFilterEndTeam(1);
    const test = await LeaderBoardService.getListHome();
    // console.log('controllers', response);
    res.status(200).json(response);
  };
}
