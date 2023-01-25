import { Router } from 'express';

import Login from '../controllers/login.controller';

const login = new Login();

const loginRouter = Router();

loginRouter.post('/', (req, res) => login.LoginAcess(req, res));
loginRouter.get('/validate', (req, res) => login.loginValidate(req, res));

export default loginRouter;
