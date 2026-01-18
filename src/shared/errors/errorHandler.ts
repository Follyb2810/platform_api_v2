import { Request, Response, NextFunction } from "express";
import { BaseError } from "./BaseError";
import { ZodError } from "zod";

export const errorHandler = (
  err: unknown,
  res: Response,
  _next?: NextFunction
) => {
  console.error(`[Error]`, err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      status: "Validation Error",
      message: "Invalid request data",
      errors: err.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      status: err.status,
      message: err.message,
    });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      success: false,
      status: "Server Error",
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    status: "Server Error",
    message: typeof err === "string" ? err : "Something went wrong.",
  });
};
