const jwt =require('jsonwebtoken');
const User = require('../App/Model/UserModel');
const mongoose = require('mongoose');

const middlewareController = {
    // verify token
    verifyToken : (req, res, next) => {
        const accessToken = req.headers.token;
        console.log('accessToken: ' + accessToken);
        if (!accessToken){
            return  res.status(403).json({
                message : 'You have login or register account!',
                type : 'info',
            });
        }
            jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,(err,user) => {
                if(err){
                    res.status(403).json({
                        message: 'Your session has expired, please login again!',
                        type : 'info',
                    });
                }
                User.find({
                    _id : user.id
                })
                .then((data) => {
                    // console.log('data : ',data);
                    req.user = data;
                    next();
                })
            });
    },
    checkIsAdmin : (req,res,next) => {
        if(req.user.id){
            const id = mongoose.Types.ObjectId(req.user.id);
            console.log('id : ',id);
            User.findOne({
                _id : id
            })
            .then((user) => {
                if(user){
                    if(user.isAdmin === true){
                        req.isAdmin = true;
                        req.id = user._id;
                        next();
                    }
                    else if(user.isAdmin === false) {
                        req.isAdmin = false;
                        next();
                    }
                }
                else {
                    res.status(403).json({
                        message : 'Account has been deleted in database!!!',
                        type : 'error',
                    });

                }
                
            })
            .catch((err) => {
                console.log(err);
            });

        }
    }

}
module.exports = middlewareController;