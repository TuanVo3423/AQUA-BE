const UserShema = require("../Model/UserModel");

class CartListController {
  // [PUT] me/addcart/id
  addCartList(req, res, next) {
    UserShema.updateOne(
      { _id: req.body.userID },
      {
        $push: {
          cartlist: {
            id: req.body._id,
            name: req.body.name,
            price: req.body.price,
            attachment: req.body.img,
            quantity: 1,
          },
        },
      }
    )
      .then(() => {
        res.status(200).json({
          message: "Add product to cartlist successfully",
          type: "success",
        });
      })
      .catch(next);
  }
  // [PUT] me/updatecartlist
  updateCartList(req, res, next) {
    // console.log("bat dau tu day : ", req.body);
    UserShema.updateOne(
      { _id: req.body.userID },
      {
        $set: {
          cartlist: req.body.cartlist,
        },
      }
    )
      .then((user) => {
        res.status(200);
      })
      .catch(next);
  }

  // [PUT] me/updatehisotry
  updateHistoryCheckout(req, res, next) {
    // console.log("checkout : ", req.body);
    UserShema.updateOne(
      { _id: req.body.userID },
      {
        $set: {
          historycheckout: req.body.history,
        },
      }
    )
      .then((user) => {
        res.status(200);
      })
      .catch(next);
  }
}

module.exports = new CartListController();
