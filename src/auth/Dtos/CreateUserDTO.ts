import { App, UserType } from "../../core/enums";

// export interface CreateUserDTO {
//   name?: string;
//   email: string;
//   password?: string;
//   app: App;
//   type: UserType;
// }

export interface CreateUserDTO {
  name?: string;
  email: string;
  password?: string;
}

export interface RegisterUserToAppDTO {
  userId: string;
  app: App;
  type: UserType;
}
