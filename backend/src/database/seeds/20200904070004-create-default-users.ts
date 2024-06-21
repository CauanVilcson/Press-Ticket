import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          email: "admin@ame.com",
          passwordHash: "$2a$08$9lgLrTJD8e9QWj4h9Oey6e5JoJ8.bESCG8y7XCMAwzXlhFv94ukOG",
          profile: "admin",
          tokenVersion: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Users", {});
  }
};
