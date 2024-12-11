require('dotenv').config();
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
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerOptions.js'); // Swagger-dokumentaation määrittely

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(morgan("dev"));     // HTTP request logging
app.use(express.json());
app.use(logger);
app.use(cors());            // Enable Cross-Origin Resource Sharing

// Swagger UI reitti
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Dokumentaatio

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
