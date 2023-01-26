import { Router } from 'express';

import Matches from '../controllers/ matches.controller';

const matches = new Matches();

const matchesRouter = Router();

matchesRouter.get(
  '/',
  (req, res, next) => matches.filter(req, res, next),
  (req, res) => matches.getAll(req, res),
);
// matchesRouter.get('/', (req, res) => (req, res));
// searchMatchesRouter.get('/validate', (req, res) => searchMatches.filterEnd(req, res));

export default matchesRouter;
