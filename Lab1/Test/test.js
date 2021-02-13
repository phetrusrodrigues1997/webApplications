console.log("test completed") ;
const chai = require('chai') ;
const expect = chai.expect ;
const request = require('superagent') ;
const status = require('http-status');
var router = require('../routes/hello.js');
var funct = require('./../index.js');


describe("Testing if the server responds to get/post requests", function() {
var server ;

before(function(done) {
funct() ;
var port = 3000 ;
var express = require('express');
var app = express() ;
app.use('/',router);
 server = app.listen(port, function() {
done() ;
}) ;

});

after(function(){
  server.close() ;
});

  it("Get Test", function(done) {
  request.get('http://localhost:3000/')
  .end(function(err,res) {
    expect(err).to.not.be.an('error');
    expect(res.statusCode).to.equal(status.OK);
    expect(res.text).to.equal("Hello world xx");
    done() ;
  });
});
it("Post test", function(done) {
  request.post('http://localhost:3000/')
  .end(function(err, res) {
    expect(err).to.be.an('error');
    expect(res.statusCode).to.equal(status.METHOD_NOT_ALLOWED);
    done() ;
  });
});


});
