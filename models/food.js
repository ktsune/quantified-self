'use strict';
module.exports = (sequelize, DataTypes) => {

  const Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER
  }, {});

  return Food;
};
