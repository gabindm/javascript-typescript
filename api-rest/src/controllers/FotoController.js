import multer from "multer";
import multerConfig from "../config/multerConfig";
import Foto from "../models/Foto";
import Aluno from "../models/Aluno";

const upload = multer(multerConfig).single("photo"); //single = 1 único arquivo

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        if (!aluno_id) {
          return res.sendStatus(400).json({
            errors: ["ID de aluno inexistente."],
          });
        }

        const aluno = await Aluno.findByPk(aluno_id);

        if (!aluno) {
          return res.status(400).json({
            errors: ["Aluno não existe."],
          });
        }

        const foto = await Foto.create({
          originalName: originalname,
          fileName: filename,
          aluno_id,
        });

        return res.json(foto);
      } catch (e) {
        return res.sendStatus(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    });
  }
}

export default new FotoController(); //exporta a classe instanciada
