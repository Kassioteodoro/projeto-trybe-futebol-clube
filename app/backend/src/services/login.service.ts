import _jwt from '../utils/jwt';
import IBody from '../interfaces/IBody';

export default class LoginService {
  static returnToken = async (body : IBody) => {
    // console.log('aqwsfgsdrgf');

    const token = await _jwt.generateToken({ id: body.id, role: body.role, email: body.email });
    // console.log(token);

    return token;
  };
}
