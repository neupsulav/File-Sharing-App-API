const File = require("../models/files");
const catchAsync = require("../middlewares/catchAsync");
const ErrorHandler = require("../middlewares/errorHandler");
const { v4: uuid } = require("uuid");

const uploadFile = catchAsync(async (req, res, next) => {
  const file = req.file;
  if (!file) {
    return next(new ErrorHandler("File not provided", 400));
  }

  const fileName = file.filename;
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

  const newData = await File.create({
    fileName: req.file.filename,
    path: req.file.path,
    size: req.file.size,
    uuid: uuid(),
  });

  newData.save();
  res
    .status(201)
    .json({ file: `${process.env.APP_BASE_URL}/files/${newData.uuid}` });
});

module.exports = { uploadFile };
