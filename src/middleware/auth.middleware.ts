import { Response, NextFunction, Request, Handler } from "express";
import { JwtService } from "../shared/utils/jwt";

const authMiddleware: Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      res.status(401).json({
        success: false,
        message: "No token provided",
      });
      return;
    }

    const decoded = JwtService.verifyToken(token);

    if (!decoded) {
      res.status(401).json({
        success: false,
        message: "Invalid token",
      });
      return;
    }

    req.userId = decoded.userId;
    req.roles = decoded.roles;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
};

export default authMiddleware;
