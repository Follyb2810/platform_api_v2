import { Request } from "express";
import multer from "multer";
import path from "path";

// Store files in memory (for small files) or disk
const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) =>
    cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only image files allowed"));
  },
});
