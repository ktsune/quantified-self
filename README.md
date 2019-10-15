# quantified_self

This project builds out food & meal endpoints to display json responses of said data.

## Visit our app on Heroku

https://dashboard.heroku.com/apps/the-quantified-self

## Objective

This paired project was completed in 7 days as a requirement for Module 4 at Turing School of Software and Design.

The project was built using Node & Express. It implements the following:

- Hits 9 endpoints for meals & foods
- Builds out a foods, meals, and mealfoods table
- Creates an Express API given specified endpoints and response formats.

## Endpoints

Request
```
GET /api/v1/foods
```

Response
```
{
    "id": 1,
    "name": "Banana",
    "calories": 150
},
```

Request
```
GET /api/v1/foods/:id
```

Response

Returns the food object with the specific :id you’ve passed in or 404 if the food is not found

Request
```
POST /api/v1/foods
```

Response
```
{ "food": { "name": "Name of food here", "calories": "Calories here"} }
```

Request
```
PATCH /api/v1/foods/:id
```

Response
```
{ "food": { "name": "Mint", "calories": "14"} }
```

Request
```
DELETE /api/v1/foods/:id
```

Response
```
status: 204
```

Request
```
GET /api/v1/meals
```

Response
```
[
    {
        "id": 1,
        "name": "Breakfast",
        "foods": [
            {
                "id": 1,
                "name": "Banana",
                "calories": 150
            },
            {
                "id": 6,
                "name": "Yogurt",
                "calories": 550
            },
            {
                "id": 12,
                "name": "Apple",
                "calories": 220
            }
        ]
    },
    {
        "id": 2,
        "name": "Snack",
        "foods": [
            {
                "id": 1,
                "name": "Banana",
                "calories": 150
            },
            {
                "id": 9,
                "name": "Gum",
                "calories": 50
            },
            {
                "id": 10,
                "name": "Cheese",
                "calories": 400
            }
        ]
    },
    {
        "id": 3,
        "name": "Lunch",
        "foods": [
            {
                "id": 2,
                "name": "Bagel Bites - Four Cheese",
                "calories": 650
            },
            {
                "id": 3,
                "name": "Chicken Burrito",
                "calories": 800
            },
            {
                "id": 12,
                "name": "Apple",
                "calories": 220
            }
        ]
    },
    {
        "id": 4,
        "name": "Dinner",
        "foods": [
            {
                "id": 1,
                "name": "Banana",
                "calories": 150
            },
            {
                "id": 2,
                "name": "Bagel Bites - Four Cheese",
                "calories": 650
            },
            {
                "id": 3,
                "name": "Chicken Burrito",
                "calories": 800
            }
        ]
    }
]
```

Request
```
GET /api/v1/meals/:meal_id/foods
```

Response
```
{
    "id": 1,
    "name": "Breakfast",
    "foods": [
        {
            "id": 1,
            "name": "Banana",
            "calories": 150
        },
        {
            "id": 6,
            "name": "Yogurt",
            "calories": 550
        },
        {
            "id": 12,
            "name": "Apple",
            "calories": 220
        }
    ]
}
```

Request
```
POST /api/v1/meals/:meal_id/foods/:id
```

Response
```
{
    "message": "Successfully added FOODNAME to MEALNAME"
}
```

Request
```
DELETE /api/v1/meals/:meal_id/foods/:id
```

Response
```
status: 204
```

## GitHub Repository

https://github.com/ktsune/quantified-self

## Instructions

Clone down the repo
```
$ git clone
```

Set up the database
```
$ npx sequelize db:create
$ npx sequelize db:migrate
```

### Schema Design
<a href="https://cl.ly/f5cfe9547830" target="_blank"><img src="https://dzwonsemrish7.cloudfront.net/items/0n151M1C0t3E3p2P3i0h/Screen%20Shot%202019-10-15%20at%204.05.20%20PM.png" style="display: block;height: auto;width: 100%;"/></a>

## Contributors

- [Sarah Tatro](https://github.com/ktsune)
- [Will Thompson](https://github.com/wthompson92)

### Technologies
* Sequelize
* Node
* Express
* Postgres

### Versions
* Node ~ 11
* Express ~ 6.0
