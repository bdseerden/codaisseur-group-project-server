"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cities",
      [
        {
          name: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barcelona",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paris",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
