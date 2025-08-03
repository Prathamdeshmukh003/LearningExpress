export const createTweetManualValidator = (req,res,next)=>{
    if(!req.body || !req.body.tweet){
        return res.status(400).json({
            message:"Tweet can't be empty!"
        });
    }
    if(req.body.tweet.length >280){
        return res.status(400).json({
            error:("Tweet must be 280 charachters or less!")
        })
    }

    next();
};