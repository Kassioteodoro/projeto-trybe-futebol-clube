import { Request, Response } from 'express';
import User from '../services/User.service';
import statusCode from '../utils/statusCode';

export default class Login {
  constructor(
    private user = new User(),
  ) {}

  LoginAcess = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await this.user.LoginAcess(body);
    if (response.type === 'errorVerified') {
      return res.status(statusCode[response.type]).json({ message: response.message });
    }
    if (response.type === 'errorValid') {
      return res.status(statusCode[response.type]).json({ message: response.message });
    }
    res.status(200).json({ token: response.message });
  };
}