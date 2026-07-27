import { App } from "../enums";

export interface TokenPayload {
  userId: string;
  app: App;
  roles?: string[];
}

export interface ITokenService {
  generateToken(payload: TokenPayload): string;
  verifyToken(token: string): TokenPayload;
}
