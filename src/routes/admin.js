const express = require('express');
const AdminProductCtroller = require('../App/Controller/AdminProductCtroller');
const router = express.Router();

router.get('/',AdminProductCtroller.index);

module.exports = router;