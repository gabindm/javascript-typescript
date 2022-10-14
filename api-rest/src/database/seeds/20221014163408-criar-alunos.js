const faker = require("faker");

module.exports = {
  up: async (queryInterface) => {
    let dummyJSON = [];
    for (let i = 0; i < 10; i++) {
      dummyJSON.push({
        nome: faker.name.firstName(),
        sobrenome: faker.name.lastName(),
        email: faker.internet.email(),
        idade: Math.floor(Math.random() * (18 - 13) + 13),
        peso: Math.random() * (80 - 40) + 40,
        altura: Math.random() * (1.9 - 1.4) + 1.4,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    await queryInterface.bulkInsert("alunos", dummyJSON, {});
  },

  down: async () => {
    await queryInterface.bulkDelete("alunos", null, {});
  },
};
