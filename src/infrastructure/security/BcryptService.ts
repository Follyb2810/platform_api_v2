import bcrypt from "bcrypt";
import { PasswordHasher } from "../../core/services/PasswordHasher";

export class BcryptService implements PasswordHasher {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async compare(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed);
  }
}
