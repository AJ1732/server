const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  dbURI: process.env.MONGO_URI,
};