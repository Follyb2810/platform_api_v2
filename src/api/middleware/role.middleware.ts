import { NextFunction, Request, RequestHandler, Response } from "express";

export const verifyRole = (...allowRoles: string[]): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const userRoles: string[] | undefined = req.roles;

    if (!userRoles || !Array.isArray(userRoles)) {
      res.status(403).json({
        message: "Access denied: No roles found or invalid roles format.",
      });
      return;
    }

    const hasPermission = userRoles.some((role) => allowRoles.includes(role));

    if (!hasPermission) {
      res.status(403).json({
        message: "Access denied: Insufficient privileges.",
      });
      return;
    }

    next();
  };
};
