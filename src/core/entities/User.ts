import { App, UserType } from "../enums";

export class User {
  id: string;
  name?: string;
  email: string;
  password?: string;
  roles: UserRole[] = [];
  userAppProfiles: UserAppProfile[] = [];

  constructor(params: {
    id: string;
    name?: string;
    email: string;
    password?: string;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.password = params.password;
  }
}

export class UserRole {
  userId: string;
  roleName: string;
  app: App;

  constructor(params: { userId: string; roleName: string; app: App }) {
    this.userId = params.userId;
    this.roleName = params.roleName;
    this.app = params.app;
  }
}

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
