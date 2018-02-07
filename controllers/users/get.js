const { getAllUserGroups, getAllUsers, getAllUserGroupUsers } = appRequire("lib/users/service");

const getUserGroups = ({ user }, reply) =>
    getAllUserGroups(user).then(res => reply(res));

const getUsers = ({ user }, reply) =>
    getAllUsers(user).then(res => reply(res));

const getUserGroupUsers = ({ user }, reply) =>
    getAllUserGroupUsers(user).then(reply);


module.exports = [
    {
        method: "GET",
        path: "/user_groups",
        handler: getUserGroups,
    },
    {
        method: "GET",
        path: "/users",
        handler: getUsers,
    },
    {
        method: "GET",
        path: "/user_group_users",
        handler: getUserGroupUsers,
    },
];
