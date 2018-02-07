const path = require("path");

const rootPath = path.normalize(`${__dirname}/../..`);

/* eslint-disable max-len */

module.exports = {
    logOutput: ["console"],
    logLevel: "debug",
    root: rootPath,
    apiBaseUrl: "localhost:3005",
    http: {
        port: process.env.PORT || 3006,
    },
    timeout: 60000,
    hostname: process.env.HOST || process.env.HOSTNAME,
    databases: {
        local: {
            client: "postgres",
            connection: process.env.DATABASES_API_CONNECTION || "postgres://postgres:postgres@127.0.0.1:5432/vamp_test",
        },
    },
    pagination: {
        defaultItemsPerPage: 10,
    },
};
