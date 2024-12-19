const express = require("express");
const  app = express();
const path = require("path");  //for accessing path
let port = 8080;
app.set("view engine","ejs");   //for set views folder
//app.use(express.static("public"));  //only access from ejs dir
// app.use(express.static(path.join(__dirname,"public"));  //for accessing anywhere in directory
app.use(express.static(path.join(__dirname,"/public/css")));  
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("views", path.join(__dirname,"/views")); //for accessing views folder from anywher directory
app.get("/roll", (req,res)=>{
   // res.render("home.ejs");
   let diceVal = Math.floor(Math.random()*6)+1;
    //we can write {diceVal} or {diceVal:diceVal} or {num : diceVal}
    res.render("rolldice.ejs",{diceVal});
});
//instagram.ejs basic
// app.get("/ig/:user", (req,res)=>{
//     const followers = ["Subham","Chirag","Vipul"];
//     let {user} = req.params;
//     console.log(req.params);
//     res.render("intagram.ejs",{user,followers});
  
// });
app.get("/ig/:username",(req,res)=>{
  let {username} = req.params;
  const  instadata = require("./data.json");
    console.log(instadata);
    const data = instadata[username];
    console.log(data);
    if(data){
      res.render("intagram.ejs",{data});
    }else{
      res.render("error.ejs");
    }
 });
 //resume

 app.get("/resume",(req,res)=>{
  res.render("resume.ejs");
 });
  //we use middleware for accesing all get & post request
  app.use(express.urlencoded({extended:true}));
  //for accesing json data we use middleware also
  app.use(express.json());
 app.get("/register",(req,res)=>{
   console.log(req.query);
   let {user,password} = req.query;
  res.send(`Standard GET response Welcome ${user} `);
 });

 app.post("/register",(req,res)=>{
  console.log(req.body);
  let {user,password} = req.body;
  res.send(`Standard Post response Welcome ${user}`);
 });

app.listen(port,(req,res)=>{
    console.log(`app listening port no. is ${port}`);
});

