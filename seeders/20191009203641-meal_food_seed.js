'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MealFood', [{
      food_id: 1,
      meal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      food_id: 2,
      meal_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      food_id: 3,
      meal_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MealFood', null, {});

  }
};
