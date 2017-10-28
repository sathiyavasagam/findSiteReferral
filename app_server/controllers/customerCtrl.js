/**
 * Created by sathiyas on 29/10/17.
 */

/*Controller to add,edit,update and delete the  data from mongodb*/

var customer = require('../models/customerSchema');


module.exports.insert = function(req, res) {

    var addCustomer = new customer.customer();
    addCustomer.referer_source = req.body.source;
    addCustomer.created_at = new Date();
    addCustomer.referer_header = req.get('Referer');
    if (addCustomer.referer_source !== undefined) {
        addCustomer.save(function(err, result) {
            if (err) {
                res.status(500).json({ resp: 'Error on saving' });
            } else {
                res.status(200).json({ response: 'Referer saved successfully' });
            }
        });
    } else {
        res.status(200).json({ response: 'No Referer' });
    }

};