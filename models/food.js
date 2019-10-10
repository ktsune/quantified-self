'use strict';
module.exports = (sequelize, DataTypes) => {

  const Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
    Food.belongsToMany(models.Meal, {
    through: 'MealFood',
    as: 'meals',
    foreignKey: 'food_id',
    otherKey: 'meal_id'
    });
  };
  return Food;
};
