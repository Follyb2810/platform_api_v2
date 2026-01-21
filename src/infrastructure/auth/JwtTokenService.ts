import jwt from "jsonwebtoken";
import { ITokenService } from "../../core/interface/ITokenService";
import { App as DomainApp } from "../../core/enums";

export class JwtTokenService implements ITokenService {
  constructor(private secret: string) {}

  generateToken(userId: string, app: string): string {
    return jwt.sign({ userId, app }, this.secret, { expiresIn: "1h" });
  }

  verifyToken(token: string): { userId: string; app: DomainApp } {
    const payload = jwt.verify(token, this.secret) as {
      userId: string;
      app: string;
    };
    return { userId: payload.userId, app: payload.app as DomainApp };
  }
}
