const { updateTemplate } = appRequire("lib/users/service");
const Validator = appRequire("lib/users/put/validator");
const { respondCustomError } = appRequire("helpers/responses");
const ReportTemplateNotFoundError = appRequire("lib/users/errors/report_template_not_found_error");

const put = ({ user, params, payload }, reply) => {
    const { templateSlug } = params;

    updateTemplate(user, templateSlug, payload)
        .then(template => reply(template))
        .catch(ReportTemplateNotFoundError, respondCustomError(reply));
};

module.exports = {
    method: "PUT",
    path: "/users/{templateSlug}",
    handler: put,
    config: {
        validate: {
            payload: Validator,
        },
    },
};
