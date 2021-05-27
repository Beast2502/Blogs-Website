const express = require('express');
const path = require('path');
const adminData = require('./admin')

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("Shop page",adminData.products)
    const products = adminData.products;
    res.render('shop' , {
        prods : products ,
        pageTitle: 'Blog',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
})


module.exports = router;