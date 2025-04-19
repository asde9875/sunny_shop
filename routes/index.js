var express = require('express');
var router = express.Router();

var auth = require('../middleware/auth');

var Product = require("../models/product");//Product 建構式
var Member = require("../models/member");//Member 建構式


/* GET home page. */

 router.get(['/','index'], function(req, res, next) {
  res.render('index', { title: 'Kevin_Web' });
 });
 router.get('/demo', async function(req, res, next) {
  
 let member = new Member();
  await member.add();
  
  return res.render('demo', { title: 'demo' });

  let product = new Product();
  let data = await product.getProduct()
  console.log(data,"data")
  return res.render('demo', { title: 'demo' });

  try{
    let result = await product.delete("UDNaElEjypxTY2eTw7H4");
    if(result.err) console.log("代表有錯")
    console.log(result.id,"result")
  }catch(err){
    //這邊是呼叫 firestore 失敗
    console.log(err,"err")  
  }

  res.render('demo', { title: 'demo' });
 });
 router.get('/news', function(req, res, next) {
  res.render('news', { title: 'news' });
 });
 router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
 });
 router.get('/account', function(req, res, next) {
  res.render('account', { title: 'account' });
 });
 router.get('/articlse', function(req, res, next) {
  res.render('article', { title: 'article' });
 });
 router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'blog' });
 });
 router.get('/brands', function(req, res, next) {
  res.render('brands', { title: 'brands' });
 });
 router.get('/cart', async function(req, res, next) {
   //取得使用者個人的資料
  let member = new Member();
  let userRecord = {}
  try{
    userRecord = await member.getMember(res.locals.session.uid);
    console.log(userRecord,"userRecord")
  }catch(err){
    console.log(err,"err")
  }
  res.render('cart', { title: 'cart',userRecord });
 });
 router.get('/catalog', function(req, res, next) {
  res.render('catalog', { title: 'catalog' });
 });
 router.get('/category', function(req, res, next) {
  res.render('category', { title: 'category' });
 });
 router.get('/subcategory', function(req, res, next) {
  res.render('subcategory', { title: 'subcategory' });
 });
 router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'checkout' });
 });
 router.get('/compare', function(req, res, next) {
  res.render('compare', { title: 'compare' });
 });
 router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'contacts' });
 });
 router.get('/delivery', function(req, res, next) {
  res.render('delivery', { title: 'delivery' });
 });
 router.get('/faq', function(req, res, next) {
  res.render('faq', { title: ' faq' });
 });
 router.get('/favorites', function(req, res, next) {
  res.render('favorites', { title: 'favorites' });
 });
 router.get('/news', function(req, res, next) {
  res.render('news', { title: 'news' });
 });
 router.get('/personal', async function(req, res, next) {
  //取得使用者個人的資料
  let member = new Member();
  let userRecord = {}
  try{
    userRecord = await member.getMember(res.locals.session.uid);
    console.log(userRecord,"userRecord")
  }catch(err){
    console.log(err,"err")
  }
  res.render('personal', { title: 'personal',userRecord});
 });
 router.get('/product', function(req, res, next) {
  res.render('product', { title: 'product' });
 });

 router.get('/settings', auth , function(req, res, next) {
   var err = req.query.err;
   res.render('settings', { title: 'settings', err });
 });

module.exports = router;