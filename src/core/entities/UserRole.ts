import { App, RoleName } from "../enums";

export class UserRole {
  userId: string;
  roleName: RoleName;
  app: App;

  constructor(params: { userId: string; roleName: RoleName; app: App }) {
    this.userId = params.userId;
    this.roleName = params.roleName;
    this.app = params.app;
  }
}
