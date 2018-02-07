const Boom = require("boom");

const respondCustomError = reply =>
    (error) => {
        const boomError = Boom.wrap(error, error.code, error.message);
        boomError.output.payload.details = error.details;
        return reply(error);
    };

module.exports = {
    respondCustomError,
};
