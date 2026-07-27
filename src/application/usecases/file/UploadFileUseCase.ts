import { FileStorageGateway } from "../../../core/interface/gateway/FileStorageGateway";

export class UploadFileUseCase {
  constructor(private fileStorage: FileStorageGateway) {}

  async execute(filePath: string, folder?: string) {
    const result = await this.fileStorage.uploadFile(filePath, folder);
    return result;
  }
}
