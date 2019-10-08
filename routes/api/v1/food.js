var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");


/* GET all foods */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
})
 module.exports = router;
