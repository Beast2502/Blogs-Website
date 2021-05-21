const express = require('express');
const path = require('path');

const router = express.Router();
const adminData = require('./admin');

console.log("Shop page me data aya",adminData.products);

router.get('/',(req,res,next)=>{
    console.log("Shop js",adminData.products);
    res.sendFile(path.join(__dirname ,'../', 'views','shop.html'))
})


module.exports = router;