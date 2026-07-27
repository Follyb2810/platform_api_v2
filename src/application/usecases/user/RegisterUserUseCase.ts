import { PasswordHasher } from "../../../core/services/PasswordHasher";

export class RegisterUserUseCase {
  constructor(
    private passwordHasher: PasswordHasher,
    // private userRepository: UserRepository,
  ) {}

  async execute(email: string, password: string) {
    const hashed = await this.passwordHasher.hash(password);
    // await this.userRepository.create({ email, password: hashed });
  }
}
