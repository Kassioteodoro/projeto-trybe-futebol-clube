import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoard.service';

export default class LeaderBoard {
  getAllFilterEnd = async (req: Request, res: Response) => {
    // retornar todos os marches finalizados
    // const response = await LeaderBoardService.getFilterEndTeam(1);
    const response = await LeaderBoardService.getListHome();
    const result = response.sort((a: { totalPoints: number }, b: { totalPoints: number }) => {
      if (a.totalPoints > b.totalPoints) return -1;
      return true;
    });
    // console.log('controllers', result);
    res.status(200).json(result);
  };
}
