/*Server routing to the corresponding controller*/

var customerController = require('../controllers/customerCtrl.js')
var customerUploadController = require('../controllers/customerUploadCtrl.js')
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

module.exports = function (app) {
    app.post('/addCustomer', customerController.insert);
    app.put('/updateCustomer/:id', customerController.update);
    app.delete('/deleteCustomer/:id', customerController.delete);
    app.get('/getAll', customerController.getAllCustomers);
    app.post('/uploadCustFile', multipartyMiddleware, customerUploadController.upload);

    app.get('*', function (req, res) {
        res.sendfile('public/index.html');
    });
};
