import * as bcrypt from 'bcryptjs';

export default class crypto {
  static encrypt(password: string): string {
    const crypt = bcrypt.hashSync(password);
    return crypt;
  }

  static validPassword(password: string, hash: string): boolean {
    const result = bcrypt.compareSync(password, hash);
    return result;
  }
}
