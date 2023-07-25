const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { uploadFile } = require("../controllers/files");

//multer setup for file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/uploads");
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${Math.round(
//       Math.random() * 1e9
//     )}${path.extname(file.originalname)}`;
//   },
// });

// const uploadOptions = multer({
//   storage: storage,
//   limits: { fileSize: 100000 * 100 }, //100mb filesize limit
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");

    cb(null, `${fileName}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const uploadOptions = multer({
  storage: storage,
  limits: { fileSize: 100000 * 100 }, //100mb filesize limit
});

//routers
router.post("/", uploadOptions.single("fileName"), uploadFile);

module.exports = router;
