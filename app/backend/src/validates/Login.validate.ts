import ILogin from '../interfaces/ILogin';

export default class LoginValidate implements ILogin {
  constructor(
    protected _response: ILogin,
  ) {}

  get email(): string {
    return this._response.email;
  }

  get password(): string {
    return this._response.password;
  }

  emailVerified(): boolean {
    if (this._response.email) return true;
    return false;
  }

  emailValid(): boolean {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailRegex.test(this._response.email)) return true;
    return false;
  }

  passwordVerified(): boolean {
    if (this._response.password) return true;
    return false;
  }

  passwordValid(): boolean {
    if (this._response.password.length >= 6) return true;
    return false;
  }

  loginValidate(): boolean {
    if (!this.emailVerified()) return false;
    if (!this.passwordVerified()) return false;
    if (!this.emailValid()) return false;
    if (!this.passwordValid()) return false;
    return true;
  }
}
