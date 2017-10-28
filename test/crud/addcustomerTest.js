var express        = require('express');
var should =   require('should');
var expect = require('chai').expect;
var request = require('superagent');
var app            = express();
var baseUrl = "http://localhost:8899";

// var Customer = require('../../app_server/models/customerSchema');
describe("Customers API-Insert", function() {

it('should respond with 200 on post', function(done) {
var input={"first_name":"sa1t",
      "last_name":"ya",
      "ip":"132.235",
      "latitude":"12",
      "longitude":"33",
      "email" :"sathiyavasag@mail1.com"
    }
    request.post(baseUrl+'/addCustomer')
      .send(input)
      .end(function(err, res) {
        if (err){
          throw(err);
          }
        res.status===200;
        done();
      });
  });
  });
  describe("Customers API-Get all", function() {


      it("Get all customers returns status 200", function () {
          request(baseUrl+'/getAll', function (error, response, body) {
              expect(response.statusCode).to.equal(200);
          });
      });

  });
