const mongoose = require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}
main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{console.log(err)});
const Notebook = new mongoose.Schema({
   title:{
    type:String,
    required:true,
    maxLength:20,   //it means title cant be null
   },author:{
    type:String,
   },
   price:{
    type:Number,
    min:[1,"price is too low"],
   },
   discount:{
    type:Number,
    default:0,
   },
   genre:[String],
   category:{
    type:String,
    enum:["comics","fiction"], //it check value if it is in array than valid otherwise show invalid

   },
});
//for making collection
const Book  = mongoose.model("Book",Notebook);

const book1 = new Book(
    {
        title:"Failure",
        author:"Harsh",
        price: -500,  //or "299" we can write this also because it pars into int but we cant werite "abcd"
        category:"fiction",
        genre:["SpiderMan","BatMan","AntMan"],
    }
);
// book1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
// Book.findByIdAndUpdate("65ae116d042b2f164286f8e5",{price:300})
// .then((res)=>{"updated price : ",console.log(res)})
// .catch((err)=>{console.log(err)});
//validation is valid when we insert if we want our validation apply when we update so we write 
Book.findByIdAndUpdate("65ae116d042b2f164286f8e5",{price:-300},{runValidators:true})
.then((res)=>{"updated price : ",console.log(res)})
//for print error we write console.log(err.errors.category.properties.message)
.catch((err)=>{console.log(err.errors.price.properties.message)});