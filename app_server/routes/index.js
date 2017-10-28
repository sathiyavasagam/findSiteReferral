/*Server routing to the corresponding controller*/

var customerController = require('../controllers/customerCtrl.js')

module.exports = function(app) {
    app.post('/saveReferer', customerController.insert);


    app.get('*', function(req, res) {
        res.sendfile('public/index.html');
    });
};