module.exports = {
    apiBaseUrl: "staging-api.videoamp.com",
    aws: {
        sqs: {
            debug: false,
            jobs: "https://sqs.us-east-1.amazonaws.com/914375995788/stage_druid_reports",
        },
    },
    druid: {
        host: "druid-broker.prod.use1",
    },
};
