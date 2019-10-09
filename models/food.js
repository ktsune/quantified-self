'use strict';
module.exports = (sequelize, DataTypes) => {

  const Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
    // Food.belongsToMany(Meal, {through: 'MealFood'})
  //     models.Meal, {
  //   through: 'MealFood',
  //   as: 'meal',
  //   foreignKey: 'foodId',
  //   otherKey: 'mealId'
  //   };
  // };
      // associations can be defined here
      Food.belongsToMany(models.Meal, {
      through: 'MealFood',
      as: 'meal',
      foreignKey: 'foodId',
      otherKey: 'mealId'
      });
    };
  return Food;
};
