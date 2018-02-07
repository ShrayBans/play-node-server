const Joi = require("joi");

const schema = Joi.object().keys({
    name: Joi.string().min(1).required(),
    type: Joi.string().valid(["timedelivery", "reportformat"]).required(),
    query: Joi.object().required(),
});

module.exports = schema;
