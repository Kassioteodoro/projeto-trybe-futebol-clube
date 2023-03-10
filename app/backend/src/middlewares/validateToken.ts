import { NextFunction, Request, Response } from 'express';
import _jwt from '../utils/jwt';
import statusCode from '../utils/statusCode';

export default class validateToken {
  static valid = async (req: Request, res: Response, next: NextFunction) => {
    const { headers: { authorization } } = req;
    if (!authorization) {
      return res.status(statusCode.invalidToken).json({ message: 'Token not Found' });
    }
    const response = await _jwt.verifyToken(authorization);

    if (response === 'Error') {
      return res.status(statusCode.invalidToken).json({ message: 'Token must be a valid token' });
    }
    req.body.token = response;
    next();
  };
}
