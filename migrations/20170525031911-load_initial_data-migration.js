'use strict';
var Promsie = require('bluebird'),
  fs = require('fs');

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
        return queryInterface.bulkInsert('burgers', [
          {id:1, burger_name: "Cheese Burger", devoured:false },
          {id:2, burger_name: "Hamburger", devoured:false },
          {id:3, burger_name: "Pizza Burger", devoured:false }
        ]);
      })
      .then(function() {
        return queryInterface.bulkInsert('customers', [
          {id:1, customer_name: "Joey" },
          {id:2, customer_name: "Jack"},
          {id:3, customer_name: "Liang"},
          {id:4, customer_name: "May"}
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
        return queryInterface.bulkDelete('burgers');
      })
      .then(function() {
        return queryInterface.bulkDelete('customers');
      })
      .then(function() {
        return queryInterface.bulkDelete('dining_records')
      })
  }
};
