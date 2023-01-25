import ILogin from '../interfaces/ILogin';
import User from '../database/models/User';
import crypto from './crypto';

export default class LoginValidate {
  constructor(
    private _response: ILogin,
  ) {}

  private emailVerified(): boolean {
    if (!this._response.email) return false;
    return true;
  }

  private passwordVerified(): boolean {
    if (!this._response.password) return false;
    return true;
  }

  loginVerified(): boolean {
    if (!this.emailVerified()) return false;
    if (!this.passwordVerified()) return false;
    return true;
  }

  loginValid = async () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const user = await User.findOne({ where: { email: this._response.email } });
    console.log(user?.dataValues);
    if (!emailRegex.test(this._response.email)) return false;
    if (!user) return false;
    if (!crypto.validPassword(this._response.password, user.password)) return false;
    return user.dataValues;
  };
}
