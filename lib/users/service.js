const _ = require("lodash");

const User = appRequire("models/user");
const UserGroup = appRequire("models/user_group");

const getAllUserGroupUsers = user => {
    console.log('1', 1);
    return User
        .query()
        .select("user.*", "user_group:user_group.id as user_group")
        // .eager("user_group", {
        //     user_group: (builder) => builder.where(user_group.id, 2)
        // })
        .joinRelation("user_group", { alias: "ug" })
        .where("ug.id", 2);
}


const getAllUsers = () =>
    User.query();

const getAllUserGroups = () =>
    UserGroup.query();


const postUser = () =>
    User.query()
        .insert({ name: "Shray4", slug: "27rf38g79hf0j0k", created_by: "shray@videoamp.com"});

const postUserGroup = () =>
    UserGroup.query()
        .insert({ name: "ShrayGroup4", slug: "27rf38g79hf0j0k", created_by: "shray@videoamp.com" });        ;

const addUserToUserGroup = () =>
    UserGroup.query();

const deleteUserFromUserGroup = () =>
    UserGroup.query();

module.exports = {
    getAllUserGroups,
    getAllUsers,
    postUser,
    postUserGroup,
    addUserToUserGroup,
    deleteUserFromUserGroup,
    getAllUserGroupUsers,
};
