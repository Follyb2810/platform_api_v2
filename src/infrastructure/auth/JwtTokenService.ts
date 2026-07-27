import jwt from "jsonwebtoken";
import {
  ITokenService,
  TokenPayload,
} from "../../core/interface/ITokenService";
import { App } from "../../core/enums";

export class JwtTokenService implements ITokenService {
  constructor(private secret: string) {}

  generateToken(payload: TokenPayload): string {
    return jwt.sign(payload, this.secret, { expiresIn: "1h" });
  }

  verifyToken(token: string): TokenPayload {
    const payload = jwt.verify(token, this.secret) as {
      userId: string;
      app: string;
      roles?: string[];
    };

    return {
      userId: payload.userId,
      app: payload.app as App,
      roles: payload.roles,
    };
  }
}
