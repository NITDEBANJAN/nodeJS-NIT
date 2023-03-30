const express=require('express');
const app=express();
const v1API=require('./products/route');
const v2API=require('./products/route1');

app.use('/products',v1API);
app.use('/products',v2API);
module.exports=app;