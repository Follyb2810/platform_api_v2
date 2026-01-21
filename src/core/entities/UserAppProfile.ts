import { App, UserType } from "../enums";

export class UserAppProfile {
  userId: string;
  app: App;
  type: UserType;

  constructor(params: { userId: string; app: App; type: UserType }) {
    this.userId = params.userId;
    this.app = params.app;
    this.type = params.type;
  }
}
