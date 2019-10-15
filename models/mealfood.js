'use strict';
module.exports = (sequelize, DataTypes) => {
  const MealFood = sequelize.define('MealFood', {
    food_id: DataTypes.INTEGER,
    meal_id: DataTypes.INTEGER
  }, {});
  MealFood.associate = function(models) {
    // associations can be defined here
  };
  return MealFood;
};