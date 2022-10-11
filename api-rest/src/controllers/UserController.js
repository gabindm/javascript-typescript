import User from "../models/User";

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      // return res.json(novoUser); //mostra todos os dados do user

      const { id, nome, email } = novoUser;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.sendStatus(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      // const users = await User.findAll(); //exibe todas as infos do usuário

      const users = await User.findAll({
        attributes: ["id", "nome", "email"],
      });
      // console.log("USER ID:", req.userId);
      // console.log("USER EMAIL:", req.userEmail);

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async deleteAdmin(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      await user.destroy();

      return res.json("Usuário deletado com sucesso.");
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async updateAdmin(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      const updatedUser = await user.update(req.body);

      const { id, nome, email } = updatedUser;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      await user.destroy();
      return res.json("Usuário deletado com sucesso.");
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController(); //exporta a classe instanciada
