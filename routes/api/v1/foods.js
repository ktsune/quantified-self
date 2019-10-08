var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var Food = require("../../../models").Food

/* GET all games */
router.get("/", function(req, res, next) {
  Food.findAll()
    .then(foods => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(foods));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({error})
    });
});

router.get("/:id", function(req, res, next) {
  Food.findOne({
        where: {id: req.params.id}
      })    .then(food => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(food));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({error})
    });
});

module.exports = router; //this should stay at the bottom of the file