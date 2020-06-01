// ************ Require's ************
const express = require('express');
const router = express.Router();
const adminAccessMiddleware = require("../middlewares/adminAccess")
var userLogs = require("../middlewares/userLogs")

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', userLogs, mainController.root);
router.get("/admin", adminAccessMiddleware, mainController.adminAccess)

module.exports = router;
