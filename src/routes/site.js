const express = require('express');
const siteController = require('../App/Controller/SiteController');
const middlewareController = require('../MiddleWare/auth');
const router = express.Router();

router.get('/',middlewareController.verifyToken,siteController.index);

module.exports = router;