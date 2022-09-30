import multer from 'multer';

export class MulterMiddleware {
  config() {
    const multerConfig = multer();
    return multerConfig.single("file");
  }
}