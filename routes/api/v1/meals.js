var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
const Meal = require('../../../models').Meal;
const Food = require('../../../models').Food;

router.get("/", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
   Meal
       Meal.findAll({
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

router.get("/:id/foods", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
   Meal
       Meal.findOne({
         where: {id: req.params.id},
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





// module.exports = {
//   list(req, res) {
//     return Meal
//       .findAll({
//         include: [{
//           model: Food,
//           as: 'food'
//         }],
//       })
//       .then((meals) => res.status(200).send(meals))
//       .catch((error) => { res.status(400).send(error); });
//   }
// };

module.exports = router; //this should stay at the bottom of the file
