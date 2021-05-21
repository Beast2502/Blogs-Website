const express = require('express');

const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();


const products = [];

// /admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

//  /admin/add-product => POST
router.post('/add-product',(req,res,next)=>{
    //console.log(req.body);
    products.push({title : req.body.title});
    console.log(products);
    res.redirect('/admin/add-product');

});

console.log("Form se data add hua",products);


module.exports = {
    routes : router,
    products : products,
   
}