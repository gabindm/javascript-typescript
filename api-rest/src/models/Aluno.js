import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class Aluno extends Model {
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
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Idade precisa ser um número inteiro.",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Peso deve ser um número inteiro ou decimal.",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Altura deve ser um número inteiro ou decimal.",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
