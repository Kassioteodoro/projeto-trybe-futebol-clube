import * as jwt from 'jsonwebtoken';
import IBody from '../interfaces/IBody';

export default class _jwt {
  static generateToken(body: IBody) {
    const secret = process.env.JWT_SECRET || 'jwt_secret';
    const jwtConfig = {
      expiresIn: '1d',
      algorithms: 'HS256',
    };
    return jwt.sign(body, secret, jwtConfig);
  }

  static verifyToken(token: string) {
    const secret = process.env.JWT_SECRET || 'jwt_secret';
    return jwt.verify(token, secret);
  }
}
