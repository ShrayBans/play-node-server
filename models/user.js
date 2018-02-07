const Model = require("objection").Model;

class User extends Model {
    // Table name is the only required property.
    static get tableName() {
        return "api.user";
    }

    // Optional JSON schema. This is not the database schema! Nothing is generated
    // based on this. This is only used for validation. Whenever a model instance
    // is created it is checked against this schema. http://json-schema.org/.
    static get jsonSchema() {
        return {
            type: "object",
            required: ["name"],

            properties: {
                id: { type: "integer" },
                name: { type: "string", minLength: 1, maxLength: 255 },
            },
        };
    }

    static get relationMappings() {
        return {
            user_group: {
                relation: Model.ManyToManyRelation,
                // The related model. This can be either a Model subclass constructor or an
                // absolute file path to a module that exports one. We use the file path version
                // here to prevent require loops.
                modelClass: `${__dirname}/user_group`,
                join: {
                    from: "api.user.id",
                    // ManyToMany relation needs the `through` object to describe the join table.
                    through: {
                        from: "api.user_group_user.user_id",
                        to: "api.user_group_user.user_group_id",
                    },
                    to: "api.user_group.id",
                },
            },
        };
    }
}

module.exports = User;