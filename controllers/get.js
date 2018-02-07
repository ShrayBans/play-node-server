const healthCheck = (request, reply) => reply("OK");

module.exports = {
    method: "GET",
    path: "/",
    handler: healthCheck,
    config: {
        auth: false,
    },
};
