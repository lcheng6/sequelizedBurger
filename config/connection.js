//Dependencies for sequ
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("heroku_5ff29c8e5692fa7", "b65c25ec0b0877", "b75a59fb", {
    host: "us-cdbr-iron-east-03.cleardb.net",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


module.exports = sequelize;
