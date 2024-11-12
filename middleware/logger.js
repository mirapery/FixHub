// Custom middleware to log incoming requests
const logger = (req, res, next) => {
    const currentDate = new Date().toISOString();
    console.log(`[${currentDate}] ${req.method} request to ${req.url}`);
    next();
};

module.exports = logger;
