import jwt, { Secret, SignOptions } from "jsonwebtoken";

type TPayload = {
  id: string;
  sub: string;
  email?: string;
  name?: string;
  userId?: string;
  roles?: string[];
};

export class JwtService {
  private static secret: Secret = process.env.JWT_SECRET!;
  private constructor() {}

  static generateToken(
    payload: TPayload,
    expiresIn: SignOptions["expiresIn"] = "1d",
  ): string {
    return jwt.sign(payload, JwtService.secret, { expiresIn });
  }

  static verifyToken(token: string): TPayload {
    return jwt.verify(token, JwtService.secret) as TPayload;
  }
}
