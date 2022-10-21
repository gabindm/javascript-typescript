import multer from "multer";
import multerConfig from "../config/multerConfig";
import Foto from "../models/Foto";

const upload = multer(multerConfig).single("photo"); //single = 1 único arquivo

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const foto = await Foto.create({
        originalName: originalname,
        fileName: filename,
      });

      return res.json(foto);
    });
  }
}

export default new FotoController(); //exporta a classe instanciada
