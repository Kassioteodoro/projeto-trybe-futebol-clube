import { NextFunction, Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import LoginValidate from '../validates/Login.validate';

export default class LoginMiddleValid {
  static valid = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    const verified = new LoginValidate(body);
    const isVerified = verified.loginVerified();
    const user = await verified.loginValid();

    if (!isVerified) {
      return res.status(statusCode.errorVerified).json({ message: 'All fields must be filled' });
    }
    if (!user) {
      return res.status(statusCode.errorValid).json({ message: 'Incorrect email or password' });
    }

    body.user = user;
    next();
  };

  static loginValidate = (req: Request, res: Response) => {
    const { body: { token } } = req;
    res.status(200).json({ role: token.role });
  };
}
