const _ = require("lodash");
const config = require("config");
const pg = require("pg");

// Parse number types into floats
const types = {
    FLOAT4: 700,
    FLOAT8: 701,
    NUMERIC: 1700,
    BIGINT: 20,
    INT8: 20,
    FLOAT4_ARRAY: 1021,
    FLOAT8_ARRAY: 1022,
    NUMERIC_ARRAY: 1231,
};
_.forEach(types, type => pg.types.setTypeParser(type, "text", parseFloat));

module.exports = {
    client: "postgresql",
    connection: config.get("databases.local.connection"),
    pool: {
        min: 2,
        max: 10,
    },
};
