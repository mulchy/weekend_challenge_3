var router = require('express').Router();

router.post('/', function(req, res) {
  console.log('request body:: ', req.body);
  var x = parseFloat(req.body.x);
  var y = parseFloat(req.body.y);
  res.send({result: x / y});
});

module.exports = router;
