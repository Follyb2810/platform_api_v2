export class BaseError extends Error {
  public status: string;
  public statusCode: number;
  public details?: unknown;

  constructor(
    message = "Unknown error",
    status = "Server Error",
    statusCode = 500,
    details?: unknown
  ) {
    super(message);
    this.status = status;
    this.statusCode = statusCode;
    this.details = details;

    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
