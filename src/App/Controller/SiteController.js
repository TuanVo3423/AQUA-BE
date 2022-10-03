const Product = require('../Model/ProductModel');
const mongoose = require('mongoose');
class SiteController {
    // [GET] http:localhost:5000/
    index(req, res, next) {
        Product.find({})
            .then((products) => {
                res.status(200).json({
                    products,
                    username : req.user.name,
                    id : req.user.id,
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();