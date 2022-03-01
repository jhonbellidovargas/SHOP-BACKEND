require('dotenv').config();
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || 'sa',
  dbPassword: process.env.DB_PASSWORD || '123456',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || 5432,
  dbName: process.env.DB_NAME || 'my_store',
};

module.exports = {config};
