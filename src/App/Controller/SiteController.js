const Product = require("../Model/ProductModel");
const mongoose = require("mongoose");
class SiteController {
  // [GET] http:localhost:5000/
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.status(200).json({
          products,
          cartlist: req.user[0].cartlist,
          email: req.user[0].email,
          username: req.user[0].fullname,
          id: req.user[0].id,
          historycheckout: req.user[0].historycheckout,
        });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
