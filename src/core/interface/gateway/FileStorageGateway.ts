export interface FileStorageResult {
  url: string;
  publicId: string;
}

export interface FileStorageGateway {
  uploadFile(filePath: string, folder?: string): Promise<FileStorageResult>;
  deleteFile(publicId: string): Promise<void>;
}
