const Joi = require("joi");

const schema = Joi.object().keys({
    name: Joi.string().min(1),
    type: Joi.string().valid(["timedelivery", "reportformat"]),
    query: Joi.object(),
}).min(1);

module.exports = schema;
