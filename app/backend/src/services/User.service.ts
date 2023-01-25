import User from '../database/models/User';
import ILogin from '../interfaces/ILogin';
import LoginValidate from '../validates/Login.validate';

export default class UserService {
  constructor(
    private _response = new User(),
  ) {}

  LoginVerified = async (request: ILogin) => {
    const verified = new LoginValidate(request);
    const isVerified = verified.loginVerified();
    const isValid = verified.loginValid();
    if (!isVerified) return { type: 'Error', message: 'All fields must be filled' };
    if (!isValid) return { type: 'Error', message: 'Incorrect email or password' };

    // verificar se o dado email existe
    // verificar se o dado senha existe
    // verificar se o dado email e valido
    // verificar se o dado senha e valido
  };
}
