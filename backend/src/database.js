import mariadb from 'mariadb';

import config from './config';

const pool = mariadb.createPool({
  host: config.DB_HOST,
  port: config.DB_PORT,
  user: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_BASE,
});

async function getConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('DB is Connected!!!');
    return connection;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default { getConnection };
