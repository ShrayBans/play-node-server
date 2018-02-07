const _ = require("lodash");
const util = require("util");

// Ignore custom Bookshelf error messages in favor of our own
const ignoredMessages = ["EmptyResponse", "No Rows Updated", "No Rows Deleted"];

module.exports = (errorName, errorDefaultMessage, errorCode) => {
    const error = function(message, code, details) {
        Error.captureStackTrace(this, this.constructor);
        this.message = errorDefaultMessage;

        const isMessageIgnored = _.includes(ignoredMessages, message);
        if (message && !isMessageIgnored) {
            this.message = message;
        }

        this.code = _.isNumber(code) ? code : errorCode;
        this.details = _.isObject(details) ? details : undefined;
    };

    util.inherits(error, Error);
    error.prototype.name = errorName;

    return error;
};
