import { Router } from 'express';
import LoginMiddleValid from '../middlewares/loginMiddleValid';

import Login from '../controllers/login.controller';

const login = new Login();

const loginRouter = Router();

loginRouter.post(
  '/',
  (req, res, next) => LoginMiddleValid.valid(req, res, next),
  (req, res) => login.LoginAcess(req, res),
);
loginRouter.get('/validate', (req, res) => LoginMiddleValid.loginValidate(req, res));

export default loginRouter;
