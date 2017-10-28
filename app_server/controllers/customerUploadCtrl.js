/**
 * Created by sathiyas on 23/3/16.
 */

/*Parse and upload the file into mongodb*/

var customer = require('../models/customerSchema');
var fs = require("fs");
var Converter = require("csvtojson").Converter;

/*Parse and upload a file to collection*/
exports.upload = function (req, res) {

    var mapJson = {};

    var fileStream = fs.createReadStream(req.files.file[1].path);

    var converter = new Converter({constructResult: true});

    fileStream.pipe(converter);

    converter.on("end_parsed", function (jsonData) {

        //collecting the converted json into mapJson variable and passing the dataFile path and mapJson to upload the file
        mapJson = jsonData;
        saveDataFile(req.files.file[0].path, mapJson);
    });


    //Parses the dataFile by mapping the field names in mapJson
    var saveDataFile = function (dataFilePath, mapJson) {
        var fileStream = fs.createReadStream(dataFilePath);

        var converter = new Converter({constructResult: true});

        fileStream.pipe(converter);

        function saveToDb(customers) {

            var created_at = mapJson[0].created_at;
            var email = mapJson[0].email;
            var first_name = mapJson[0].first_name;
            var last_name = mapJson[0].last_name;
            var ip = mapJson[0].ip;
            var latitude = mapJson[0].latitude;
            var longitude = mapJson[0].longitude;


            for (var i = 0; i < customers.length; i++) {

                var cust = new customer.customer();
                cust.created_at = customers[i][created_at];
                cust.email = customers[i][email];
                cust.first_name = customers[i][first_name];
                cust.last_name = customers[i][last_name];
                cust.ip = customers[i][ip];
                cust.latitude = customers[i][latitude];
                cust.longitude = customers[i][longitude];

                cust.save();
            }
            res.status(200).json({resp: 'File Uploaded Successfully'});

        }

        converter.on("end_parsed", function (customers) {
            saveToDb(customers);
        });
    }
};