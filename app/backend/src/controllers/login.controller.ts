import { Request, Response } from 'express';
import login from '../services/login.service';

export default class Login {
  // constructor(s
  LoginAcess = (req: Request, res: Response) => {
    const { body: { user } } = req;
    const response = login.returnToken({ id: user.id, role: user.role, email: user.email });
    res.status(200).json({ token: response });
  };
}
