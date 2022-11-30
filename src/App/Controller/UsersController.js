const User = require("../Model/UserModel");
const mongoose = require("mongoose");
class UsersController {
  // [GET] http:localhost:5000/users/
  index(req, res, next) {
    User.find({})
      .then((users) => {
        res.status(200).json({ users });
      })
      .catch(next);
  }
}

module.exports = new UsersController();
