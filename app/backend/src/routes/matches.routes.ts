import { Router } from 'express';
import validateToken from '../middlewares/validateToken';

import Matches from '../controllers/ matches.controller';
import MatchMiddleValid from '../middlewares/matchMiddleValid';

const matches = new Matches();

const matchesRouter = Router();

matchesRouter.get(
  '/',
  (req, res, next) => matches.filter(req, res, next),
  (req, res) => matches.getAll(req, res),
);
matchesRouter.post(
  '/',
  (req, res, next) => validateToken.valid(req, res, next),
  (req, res, next) => MatchMiddleValid.valid(req, res, next),
  (req, res) => matches.create(req, res),
);

matchesRouter.patch(
  '/:id',
  (req, res) => matches.updateMatch(req, res),
);
matchesRouter.patch(
  '/:id/finish',
  (req, res) => matches.endMatch(req, res),
);
// matchesRouter.get('/', (req, res) => (req, res));
// searchMatchesRouter.get('/validate', (req, res) => searchMatches.filterEnd(req, res));

export default matchesRouter;
