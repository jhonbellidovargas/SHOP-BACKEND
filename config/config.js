require('dotenv').config();
const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || 'sa',
  dbPassword: process.env.DB_PASSWORD || '123456',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || 5432,
  dbName: process.env.DB_NAME || 'my_store',
  dbUrl: process.env.DATABASE_URL || 'postgres://sa:123456@localhost:5432/my_store',
};

module.exports = {config};
