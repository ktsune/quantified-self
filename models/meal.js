'use strict';

module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: DataTypes.STRING
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
    Meal.belongsToMany(models.Food, {
    through: 'MealFood',
    as: 'foods',
    foreignKey: 'meal_id',
    otherKey: 'food_id'
    });
  };
  return Meal;
};
