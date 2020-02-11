var express = require('express');
var router = express.Router();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({number: global.count })
});

//Invoke-WebRequest -ContentType "application/json"  -Uri http://localhost:3000/counter -Method POST -Body '{"count":999}'
router.post('/', function(req, res, next){
  newNumber = Number(req.body.count)
  if(isNaN(newNumber)){
    global.count = 0;
  }
  else{
    global.count=newNumber;
  }
  
  console.log(req.body);
  res.sendStatus(200);
  
  //res.json({requestBody: req.body})  
});


module.exports = router;
