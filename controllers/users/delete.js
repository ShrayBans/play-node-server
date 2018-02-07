const { deleteTemplate } = appRequire("lib/users/service");
const { respondCustomError } = appRequire("helpers/responses");
const ReportTemplateNotFoundError = appRequire("lib/users/errors/report_template_not_found_error");

const deleteHandler = ({ user, params, payload }, reply) => {
    const { templateSlug } = params;

    deleteTemplate(user, templateSlug)
        .then(() => reply().code(204))
        .catch(ReportTemplateNotFoundError, respondCustomError(reply));
};

module.exports = {
    method: "DELETE",
    path: "/users/{templateSlug}",
    handler: deleteHandler,
};
