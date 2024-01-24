import dotenv from 'dotenv';
dotenv.config();

export const appPort = process.env.APP_PORT;
export const apiUrl = process.env.API_URL;

export const corsOrigin = process.env.CORS_ORIGIN;