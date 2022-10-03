const siteRoute = require('./site');
const productRoute = require('./product');
const authRoute = require('./auth');
const adminRoute = require('./admin');


function Routes(app){
    app.use('/products',productRoute);
    app.use('/auth', authRoute);
    app.use('/admin',adminRoute);
    app.use('/',siteRoute);
}

module.exports = Routes;