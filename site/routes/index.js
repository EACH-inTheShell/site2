var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre/index');
});

router.get('/atividades', function(req, res, next) {
  res.render('atividades/index');
});

router.get('/wiki', function(req, res, next) {
  res.render('wiki/index');
});

router.get('/wiki/:page', function(req, res, next) {
  console.log(`Getting page ${req.params.page}`);
  res.render(`wiki/${req.params.page}`);
});

router.get('/writeups', function(req, res, next) {
  res.render('writeups/index');
});

module.exports = router;
