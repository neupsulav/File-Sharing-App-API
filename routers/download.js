const express = require("express");
const router = express.Router();

const { downloadFile } = require("../controllers/download");

// routes
router.get("/:uuid", downloadFile);

module.exports = router;
