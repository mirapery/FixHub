import express from 'express';
import { PORT } from './config/config';
import connectDB from "./config/db"
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import itemRoutes from './routes/itemRoutes';
import reviewRoutes from './routes/reviewRoutes';
import logger from "./middleware/logger";
import notFound from "./middleware/handleNotFound";
import handleError from './middleware/handleError';

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
