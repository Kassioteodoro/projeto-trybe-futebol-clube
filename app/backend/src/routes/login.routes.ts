import { Router } from 'express';
import User from '../services/User.service';

import Login from '../controllers/login.controller';

const user = new User();

const login = new Login(user);

const loginRouter = Router();

loginRouter.post('/login', login.LoginAcess);

export default loginRouter;
