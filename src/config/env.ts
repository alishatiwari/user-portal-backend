import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Postgres DB configurations
 */
export const dbConfig = {
  host: process.env.PG_HOST,
  port: +process.env.PG_PORT,
  user: process.env.PG_USER,
  pass: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
};

/**
 * Server App configurations
 */
export const appConfig = {
  port: +process.env.SERVER_PORT,
};

/**
 * Jwt token configurations
 */
export const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiry: process.env.JWT_EXPIRY,
};
