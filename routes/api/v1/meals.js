var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
const Meal = require('../../../models').Meal;
const Food = require('../../../models').Food;
const MealFood = require('../../../models').MealFood;

router.get("/", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  Meal.findAll({
    include: [{
      model: Food,
      as: 'foods'
    }]
  })
  .then(meals => {
    res.status(200).send(JSON.stringify(meals));
  })
  .catch(error => {
    res.status(404).send({error})
  });
});

router.get("/:meal_id/foods", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  Meal.findOne({
    where: {id: req.params.meal_id},
    include: [{
      model: Food,
      as: 'foods'
    }],
  })
  .then(meals => {
    res.status(200).send(JSON.stringify(meals));
  })
  .catch(error => {
    res.status(404).send({error})
  });
});


router.post('/:meal_id/foods/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Food.findOne({ where: {id: req.params.id}});
   MealFood.create({
      meal_id: req.params.meal_id,
      food_id: req.params.id
    })

  .then(mealFood => {
    res.status(201).send(JSON.stringify(mealFood));
    })

  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({error})
    });
});


  router.delete("/:meal_id/foods/:id", function(req, res, next) {
    MealFood.destroy({
      where: {food_id: req.params.id} && {meal_id: req.params.meal_id}
    })    .then(meal => {
      res.setHeader("Content-Type", "application/json");
      res.status(204).send(JSON.stringify(meal));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send({error})
    });
  });

  module.exports = router; //this should stay at the bottom of the file
