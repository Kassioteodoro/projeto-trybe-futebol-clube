// import User from '../database/models/User';
import ILogin from '../interfaces/ILogin';
import LoginValidate from '../validates/Login.validate';
import _jwt from '../utils/jwt';

export default class UserService {
  LoginAcess = async (request: ILogin) => {
    const verified = new LoginValidate(request);
    const isVerified = verified.loginVerified();
    const isValid = await verified.loginValid();
    if (!isVerified) return { type: 'errorVerified', message: 'All fields must be filled' };
    if (!isValid) return { type: 'errorValid', message: 'Incorrect email or password' };
    return { type: '', message: _jwt.generateToken(isValid.data) };
  };
}
