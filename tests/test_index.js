var chai = require('chai');
var req = require('supertest');
//var chaiHttp = require('chai-http');
//var server = require('index');
var http = require('http');
var assert = require('assert');
var expect = require('expect');
var request = require('request');
//test hiarchical. here we define a test suite for our calculator
var app = require('../index');
describe("chat Web server Testing", function() {
    //here we describe our test cases.
    it('returns 5 + 5 = 10', function(done) {
        assert.equal(5 + 5, 10);
        done();
    });
    
    it("returns 200 server is good", function(done){
        request.get("http://localhost:5000", function(error,response, body){
            console.log("res" + response.statusCode);
            expect(response.statusCode).toBe(200);
            app.close();
            done();
        });
    });
    
    /*
    describe("testing the http server", function(){
        it("should return 200", function(done){
            req(app)
            .get('/')
            .end(done);
        });
    });
    */

});

