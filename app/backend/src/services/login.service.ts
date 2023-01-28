import _jwt from '../utils/jwt';
import IBody from '../interfaces/IBody';

export default class LoginService {
  static returnToken(body : IBody): string {
    // console.log(body);

    const token = _jwt.generateToken({ id: body.id, role: body.role, email: body.email });
    // console.log(token);

    return token;
  }
}
