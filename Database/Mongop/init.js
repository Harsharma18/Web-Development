const mongoose = require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main().then(()=>{
    console.log("connection succesful");
});
const Chat = require("./models/chat.js");
let allchats = [
    {
        from: "Harsh",
        to: "Aarti",
        msg: "Hi Aarti, MERN role? Refer? Thanks!",
        Created_at: new Date(),
    },
    {
        from: "Aarti",
        to: "Harsh",
        msg: "Harsh, roles? Happy to refer. Let me know.",
        Created_at: new Date(),
    },
    {
        from: "John",
        to: "Emily",
        msg: "Hi Emily! Java DSA openings? Refer? Thanks!",
        Created_at: new Date(),
    },
    {
        from: "Emily",
        to: "John",
        msg: "John, sure! Checking. Update soon.",
        Created_at: new Date(),
    },
    {
        from: "Alice",
        to: "Bob",
        msg: "Bob, XYZ Corp openings? Refer? Thanks!",
        Created_at: new Date(),
    },
    {
        from: "Bob",
        to: "Alice",
        msg: "Alice, checking. Update shortly.",
        Created_at: new Date(),
    }
];
Chat.insertMany(allchats);
Chat.find({}).then((res)=>{console.log(res)});

