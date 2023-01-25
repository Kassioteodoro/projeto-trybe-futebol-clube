import { Router } from 'express';

import Login from '../controllers/login.controller';

const login = new Login();

const loginRouter = Router();

loginRouter.post('/', (req, res) => login.LoginAcess(req, res));

export default loginRouter;
