const express = require("express");
const app = express(); //express is a function 
//ports are logical endpoints of a network connection that is used to exchange information between web server and web client 
//console.dir(app);
let port = 3000;
app.listen(port,()=>{
    console.log(`app is listening to port no. is ${port}`);
});
//app.use((req,res)=>{
    //handling request 
   // console.log("Request Recieved");
    //sending response
    //res.send("This is a basic response");
    // res.send({       //this is in jsom format in hoppscotch "name" : "Harsh"
    //     name:"Harsh Sharma",
    //     Age : 20,
    // });
    //let code = "<h1>Harsh Sharma</h1><ul><li>Java Dsa</li><li>Mern Stack</li></ul>";
        //    res.send(code);
   // });
        // app.get("/",(req,res)=>{
        //     res.send("u contact root path");
        // });
        // app.get("/apple",(req,res)=>{
        //     res.send("u contact apples  path");
        // });
        // app.get("*",(req,res)=>{
        //     res.send("u type wrong path");
        // });
        // app.post("/",(req,res)=>{
        //     res.send("u enter inn post request");
        // });
        //Path Parameter
        // app.get("/:username",(req,res)=>{
        //     console.log(req.params);
        //     res.send("Hello Groot");
        // })
        // app.get("/:username/:id",(req,res)=>{
        //     console.log(req.params);
        //     res.send("Hello Groot");
        // })
        // app.get("/:Car/:ModelNo",(req,res)=>{
        //     console.log(req.params);
        //    let  {Car ,ModelNo} = req.params;
           //res.send(`My Fav Car is ${Car} and Model is ${ModelNo}`);
       
        //    let code = `<h1>Best ${Car}  Model is ${ModelNo} </h1>`;
        //    res.send(code);
        // });
    //Query String 
    // app.get("/search",(req,res)=>{
    //     //console.log(req.query);
    //     let {q} = req.query;
    //     if(!q){
    //         res.send("Nothing Searched");
    //     }else{
    //         let code = `<h1>Search result for query : ${q}</h1>`
    //         res.send(code);
    //     }
       
    // });
    





