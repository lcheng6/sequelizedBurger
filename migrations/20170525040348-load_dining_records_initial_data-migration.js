'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise
      .resolve()
      .then(function() {
        return queryInterface.bulkInsert('dining_records', [
          {id:1,  customer_id:1, burger_id:1, numbers_ordered:3},
          {id:2,  customer_id:1, burger_id:2, numbers_ordered:2},
          {id:3,  customer_id:1, burger_id:3, numbers_ordered:4},
          {id:4,  customer_id:1, burger_id:3, numbers_ordered:4},
          {id:5,  customer_id:1, burger_id:3, numbers_ordered:4},
          {id:6,  customer_id:1, burger_id:3, numbers_ordered:4},
        ]);
      })

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise
      .resolve()
      .then(function() {
        return queryInterface.bulkDelete('dining_records')
      })
  }
};
