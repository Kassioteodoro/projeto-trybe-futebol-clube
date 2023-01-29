import { Router } from 'express';
// import validateToken from '../middlewares/validateToken';

import LeaderBoard from '../controllers/LeaderBoard';
// import MatchMiddleValid from '../middlewares/matchMiddleValid';

const controller = new LeaderBoard();

const LBHRouter = Router();

LBHRouter.get(
  '/home',
  (req, res) => controller.getAllFilterEnd(req, res),
);

export default LBHRouter;
