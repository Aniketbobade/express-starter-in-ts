export interface Config {
  NODE_ENV: string;
  PORT: number | string;
  POSTGRESQL_HOST: string;
  POSTGRESQL_PORT: number;
  POSTGRESQL_USER: string;
  POSTGRESQL_PASSWORD: string;
  POSTGRESQL_DB_NAME: string;
  JWT_SECRETS: string;
  JWT_ADMIN_EXPIRES: string;
  FRONTEND_BASE_URL?: string; // Optional since it may not always be set
  JWT_COMMUNICATION_SECRETS?: string; // Optional for the same reason
}
