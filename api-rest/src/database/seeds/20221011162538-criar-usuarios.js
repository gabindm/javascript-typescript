const bcryptjs = require("bcryptjs");
const faker = require("faker");

module.exports = {
  up: async (queryInterface) => {
    let dummyJSON = [];
    for (let i = 0; i < 10; i++) {
      dummyJSON.push({
        nome: faker.name.firstName(),
        sobrenome: faker.name.lastName(),
        email: faker.internet.email(),
        password_hash: await bcryptjs.hash(faker.internet.password(), 8),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    await queryInterface.bulkInsert("users", dummyJSON, {});
  },

  down: async () => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
