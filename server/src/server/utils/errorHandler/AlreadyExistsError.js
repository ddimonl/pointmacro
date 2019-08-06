const ApplicationError = require('./ApplicationError');

class AlreadyExistsError extends ApplicationError {
    constructor(message) {
        super(message || 'User already exists.', 409);
    }
}

module.exports = AlreadyExistsError;