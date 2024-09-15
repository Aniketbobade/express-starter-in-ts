import { Config } from "../interfaces/config";

/* eslint-disable no-undef */
require('dotenv').config();

export default {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    POSTGRESQL_HOST: process.env.POSTGRESQL_HOST || 'localhost',
    POSTGRESQL_PORT: process.env.POSTGRESQL_PORT || 5432,
    POSTGRESQL_USER: process.env.POSTGRESQL_USER || 'root',
    POSTGRESQL_PASSWORD: process.env.POSTGRESQL_PASSWORD || 'admin',
    POSTGRESQL_DB_NAME: process.env.POSTGRESQL_DB_NAME || 'db',
    JWT_SECRETS: process.env.JWT_SECRETS || 'topsecret',
    JWT_ADMIN_EXPIRES: process.env.JWT_ADMIN_EXPIRES || '1d',
    FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL,
    JWT_COMMUNICATION_SECRETS: process.env.JWT_COMMUNICATION_SECRETS,
} as Config;
