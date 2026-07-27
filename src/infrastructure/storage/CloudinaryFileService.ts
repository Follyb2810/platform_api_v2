import { v2 as cloudinary } from "cloudinary";
import {
  FileStorageGateway,
  FileStorageResult,
} from "../../core/interface/gateway/FileStorageGateway";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export class CloudinaryFileService implements FileStorageGateway {
  async uploadFile(
    filePath: string,
    folder?: string,
  ): Promise<FileStorageResult> {
    const result = await cloudinary.uploader.upload(filePath, { folder });
    return { url: result.secure_url, publicId: result.public_id };
  }

  async deleteFile(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId);
  }
}
