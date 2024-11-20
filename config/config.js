import dotenv from 'dotenv';
import process from 'process';
dotenv.config();

export const PORT = process.env.PORT || 4000;
export const DB_URI = process.env.DB_URI;