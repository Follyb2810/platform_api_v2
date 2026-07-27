import { FileStorageGateway } from "../../../core/interface/gateway/FileStorageGateway";

export class UploadUserAvatarUseCase {
  constructor(private fileStorage: FileStorageGateway) {}

  async execute(userId: string, filePath: string) {
    // Upload to Cloudinary
    const result = await this.fileStorage.uploadFile(
      filePath,
      `users/${userId}`,
    );

    // Here you could also update the User entity in DB
    // e.g., userRepository.updateAvatar(userId, result.url);

    return result;
  }
}
