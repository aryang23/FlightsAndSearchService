"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Boeing 123",
          capacity: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 777",
          capacity: 1500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus 123",
          capacity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus 456",
          capacity: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
