import { defineConfig } from "drizzle-kit"
import config from './configs/index';
export default defineConfig({
    dialect: "postgresql", // "postgresql" | "mysql"
    schema:'./src/database/schema.ts',
    dbCredentials: {
      host: config.POSTGRESQL_HOST,
      port: config.POSTGRESQL_PORT,
      user: config.POSTGRESQL_USER,
      password: config.POSTGRESQL_PASSWORD,
      database: config.POSTGRESQL_DB_NAME,
    },
})