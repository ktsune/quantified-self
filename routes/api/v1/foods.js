var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var Food = require("../../../models").Food

/* GET all foods */
router.get("/", function(req, res, next) {
  Food.findAll()
    .then(foods => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(foods));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send({error})
    });
});

/* GET one food */
router.get("/:id", function(req, res, next) {
  Food.findOne({
        where: {id: req.params.id}
      })    .then(food => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(food));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send({error})
    });
});

/* POST food creation */
router.post("/", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
   Food.create({
        name: req.body.name,
        calories: req.body.calories
      })
      .then(food => {
        console.log('FOOD', food)
        res.status(201).send(JSON.stringify(food));
    })
    .catch(error => {
      res.status(400).send({error})
    });
});

module.exports = router; //this should stay at the bottom of the file
