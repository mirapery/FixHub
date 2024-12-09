const handleError = (res, error, message, statusCode = 500) => {
    console.error(error);

    if (error.name === 'ValidationError') {
        statusCode = 400;
        message = message || 'Validation error occurred.';
    } else if (error.name === 'MongoError' && error.code === 11000) {
        statusCode = 409;
        message = message || 'Duplicate key error.';
    } else if (error.name === 'CastError') {
        statusCode = 400;
        message = message || 'Invalid ID format.';
    } else if (error.name === 'JsonWebTokenError') {
        statusCode = 401;
        message = message || 'Invalid token.';
    } else if (error.name === 'TokenExpiredError') {
        statusCode = 401;
        message = message || 'Token has expired.';
    }

    return res.status(statusCode).json({ message: message || 'An error occurred.' });
};

module.exports = handleError;