const Pool = require('pg').Pool;
require('dotenv').config({path: '../.env'});


const pool = new Pool({
  user: "postgres",
  password: process.env.password,
  host: "localhost",
  port: 8000,
  database: "carlos"
});

module.exports = pool;

// const email = 'aATT@gmail.com';
// console.log('lower', email.toLowerCase());