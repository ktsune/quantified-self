var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');
var Food = require("../models").Food
var meal = require("../models").Meal

describe('api', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create --env test')
  });
  beforeEach(() => {
      shell.exec('npx sequelize db:migrate --env test')
      shell.exec('npx sequelize db:seed:all --env test')
      shell.exec('npx sequelize db:seed:all --env test')
    });
  afterEach(() => {
    shell.exec('npx sequelize db:migrate:undo:all --env test')
  });
});

  describe('Test the root path', () => {
    test('should return a 200', () => {
      return request(app).get("/").then(response => {
        expect(response.statusCode).toBe(200)
      })
    });
  });

  describe('Test foods Path', () => {
   test("should return a 200", () => {
     return request(app).get('/api/v1/foods')
     .then(response => {
       expect(response.statusCode).toBe(200)
     })
   });
 });

  describe('Test food by id Path', () => {
   test("should return a 200", () => {
     return request(app).get('/api/v1/foods/1')
     .then(response => {
       expect(response.statusCode).toBe(200)
     })
   });
 });

  describe('Test user can create a new food', () => {
   test("should return a 201", () => {
     return Food.create({
       name: "Cheese",
       calories: 400
     })
     .then(food => {
       return request(app).post('/api/v1/foods')
     })
     .then(response => {
       expect(response.statusCode).toBe(201)
     })
   });
 });

 describe('Test user can get a list of meals path', () => {
  test("should return a 200", async () => {
    // var food = foods.create(['oranges', 'apples'])
    foodItems = [
      await Food.create({name: 'oranges'})
    ]
    return meal.create({
      name: 'breakfast'
    })
    .then(meal => {
      console.log('MEAL', meal)
      meal.addFood(foodItems)
    })
      return request(app).get('/api/v1/meals')
    })
    .then(response => {
      expect(response.statusCode).toBe(200)
    })
  });
// });
