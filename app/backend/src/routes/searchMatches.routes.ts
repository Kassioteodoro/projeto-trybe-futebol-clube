import { Router } from 'express';

import SearchMatches from '../controllers/ searchMatches.controller';

const searchMatches = new SearchMatches();

const searchMatchesRouter = Router();

searchMatchesRouter.get('/', (req, res) => searchMatches.getAll(req, res));
// searchMatchesRouter.get('/validate', (req, res) => searchMatches.filterProgress(req, res));
// searchMatchesRouter.get('/validate', (req, res) => searchMatches.filterEnd(req, res));

export default searchMatchesRouter;
