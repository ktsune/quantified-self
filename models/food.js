'use strict';
module.exports = (sequelize, DataTypes) => {

  const Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
    Food.belongsToMany(models.Meal, {
    through: 'MealFoods',
    as: 'meals',
    foreignKey: 'foodId',
    otherKey: 'mealId'
    });
  };
  return Food;
};
