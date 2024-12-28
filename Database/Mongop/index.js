const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main().then(()=>{
    console.log("connection Successful")
}).catch((err)=>{console.log(err)});
// let chat1 = new Chat({
//     from:"Harsh",
//     to:"Aarti",
//     msg:"Hi Harsh",
//     Created_at : new Date(),
// });
// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{console.log(err)}); we can multiple chat in differt file init.js
const path = require("path");
const methodOverride = require("method-override");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
//for accept post request
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
//index route 
app.get("/chats", async(req,res)=>{
    let chats = await  Chat.find();
   // console.log(chats);
   // res.send("request working");
    res.render("mwapp.ejs",{chats});
});
//New Route
app.get("/chats/new",(req,res)=>{
     res.render("new.ejs");
});
//Create Route
app.post("/chats",(req,res)=>{
    let {from,to ,msg} = req.body;
    let newChat = new Chat({
        from:from,
        msg:msg,
        to:to,
        Created_at:new Date(),
    });
    console.log(newChat);
    newChat.save().then((res)=>{console.log("chat was saved",res)})
    res.redirect("/chats");
});
//Edit Route 
// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

//Update Route 
app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params; 
    let{msg:newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(
        id,{msg:newMsg},{runValidators:true,new:true}
    );
     console.log("updated Chat is ",updatedChat);
    res.redirect("/chats");

});
//Delete Route 
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id); 
    console.log("ch is deleted :" ,deletedChat);
    res.redirect("/chats");

});

app.get("/",(req,res)=>{
   res.send("request working");
})

app.listen(8080,()=>{
    console.log("app is listenning port");
});
