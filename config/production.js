module.exports = {
    apiBaseUrl: "apiv1.videoamp.com",
    aws: {
        sqs: {
            jobs: "https://sqs.us-east-1.amazonaws.com/914375995788/druid_reports",
        },
    },
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
