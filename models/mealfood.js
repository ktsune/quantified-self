'use strict';

module.exports = (sequelize, DataTypes) => {
  const MealFood = sequelize.define('MealFood', {
    mealId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER
  }, {});
  MealFood.associate = function(models) {

  // const MealFood = sequelize.define('MealFood', {
    // associations can be defined here
//   MealFood.belongsTo(models.Food), {
//     foodId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Food',
//         key: 'id'
//       }
//     }
//   },
//   MealFood.belongsTo(models.Meal), {
//
//     mealId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Meal',
//         key: 'id'
//       }
//     }
//   }
}
  return MealFood;
};
