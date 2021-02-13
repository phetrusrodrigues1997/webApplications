var express = require('express');
var app = express() ;
var router = require('./routes/hello.js');
//app.use(require('./routes/hello.js'));
console.log("Running") ;

 function funct() {
router.get('/', function(req,res) {
res.send('Hello world xx') ;

});

router.post('/', function(req,res){
  res.sendStatus(405) ;
});

app.use('/', router) ;


}
module.exports = funct ;
