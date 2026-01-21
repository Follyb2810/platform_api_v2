import { IUserRepository } from "../../../auth/interface/IUserRepository";
import { App, UserType, RoleName } from "../../../core/enums";
import { ITokenService } from "../../../core/interface/ITokenService";
import { hashPwd } from "../../../shared/utils/bcrypt";

interface CreateUserDTO {
  name?: string;
  email: string;
  password?: string;
  app: App;
  type: UserType;
}

export class CreateUserUsecase {
  constructor(
    private userRepo: IUserRepository,
    private tokenService: ITokenService,
  ) {}

  async execute(data: CreateUserDTO) {
    let user = await this.userRepo.getUserByEmail(data.email);

    if (!user) {
      if (data.password) {
        data.password = await hashPwd(data.password);
      }
      user = await this.userRepo.createUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });
    }

    const existingProfile = user.userAppProfiles.find(
      (p) => p.app === data.app,
    );
    if (existingProfile) {
      throw new Error(`User already registered for ${data.app}`);
    }
    await this.userRepo.assignRole(user.id, RoleName.USER, data.app);
    await this.userRepo.createUserAppProfile(user.id, data.app, data.type);
    const token = this.tokenService.generateToken(user.id, data.app);
    return { user, token };
  }

  async getUserByEmail(email: string) {
    return this.userRepo.getUserByEmail(email);
  }
}
