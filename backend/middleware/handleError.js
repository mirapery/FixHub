const handleError = (res, error, message, statusCode = 500) => {
    console.error(error);
    return res.status(statusCode).json({ message: message || 'An error occurred.' });
};

module.exports = handleError;