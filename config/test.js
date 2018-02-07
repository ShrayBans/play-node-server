module.exports = {
    logOutput: ["console"],
    logLevel: "error",
    timeout: 25000,
    http: {
        host: "localhost",
        port: 3000,
    },
    api_postgres: process.env.API_POSTGRES || "bacon://127.0.0.1:5432/videoamp_test",
};
