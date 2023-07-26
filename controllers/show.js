const File = require("../models/files");
const catchAsync = require("../middlewares/catchAsync");
const ErrorHandler = require("../middlewares/errorHandler");

const show = catchAsync(async (req, res, next) => {
  const file = await File.findOne({ uuid: req.params.uuid });

  if (!file) {
    return next(new ErrorHandler("Link has already expired", 400));
  }

  res.status(200).json({
    fileName: file.fileName,
    uuid: file.uuid,
    fileSize: file.size,
    downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
  });
});

module.exports = { show };
