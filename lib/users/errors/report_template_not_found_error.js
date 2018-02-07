const createError = appRequire("helpers/create_error");

module.exports = createError(
    "ReportTemplateNotFoundError",
    "Report template not found",
    404
);
