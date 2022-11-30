const express = require("express");
const UsersController = require("../App/Controller/UsersController");
const router = express.Router();

router.get("/", UsersController.index);

module.exports = router;
