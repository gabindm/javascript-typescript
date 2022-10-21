module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("fotos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalName: {
        field: "original_name",
        type: Sequelize.STRING,
        allowNull: false,
      },
      fileName: {
        field: "file_name",
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.STRING,
        allowNull: true,
        refereces: {
          model: "alunos",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable("fotos");
  },
};