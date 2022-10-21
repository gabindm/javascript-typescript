import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalName: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo não pode ser vazio.",
            },
          },
        },
        fileName: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo não pode ser vazio.",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "fotos",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
}
