module.exports = {
    apiBaseUrl: "demo-api.videoamp.com",
    druid: {
        host: "druid-broker.prod.use1",
        port: "80",
        options: {
            timeout: 1000000,
            useCache: true,
            swallowErrors: true,
        },
    },
};