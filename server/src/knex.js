const config = require("../knexfile");
const knex = require("knex");

const environment = process.env.DATABASE_URL ? "production" : "development";
console.log(environment);
module.exports = knex(config[environment]);
