import { Router } from 'express';

import SearchTeams from '../controllers/ searchTeams.controller';

const _searchTeams = new SearchTeams();

const searchTeamsRouter = Router();

searchTeamsRouter.get('/', (req, res) => _searchTeams.getAll(req, res));
searchTeamsRouter.get('/:id', (req, res) => _searchTeams.getById(req, res));

export default searchTeamsRouter;
