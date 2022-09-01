import 'dotenv/config';
import { Dialect, Options } from 'sequelize';

const dbConfig: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'softeo_database',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: (process.env.DB_DIALECT as Dialect) || 'mysql',
  logging: false,
};

module.exports = dbConfig;
