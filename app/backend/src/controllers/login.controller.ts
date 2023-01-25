import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import _jwt from '../utils/jwt';
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

  loginValidate = (req: Request, res: Response) => {
    const { headers } = req;
    const token = headers.authorization as string;
    const response = _jwt.verifyToken(token) as unknown;
    const result = response as JwtPayload;
    console.log(response);
    res.status(200).json({ role: result.role });
  };
}
