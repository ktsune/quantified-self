var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var Food = require("../../../models").Food


/* GET all foods */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Food.findAll()
    .then(food => {
      console.log("FOOD", food)
      res.status(200).send(JSON.stringify(food));
    })
    .catch(error => {
      res.status(500).send({error})
    });
})
 module.exports = router;
