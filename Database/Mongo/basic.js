const mongoose = require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
main().then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
});
const userSchema = new mongoose.Schema({
    name: String,
    marks:Number,
    city:String,
})
//for making collection 
const User = mongoose.model("User",userSchema);
const Prod = mongoose.model("Prod",userSchema);
const user1 = new User(
    {name:"Harsh",
    marks:94,
    city:"Bhiwani",}
);
user1.save().then((res)=>{
    console.log("marks of user1",res);
}).catch((err)=>{
    console.log(err);
});
const user2 = new User(
    {name:"Aarti",
    marks:75,
    city:"ch.Dadri"},
);
user2.save().then((res)=>{
    console.log("marks of user2",res);
}).catch((err)=>{
    console.log(err);
});
User.insertMany(
    [
        {name:"Shubham",marks:86,city:"delhi"},
        {name:"Chirag",marks:88,city:"indore"},
        {name:"vipul",marks:75,city:"new delhi"},
        {name: "arsh",marks:44,city:"gurgaon"},

    ]
 );
// ).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(res);
// });
//find 
// User.find({}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }) ; 
// User.find({marks:{$lt:80}}).then((res)=>{
// console.log("marks is :",res);
// }).catch((err)=>{console.log(err)});
//update one 
User.updateOne({name:"Harsh"},{marks:62}).then((res)=>{
    console.log(res);
}).catch((err)=>{console.log(err)});
User.find({name:"Harsh"}).then((res)=>{
    console.log("update marks is :",res);
}).catch((err)=>{console.log(err)});
//updatmany
User.updateMany({marks:{$gt:90}},{marks:63}).then((res)=>{
    console.log(res);
}).catch((err)=>{console.log(err)});
User.find({name:"Harsh"}).then((res)=>{
    console.log("update marks is :",res);
}).catch((err)=>{console.log(err)});
//findone and update 
User.findOneAndUpdate({name:"Aarti"},{marks:98},{new:true}).then((res)=>{
    console.log("update marksof Aarti is :",res);
}).catch((err)=>{console.log(err)});

User.findByIdAndUpdate("65adfa0a6670ee7a7501a8ca",{city:"Ch. Dadri"},{new:true}).then((res)=>{
    console.log("update city is:",res);
}).catch((err)=>{console.log(err)});
//delete
User.deleteOne({name:"Aarti"}).then((res)=>{
    console.log("deleted",res);
}).catch((err)=>{console.log(err)});
User.deleteMany({marks:{$gt:80}}).then((res)=>{
    console.log("deleted all ",res);
}).catch((err)=>{console.log(err)});
User.findByIdAndDelete("65ae01b7364e2591890ec8bd").then((res)=>{
    console.log("delete arsh ",res);
});
User.findOneAndDelete({name:"Chirag"}).then((res)=>{
    console.log("del chirag",res);
});
User.deleteMany({marks:{$gt:60}}).then((res)=>{
    console.log("deleted all ",res);
}).catch((err)=>{console.log(err)});