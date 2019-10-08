var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');
var Food = require("../../../models").Food


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
  describe('Patch food by id ', () => {
   test("should return a 200", () => {
     return request(app).patch('/api/v1/foods/1')
     .then(response => {
       expect(response.statusCode).toBe(200)
     })
   });
 });
  describe('Delete  food by id ', () => {
   test("should return a 200", () => {
     return request(app).delete('/api/v1/foods/1')
     .then(response => {
       expect(response.statusCode).toBe(202)
     })
   });
 });
});
