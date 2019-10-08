'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Foods', [{
          name: 'apple',
          calories: '100',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'burger',
          calories: '500',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'cake',
          calories: '1000',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        ], {});
      },


    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Foods', null, {});

  }
};
