import User from "../models/User";
import jwt from "jsonwebtoken";

class TokenController {
  async create(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ["Credenciais inválidas"],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ["Usuário não existe"],
      });
    }

    if (!(await user.passwordValidation(password))) {
      return res.status(401).json({
        errors: ["Senha inválida"],
      });
    }

    const { id } = user;

    if (id === 10) {
      //usuário admin
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET_ADMIN, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token, user: { nome: user.nome, id, email } });
    } else {
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token, user: { nome: user.nome, id, email } });
    }
  }
}

export default new TokenController(); //exporta a classe instanciada
