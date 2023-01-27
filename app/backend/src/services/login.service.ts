import _jwt from '../utils/jwt';
import IBody from '../interfaces/IBody';

export default class LoginService {
  static returnToken(body : IBody): string {
    const token = _jwt.generateToken({ id: body.id, role: body.role, email: body.email });
    return token;
  }
}
