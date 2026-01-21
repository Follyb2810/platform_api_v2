import { App } from "../enums";

export interface ITokenService {
  generateToken(userId: string, app: App): string;
  verifyToken(token: string): { userId: string; app: App };
}
