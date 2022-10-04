const Product = require('../Model/ProductModel');
const mongoose = require('mongoose');
class SiteController {
    // [GET] http:localhost:5000/
    index(req, res, next) {
        console.log(req.user);
        Product.find({})
            .then((products) => {
                res.status(200).json({
                    products,
                    email : req.user[0].email,
                    username : req.user[0].fullname,
                    id : req.user[0].id,
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();