// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var burger = sequelize.define("burger", {
    burger_name: {
        type: Sequelize.STRING
    },
    devoured: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
});

// Syncs with DB
burger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = burger;
