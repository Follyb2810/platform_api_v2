import { UserRole } from "./UserRole";
import { UserAppProfile } from "./UserAppProfile";

export class User {
  id: string;
  name?: string;
  email: string;
  // password?: string;
  roles: UserRole[];
  userAppProfiles: UserAppProfile[];

  constructor(params: {
    id: string;
    name?: string;
    email: string;
    // password?: string;
    roles?: UserRole[];
    userAppProfiles?: UserAppProfile[];
  }) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    // this.password = params.password;
    this.roles = params.roles || [];
    this.userAppProfiles = params.userAppProfiles || [];
  }
}
