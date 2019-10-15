module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('MealFoods', [{
      meal_id: 1,
      food_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      meal_id: 2,
      food_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      meal_id: 3,
      food_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
},
down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('MealFoods', null, {});
}
};
