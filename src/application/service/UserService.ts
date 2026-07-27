import { UploadUserAvatarUseCase } from "../usecases/user/UploadUserAvatarUseCase";

export class UserService {
  constructor(private uploadUserAvatarUseCase: UploadUserAvatarUseCase) {}

  async updateUserAvatar(userId: string, filePath: string) {
    const result = await this.uploadUserAvatarUseCase.execute(userId, filePath);
    return result;
  }
}
