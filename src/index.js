import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiroutes.js";

//Creating a new express app/server object
const app = express();
console.log(import.meta);

app.set("view engine","ejs");//setting the view engine to ejs
// app.set("views",);

app.set("views",import.meta.dirname + "/views");

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use('/api',apiRouter);//if the req url starts with /api , use the apiRouter

app.get("/",(req,res)=>{
    res.render("home",{name:"John Doe"});
})

app.get("/ping",(req,res)=>{
    console.log(req.query);//query params
    return res.json({
        message:"pong"
    });
});

// app.all('*',(req,res)=>{
//     return res.status(404).json({
//         message:'Not Found'
//     });
// });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}); 