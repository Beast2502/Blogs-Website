const http = require('http');


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminData = require('./routes/admin');
const shop = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle: 'Blog'})
})

app.use(shop);



app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle : 'Page not Found'})
})


app.listen(3000);