import Aluno from "../models/Aluno";
import Foto from "../models/Foto";
class AlunoController {
  async index(req, res) {
    try {
      // const alunos = await Aluno.findAll(); //exibe todas as infos do aluno

      const alunos = await Aluno.findAll({
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [
          ["id", "DESC"],
          [Foto, "id", "DESC"],
        ],
        include: {
          model: Foto,
          attributes: ["fileName", "url"],
        },
      });

      return res.json(alunos);
    } catch (e) {
      return res.sendStatus(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.sendStatus(400).json({
          errors: ["ID inexistente."],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [
          ["id", "DESC"],
          [Foto, "id", "DESC"],
        ],
        include: {
          model: Foto,
          attributes: ["fileName", "url"],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe."],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.sendStatus(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);

      res.json(novoAluno);
    } catch (e) {
      return res.sendStatus(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.sendStatus(400).json({
          errors: ["ID inexistente."],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe."],
        });
      }

      const updateAluno = await aluno.update(req.body);

      //const { nome, email } = updateAluno;

      return res.json(updateAluno);
    } catch (e) {
      return res.sendStatus(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.sendStatus(400).json({
          errors: ["ID inexistente."],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe."],
        });
      }

      await aluno.destroy();

      return res.json("Aluno deletado com sucesso.");
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController(); //exporta a classe instanciada
