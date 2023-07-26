const express = require("express");
const router = express.Router();

const { show } = require("../controllers/show");

// routes
router.get("/:uuid", show);

module.exports = router;
