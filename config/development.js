module.exports = {
    http: {
        port: process.env.PORT || 3006,
    },
    apiBaseUrl: "localhost:3005",
    aws: {
        sqs: {
            debug: true,
            jobs: "https://sqs.us-east-1.amazonaws.com/914375995788/dev_druid_reports",
        },
    },
    druid: {
        options: {
            swallowErrors: false,
            timeout: 1000000,
            useCache: true,
        },
    },
};
