import express from 'express';
import { PORT } from './config/config.js';
import connectDB from "./config/db.js"
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import logger from "./middleware/logger.js";
import notFound from "./middleware/handleNotFound.js";
import handleError from './middleware/handleError.js';

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(morgan("dev"));     // HTTP request logging
app.use(express.json());
app.use(logger);
app.use(cors());            // Enable Cross-Origin Resource Sharing

// API Routes
app.use('/api/items', itemRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(notFound);
app.use(handleError);

const port =  4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
