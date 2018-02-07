
/* eslint-disable global-require, no-console, import/no-extraneous-dependencies */
if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
}
const Promise = require("bluebird");
const Hapi = Promise.promisifyAll(require("hapi"));
const config = require("config");
const unhandledRejection = require("unhandled-rejection");
const { Model } = require("objection");
const Knex = require("knex");

const knexConfig = appRequire("Knexfile");

const knex = Knex(knexConfig);
Model.knex(knex);

// const { knex } = appRequire("config/bookshelf");
// const User = appRequire("models/user");
const nodeEnv = process.env.NODE_ENV;

// Initialize Bookshelf registry
require("require-all")({
    dirname: `${__dirname}/models/`,
    recursive: true,
});

const server = new Hapi.Server();
const port = config.get("http.port");
server.connection({
    port,
    routes: { cors: true },
});

const good = {
    register: require("good"),
    options: {
        ops: { interval: 1000 },
        includes: {
            request: ["headers", "payload"],
            response: ["payload"],
        },
    },
};

if (nodeEnv !== "test") {
    good.options.reporters = {
        console: [
            {
                module: "good-squeeze",
                name: "Squeeze",
                args: [
                    {
                        log: "*",
                        response: "*",
                        request: "*",
                    },
                ],
            },
        ],
    };
    if (nodeEnv === "production") {
        good.options.reporters.console.push({
            module: "good-http",
            args: ["http://es.prod.use1:9200/reporting-debug/logs", { threshold: 1 }],
        });
    }
}


// TODO: ZQK: Set up raygun?
// const raygun = {
//     register: require("hapi-raygun"),
//     options: {
//         apiKey: config.get("raygunKey"),
//         user: (request) => {
//             if (request.user) {
//                 return {
//                     identifier: request.user.get("slug"),
//                     email: request.user.get("email"),
//                     fullName: request.user.get("name"),
//                 };
//             }
//
//             return {};
//         },
//     },
// };


module.exports = server.registerAsync([
    require("@videoamp/hapi-route-autoloader")(`${__dirname}/controllers/`),
    require("hapi-boom-decorators"),
    good,
    // raygun, // TODO: ZQK: Set up raygun?
]).then((pluginRegisterError) => {
    if (pluginRegisterError) {
        console.error("Unable to load plugin, info below:");
        console.error(pluginRegisterError);
    }

    const rejectionEmitter = unhandledRejection();
    rejectionEmitter.on("unhandledRejection", (error) => {
        console.error(error.toString());
        if (error.stack) {
            console.error(error.stack);
        }
        throw error;
    });

    return server;
});
