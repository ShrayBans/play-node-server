const postService = appRequire("lib/users/service");
// const Validator = appRequire("lib/users/post/validator");

const postUser = ({ user, payload }, reply) =>
    postService.postUser(user, payload).then(template => reply(template).code(201));

const postUserGroup = ({ user, payload }, reply) =>
    postService.postUserGroup(user, payload).then(template => reply(template).code(201));


module.exports = [
    {
        method: "POST",
        path: "/users",
        handler: postUser,
    },
    {
        method: "POST",
        path: "/user_groups",
        handler: postUserGroup,
    },
];
