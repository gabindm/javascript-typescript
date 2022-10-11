import Aluno from "../models/Aluno";

class HomeController {
  async create(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      res.json(novoAluno);
    } catch (e) {
      res.sendStatus(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new HomeController(); //exporta a classe instanciada
