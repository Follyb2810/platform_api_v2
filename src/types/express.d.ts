// src/types/express.d.ts
import "express";
import { App } from "../../core/enums";

declare module "express-serve-static-core" {
  interface Request {
    userId?: string;
    roles?: string[];
    userApp?: App; // now req.app is your enum
  }
}
