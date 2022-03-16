var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre');
});

router.get('/atividades', function(req, res, next) {
  res.render('atividades');
});

module.exports = router;
