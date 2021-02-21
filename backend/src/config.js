import dotenv from 'dotenv';

dotenv.config();

export default {
  APP_PORT: process.env.APP_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_BASE: process.env.DB_BASE,
};
