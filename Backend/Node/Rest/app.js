const express = require("express");
const app = express();
let port = 3000;
//for access path of views and public
const path = require("path");
//for access id
const { v4: uuidv4 } = require('uuid');
//for accescess patch request we use method override 
const methodOverride = require('method-override');
app.use(methodOverride('_method'))

app.use(express.urlencoded(({extended:true})));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
let posts = [
    {
       // id:"a",
       id : uuidv4(),
        "user": "Harsharma",
        "message": "Just aced my FAANG interview with a passion for coding! 🚀 Master Java, nail DSA on LeetCode and HackerRank, excel in MERN stack - MongoDB, Express.js, Node.js, React.js. Hard work pays off! #CodePassion #FAANGSuccess"
        },
        
        {
          //  id:"b",
          id:uuidv4(),
        "user": "Navneet",
        "message": "Cracking FAANG requires dedication! 💡 Navneet Sharma here, and here's how I conquered it: Embrace hard work - late nights, early mornings. Master Java for FAANG's tech stack versatility. Strategic DSA Prep - think critically, solve efficiently. Excel in MERN stack, showcase skills. #HardWorkPaysOff #FAANGDreams"
        },
        
        {
            //id:"c",
            id:uuidv4(),
        "user": "JavaJuggler",
        "message": "Hey coders! 💻 Ready to conquer LeetCode? Daily Java Challenges for a solid foundation. Master Data Structures - arrays, linked lists, trees, hash tables. Tackle algorithmic challenges, optimize solutions. Participate in LeetCode contests weekly. Stay motivated! Your success is a journey. 💪 #JavaCoders #LeetCodeJourney"
        },
        
        {
           // id:"d",
            id:uuidv4(),
        "user": "CodeMotivator",
        "message": "🔥 Feeling the burn to crack DSA with Java on LeetCode? Let's fuel that fire! Structured practice sessions - consistency is key! Track progress, celebrate milestones. Community engagement - join coding communities, learn from others. Mindset matters - embrace challenges, stay positive and resilient. Your journey to mastery is as important as the destination. Keep coding! 💻 #CodeMotivation #LeetCodeMastery"
        },

  ];
  //index route
app.get("/posts",(req,res)=>{
    console.log("working");
   res.render("index.ejs",{posts});
});
//create & New Route 
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
//send route to main page posts
app.post("/posts", (req, res) => {
    let { user, message } = req.body;
    console.log(req.body);
    //for accesing id
    let id = uuidv4();
    posts.push({ id,user, message });
   // res.send("Post Request Working");
   res.redirect("/posts");
});

//show routes 
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p)=>id ===p.id);
    console.log(post);
   // res.send("Request is working");
   if(!post){
    res.render("error.ejs");
   }else{
    res.render("show.ejs",{post});
   }

});
 //update route for specific update we use patch request and complete update we use put request
 app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newmsg = req.body.message;
    console.log(req.body); // Log the entire body to see what is received
    let post = posts.find((p) => id === p.id);
    post.message = newmsg;
    console.log(post);
    res.redirect("/posts");
    //res.send("Patch Request Working");
});
app.get("/posts/:id/edit",(req,res)=>{
let {id} = req.params;
let post = posts.find((p)=>id===p.id);
if (!post) {
    res.render("error.ejs");
} else {
    res.render("edit.ejs", { post }); 
}
});
//Destroy Route
app.delete("/posts/:id",(req,res)=>{
    let {id}= req.params;
    posts=posts.filter((p)=>id!=p.id);
    //res.render("delete success");
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log(`app is listening port no. is ${port}`);
})