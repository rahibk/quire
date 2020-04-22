const PgConnection = require('pg').Pool;
const dbConfig = require('./config/db');
const pg = new PgConnection(dbConfig);

module.exports = pg;