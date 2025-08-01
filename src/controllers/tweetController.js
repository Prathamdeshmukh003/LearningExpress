export const getTweets = (req,res)=>{
    return res.json({
        message:"Welcome to the tweet route!"
    });
};

export const getTweetById =(req,res)=>{
    return res.json({
        id: req.params.id,
        message:`Welcome to the tweet route with id : ${req.params.id}`
    });
};

export const createTweet = (req,res)=>{
    return res.json({
        message:"New tweet created!"
    });
};

export const createTweetById = (req,res)=>{
    return res.json({
        id: req.params.id,
        message:`New tweet created with id : ${req.params.id}`
    });
};