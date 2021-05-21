const http = require('http');


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminData = require('./routes/admin');
const shop = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);

app.use(shop);



app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


app.listen(3000);