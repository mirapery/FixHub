const express = require('express');
const app = express();
const fixerRouter = require('./routes/fixerRouter');
const itemRouter = require('./routes/itemRouter');
const userRouter = require('./routes/userRouter');
const { middleware1, middleware2 } = require("./middleware/customMiddlewares");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");


// Middleware to parse JSON
app.use(express.json());

// Custom middleware for logging
app.use(logger);

// Use the xRouter for all /xs routes
app.use('/fixers', fixerRouter);
app.use('/items', itemRouter);
app.use('/users', userRouter);

// Example usage, korvaa myöhemmin jollain oikealla
app.get("/", middleware1 ,(req, res) => res.send("API Running!"));

// Handles any requests that do not match any route and returns a 404 status
app.use(notFound);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
