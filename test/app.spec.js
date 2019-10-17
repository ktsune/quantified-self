var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');
var Food = require("../models").Food


describe('api', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create --env test')
  });
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate --env test')
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

  describe('Test food by id Path', () => {
    test("should return a 200", () => {
      return request(app).get('/api/v1/foods/123')
      .then(response => {
        expect(response.statusCode).toBe(404)
      })
    });
  });

  describe("PATCH /foods/1", () => {
    test("should return a 201", () => {
      return request(app).put('/api/v1/foods/1')
      .then(response => {
        name: response.body.name
        expect(response.statusCode).toBe(201)
      })
    });
  });
  describe("PATCH /foods/1000", () => {
    test("should return a 201", () => {
      return request(app).put('/api/v1/foods/1000')
      .then(response => {
        name: response.body.name
        expect(response.statusCode).toBe(400)
      })
    });
  });
  describe('Delete  food by id ', () => {
    test("should return a 200", () => {
      return request(app).delete('/api/v1/foods/1')
      .then(response => {
        expect(response.statusCode).toBe(204)
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

  describe('Test user can create a new food', () => {
    test("should return a 404", () => {
       Food.create({
        name: "",
        calories: ""
      })
      .then(food => {
        return request(app).post('/api/v1/foods')
      })
      .then(response => {
        expect(response.statusCode).toBe(404)
      })
    });
  });

  describe('Test meals Path', () => {
    test("should return a 200", () => {
      return request(app).get('/api/v1/meals')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
    });
  });


  describe('Test meals Path', () => {
    test("should return a 200", () => {
      return request(app).get('/api/v1/meals/1/foods')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
    });
  });

  describe('Test meals Path', () => {
    test("should return a 200", () => {
      return request(app).post('/api/v1/meals/1/foods/2')
      .then(response => {
        expect(response.statusCode).toBe(201)
      })
    });
  });

  describe('Test delete food from meals Path', () => {
    test("should return a 204", () => {
      return request(app).delete('/api/v1/meals/1/foods/1')
      .then(response => {
        expect(response.statusCode).toBe(204)
      })
    });
  });

});
