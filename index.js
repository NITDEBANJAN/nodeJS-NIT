const express=require('express');
const http=require('http');
var mainController=require('./mainRouter.js');
const port=process.env.port || 8090;


var app= express();
app.use(mainController);

const createServer=http.createServer(app);

createServer.listen(port);

