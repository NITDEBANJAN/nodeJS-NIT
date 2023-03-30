const express=require('express');
const router =express.Router();

router.get('/v1-api',(req,res,next)=>{

    res.status(200).json({
        message:'Hiiiii'
    });
});

router.get('/v1-api1',(req,res,next)=>{

    res.status(200).json({
        message:"ap1"
    });
});

router.get('/api5'+'/:productId',(req,res,next)=>{

    const productId=req.params.productId;
    res.status(200).json({
        message:productId+'productid'
    });
});

module.exports=router;