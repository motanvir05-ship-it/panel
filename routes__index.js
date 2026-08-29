var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/minecraft_free', function(req, res, next) {
  res.render('minecraft_free', {page:'MC Free Plans', menuId:'minecraft_free'});
});

router.get('/minecraft_intel', function(req, res, next) {
  res.render('minecraft_intel', {page:'MC Intel Plans', menuId:'minecraft_intel'});
});

router.get('/minecraft_amd', function(req, res, next) {
  res.render('minecraft_amd', {page:'MC Amd Plans', menuId:'minecraft_amd'});
});

router.get('/vps_free', function(req, res, next) {
  res.render('vps_free', {page:'VPS Free Plans', menuId:'vps free'});
});

router.get('/vps_intel', function(req, res, next) {
  res.render('vps_intel', {page:'VPS Intel Plans', menuId:'vps intel'});
});

router.get('/vps_amd', function(req, res, next) {
  res.render('vps_amd', {page:'VPS Amd Plans', menuId:'vps amd'});
});

router.get('/rdp', function(req, res, next) {
  res.render('rdp', {page:'RDP Plans', menuId:'rdp'});
});

router.get('/bot', function(req, res, next) {
  res.render('bot', {page:'BOT Plans', menuId:'bot'});
});

router.get('/website', function(req, res, next) {
  res.render('website', {page:'WEBSITE Plans', menuId:'website'});
});

module.exports = router;
