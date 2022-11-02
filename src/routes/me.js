const express = require("express");
const CartListController = require("../App/Controller/CartListController");
const router = express.Router();

router.put("/addcart", CartListController.addCartList);
router.put("/updatecartlist", CartListController.updateCartList);
router.put("/updatehistory", CartListController.updateHistoryCheckout);

module.exports = router;
