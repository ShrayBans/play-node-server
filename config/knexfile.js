module.exports = {
    development: {
        client: "postgresql",
        useNullAsDefault: true,
        connection: {
            filename: "./docker.db",
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: "example",
        },
        pool: {
            min: 2,
            max: 10,
        },
    },
};
