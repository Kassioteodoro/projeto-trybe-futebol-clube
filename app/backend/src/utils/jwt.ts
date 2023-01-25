import * as jwt from 'jsonwebtoken';
import IBody from '../interfaces/IBody';

export default class _jwt {
  static generateToken(body: IBody) {
    const secret = process.env.JWT_SECRET;
    const jwtConfig = {
      expiresIn: '1d',
    };
    const result = jwt.sign(body, secret as string, jwtConfig);
    return result;
  }

  static verifyToken(token: string) {
    const secret = process.env.JWT_SECRET;
    return jwt.verify(token, secret as string);
  }
}
