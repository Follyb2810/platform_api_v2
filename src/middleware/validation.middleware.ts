import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";
import { BaseError } from "../shared/errors/BaseError";

export enum ValidateSource {
  BODY = "body",
  QUERY = "query",
  PARAMS = "params",
  HEADERS = "headers",
}

export function ValidateMiddleware(
  schema: ZodTypeAny,
  source: ValidateSource = ValidateSource.BODY,
) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      console.log(req[source]);
      const result = await schema.safeParseAsync(req[source]);

      if (!result.success) {
        const details = result.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        }));

        return next(
          new BaseError(
            "Invalid request data",
            "Validation Error",
            400,
            details,
          ),
        );
      }
      next();
    } catch (err) {
      return next(err);
    }
  };
}
