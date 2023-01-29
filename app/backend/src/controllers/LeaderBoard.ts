import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoard.service';

export default class LeaderBoard {
  getAllFilterEnd = async (req: Request, res: Response) => {
    const response = await LeaderBoardService.getListHome();
    const result = response.sort((
      a: { totalPoints: number, totalVictories: number, goalsFavor: number, goalsBalance: number },
      b: { totalPoints: number, totalVictories: number, goalsFavor: number, goalsBalance: number },
    ) => {
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalVictories > b.totalVictories) return -1;
      if (a.totalVictories < b.totalVictories) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      return 0;
    });
    res.status(200).json(result);
  };
}
