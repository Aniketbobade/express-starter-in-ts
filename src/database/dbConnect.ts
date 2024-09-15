import config from '../configs/index';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';

const client = new pg.Client({
  host: config.POSTGRESQL_HOST,
  port: Number(config.POSTGRESQL_PORT),  // Ensure the port is a number
  user: config.POSTGRESQL_USER,
  password: config.POSTGRESQL_PASSWORD,
  database: config.POSTGRESQL_DB_NAME,
});

client.connect().then(() => console.log('Connected to the database')).catch((error) => console.error('Error connecting to the database:', error));


const db = drizzle(client);  // Initialize drizzle after the connection

export default db;