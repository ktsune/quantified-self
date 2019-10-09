var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var Meal = require("../../../models").Meal
var Food = require("../../../models").Food

/* GET all meals */
router.get("/", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
    Meal.findAll({
      where: {
        attributes: [id, name],
        include: 'foods'
      }
    })
  .then(meals => {
    console.log('MEALS', meals)
    res.status(200).send(JSON.stringify(meals));
  })
  .catch(error => {
    res.status(404).send({error})
  });
});

module.exports = router;
