const File = require("../models/files");
const catchAsync = require("../middlewares/catchAsync");
const ErrorHandler = require("../middlewares/errorHandler");

const downloadFile = catchAsync(async (req, res, next) => {
  const file = await File.findOne({ uuid: req.params.uuid });

  if (!file) {
    return next(new ErrorHandler("Link aleady expired", 400));
  }

  const filePath = file.path;
  res.send(filePath); //for getting path
  //   res.download(filePath); // for downloading file if using any templating engine such as Ejs
});

module.exports = { downloadFile };
