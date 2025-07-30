import express from "express";
import morgan from "morgan";

//Creating a new express app/server object
const app = express();
const PORT = 3000;

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

function mid1(req,res,next){
    console.log("mid 1");
    next();
}

function mid2(req,res,next){
    console.log("mid 2");
    next();
}

function CommonMiddleware(res,req,next){
    console.log("Common Middleware");
    next();
}

app.use(CommonMiddleware);

app.get("/ping",[mid1,mid2],(req,res)=>{
    console.log(req.query);//query params
    return res.json({
        message:"pong"
    });
});

app.get("/tweets/:tweets_id",(req,res)=>{
    console.log(req.params);//url params
    console.log(req.body);
    return res.json({
        message:"tweet details"
    });
});

app.post("/hello",(req,res)=>{
    return res.json({
        message:"World"
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}); 