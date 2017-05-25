// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var burger = sequelize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  devoured:{
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});
burger.name = "burger";

// Syncs with DB
burger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = burger;
