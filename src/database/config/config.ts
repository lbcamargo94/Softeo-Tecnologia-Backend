import 'dotenv/config';

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'softeo_database',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
