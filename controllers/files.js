const catchAsync = require("../middlewares/catchAsync");
const ErrorHandler = require("../middlewares/errorHandler");

const uploadFile = catchAsync(async (req, res, next) => {});

module.exports = { uploadFile };
