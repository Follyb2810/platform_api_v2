import { Response, NextFunction, Request, Handler } from "express";
import { ITokenService } from "../../core/interface/ITokenService";

export const authMiddleware =
  (tokenService: ITokenService): Handler =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      const token = req.header("Authorization")?.replace("Bearer ", "");

      if (!token) {
        res.status(401).json({
          success: false,
          message: "No token provided",
        });
        return;
      }

      const decoded = tokenService.verifyToken(token);

      req.userId = decoded.userId;
      req.roles = decoded.roles;
      req.userApp = decoded.app;
      // (req as any).app = decoded.app;

      next();
    } catch {
      res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }
  };
