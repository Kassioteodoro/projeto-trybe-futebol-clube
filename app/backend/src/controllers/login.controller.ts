import { Request, Response } from 'express';
import _jwt from '../utils/jwt';
// import User from '../services/User.service';

export default class Login {
  // constructor(s
  LoginAcess = (req: Request, res: Response) => {
    const { body: { user } } = req;
    const token = _jwt.generateToken({ id: user.id, role: user.role, email: user.email });
    res.status(200).json({ token });
  };
}
