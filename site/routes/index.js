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

router.get('/writeups', function(req, res, next) {
  res.render('writeups/index');
});


/* GET wiki page. */
// Criptografia
router.get('/cripto', function(req, res, next) {
  res.render('wiki/cripto/index');
});

router.get('/hashcat', function(req, res, next) {
  res.render('wiki/cripto/hashcat/index');
});

router.get('/hashcat/regras', function(req, res, next) {
  res.render('wiki/cripto/hashcat/regras');
});

router.get('/hashcat/fbrutamasc', function(req, res, next) {
  res.render('wiki/cripto/hashcat/fbrutamasc');
});

router.get('/hashid', function(req, res, next) {
  res.render('wiki/cripto/hashid');
});

router.get('/john', function(req, res, next) {
  res.render('wiki/cripto/john');
});

router.get('/mat/aleator', function(req, res, next) {
  res.render('wiki/cripto/mat/aleator');
});

router.get('/mat/aritmod', function(req, res, next) {
  res.render('wiki/cripto/mat/aritmod');
});

router.get('/mat/euclid', function(req, res, next) {
  res.render('wiki/cripto/mat/euclid');
});

router.get('/mat/teorian', function(req, res, next) {
  res.render('wiki/cripto/mat/teorian');
});

// Computação forense
router.get('/forense', function(req, res, next) {
  res.render('wiki/forense/index');
});

router.get('/exiftool', function(req, res, next) {
  res.render('wiki/forense/exiftool');
});

router.get('/hexedit', function(req, res, next) {
  res.render('wiki/forense/hexedit/index');
});

router.get('/steghide', function(req, res, next) {
  res.render('wiki/forense/steghide');
});

router.get('/stegsolve', function(req, res, next) {
  res.render('wiki/forense/stegsolve');
});

// Defesa
router.get('/defesa', function(req, res, next) {
  res.render('wiki/defesa/index');
});

// Engenharia Reversa
router.get('/engrev', function(req, res, next) {
  res.render('wiki/engrev/index');
});

// Engenharia Social
router.get('/engsoc', function(req, res, next) {
  res.render('wiki/engsoc/index');
});

// Exploracao de binarios
router.get('/expbin', function(req, res, next) {
  res.render('wiki/expbin/index');
});

//Geral
router.get('/geral', function(req, res, next) {
  res.render('wiki/geral/index');
});

router.get('/adicio', function(req, res, next) {
  res.render('wiki/geral/adicio');
});

router.get('/fbruta', function(req, res, next) {
  res.render('wiki/geral/fbruta');
});

router.get('/ahibrido', function(req, res, next) {
  res.render('wiki/geral/ahibrido');
});

router.get('/ctf', function(req, res, next) {
  res.render('wiki/geral/ctf');
});

router.get('/wlist', function(req, res, next) {
  res.render('wiki/geral/wlist');
});

// Hardware hacking
router.get('/hardware', function(req, res, next) {
  res.render('wiki/hardware/index');
});

// Linux
router.get('/linux', function(req, res, next) {
  res.render('wiki/linux/index');
});

// OSInt
router.get('/osint', function(req, res, next) {
  res.render('wiki/osint/index');
});

router.get('/sherlock', function(req, res, next) {
  res.render('wiki/osint/sherlock');
});

// Redes
router.get('/rede', function(req, res, next) {
  res.render('wiki/rede/index');
});

router.get('/nmap', function(req, res, next) {
  res.render('wiki/rede/nmap');
});

router.get('/hydra', function(req, res, next) {
  res.render('wiki/rede/hydra');
});

// Scripting
router.get('/script', function(req, res, next) {
  res.render('wiki/script/index');
});

// Web
router.get('/web', function(req, res, next) {
  res.render('wiki/web/index');
});

router.get('/gobuster', function(req, res, next) {
  res.render('wiki/web/gobuster');
});

// Windows
router.get('/windows', function(req, res, next) {
  res.render('wiki/windows/index');
});


/* GET writeup page. */
router.get('/writeups', function(req, res, next) {
  res.render('writeups/index');
});


module.exports = router;
