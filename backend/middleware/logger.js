const logger = (req, res, next) => {
    const currentDate = new Date().toISOString();
    console.log(`[${currentDate}] ${req.method} request to ${req.url}`);
    res.on('finish', () => {
        console.log(`[${currentDate}] ${req.method} ${req.url} - ${res.statusCode}`);
    });
    next();
};

module.exports =  logger;
