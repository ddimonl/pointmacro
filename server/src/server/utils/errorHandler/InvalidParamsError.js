const ApplicationError = require('./ApplicationError');

class InvalidParamsError extends ApplicationError {
    constructor(message) {
        super(message || 'Invalid params.', 422);
    }
}

module.exports = InvalidParamsError;