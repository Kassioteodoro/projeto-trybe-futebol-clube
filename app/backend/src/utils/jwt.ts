import * as jwt from 'jsonwebtoken';
import IBody from '../interfaces/IBody';

export default class _jwt {
  static generateToken(body: IBody) {
    // console.log('aaaaaaaaaaaaaaaa');

    const secret = process.env.JWT_SECRET as string;
    const jwtConfig = {
      expiresIn: '1d',
    };
    const result = jwt.sign(body, secret, jwtConfig);
    // console.log(result);

    return result;
  }

  static verifyToken(token: string) {
    try {
      const secret = process.env.JWT_SECRET;
      return jwt.verify(token, secret as string);
    } catch (err) {
      return 'Error';
    }
  }
}
