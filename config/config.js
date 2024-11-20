/* global process */
import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 4000;
export const DB_URI = process.env.DB_URI;