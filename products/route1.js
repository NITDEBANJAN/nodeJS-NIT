const express=require('express');
const route1=express.Router();

route1.get('/v2-api',(req,res,next)=>{
    res.status(200).json({
        message:'v2-API'
    });
});

module.exports=route1;