import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              notEmpty: {
                msg: "Nome deve conter de 3 a 255 caracteres.",
              },
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              notEmpty: {
                msg: "Sobrenome deve conter de 3 a 255 caracteres.",
              },
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email já existe.",
          },
          validate: {
            isEmail: {
              msg: "Email inválido.",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              notEmpty: {
                msg: "Senha deve conter de 3 a 255 caracteres.",
              },
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8); //salt=8
      }
    });

    return this;
  }

  passwordValidation(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
