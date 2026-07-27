import { Request, Response } from "express";
import { UploadFileUseCase } from "../../application/usecases/file/UploadFileUseCase";

export class FileController {
  constructor(private uploadFileUseCase: UploadFileUseCase) {}

  async upload(req: Request, res: Response) {
    try {
      const file = req.file;
      if (!file) return res.status(400).json({ error: "File is required" });

      const result = await this.uploadFileUseCase.execute(
        file.path,
        "user-uploads",
      );

      return res.status(200).json(result);
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
