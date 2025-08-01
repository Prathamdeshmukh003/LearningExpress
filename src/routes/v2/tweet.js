import express from 'express';

const router = express.Router();//Creates a new router object

router.get("/",(req,res)=>{
    return res.json({
        message:"Welcome to the tweet route v2!"
    });
});

router.get("/:id",(req,res)=>{
    return res.json({
        id:req.params.id,
        message:`Welcome to the tweet route v2 with id : ${req.params.id}`
    });
});

export default router;//Exports the router object