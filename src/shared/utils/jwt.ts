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
  private static keycloakPublic: string = process.env.PUBLIC_KEY_KEYCLOAK!;

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

  static verifyKeycloakToken(token: string): TPayload {
    const rawKey = JwtService.keycloakPublic;
    if (!rawKey) throw new Error("Missing Keycloak public key");

    const publicKey = `-----BEGIN PUBLIC KEY-----\n${rawKey
      .replace(/\\n/g, "\n")
      .trim()}\n-----END PUBLIC KEY-----`;

    const decoded = jwt.verify(token, publicKey, { algorithms: ["RS256"] });

    return decoded as TPayload;
  }

  static decodeJwtBrowser(token: string): Partial<TPayload> | null {
    try {
      const b64 = token.split(".")[1];
      if (!b64) return null;
      const json = atob(b64.replace(/-/g, "+").replace(/_/g, "/"));
      return JSON.parse(json);
    } catch {
      return null;
    }
  }

  static decodeJwtServer(token: string): Partial<TPayload> | null {
    try {
      const b64 = token.split(".")[1];
      if (!b64) return null;

      const json = Buffer.from(
        b64.replace(/-/g, "+").replace(/_/g, "/"),
        "base64",
      ).toString("utf8");

      return JSON.parse(json);
    } catch {
      return null;
    }
  }
}
