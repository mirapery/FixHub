const express = require('express');
const { PORT } = require('./config/config.js');
const connectDB = require('./config/db.js');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');
const itemRoutes = require('./routes/itemRoutes.js');
const reviewRoutes = require('./routes/reviewRoutes.js');
const logger = require('./middleware/logger.js');
const notFound = require('./middleware/handleNotFound.js');
const handleError = require('./middleware/handleError.js');

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
