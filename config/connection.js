const Sequelize = require('sequelize');
require('dotenv').config();

// Enable access to .env variables
require('dotenv').config();

// Use environment variables to connect to database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;