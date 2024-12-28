const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Connection successful");
  } catch (e) {
    console.error("Connection failed:", e.message);
  }
}

main();
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 10,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  marks: {
    type: Number,
    default: 0,
  },
  genre: [String],
  category: {
    type: String,
    enum: ["Good", "Nice", "Excellent"],
  },
  salary: {
    type: Number,
    min: [0, "Please Enter correct Amount"],
  },
});
const Userprofile = mongoose.model("Userprofile", userSchema);
// const user1 = new Userprofile({
//   name: "John",
//   email: "h@gmail.com",
//   age: 19,
// });
// user1.save().then((res) => {
//     console.log(res);
//   });
// Userprofile.insertMany([
//   {
//     name: "Doe",
//     email: "d@gmail.com",
//     age: 20,
//   },
//   {
//     name: "Doby",
//     email: "doby@gmail.com",
//     age: 18,
//   },
//   {
//     name: "Doeb",
//     email: "db@gmail.com",
//     age: 28,
//   },
// ]).then((res) => {
//   console.log(res);
// });
let allusers = [
  {
    name: "boeb",
    email: "bb@gmail.com",
    age: 38,
    category: "Good",
    genre: ["Drama", "Violence", "Honest"],
    salary: 50000,
  },
  {
    name: "voeb",
    email: "voeb@gmail.com",
    age: 25,
  },
  {
    name: "Doen",
    email: "dobb@gmail.com",
    age: 89,
  },
  {
    name: "Doeberr",
    email: "dbdscd@gmail.com",
    age: 68,
  },
];
// Userprofile.insertMany(allusers).then((res) => {
//   console.log(res);
// });
// Userprofile.findOne({ name: "voeb" }).then((res) => {
//   console.log(res);
// });
// Userprofile.findOne({ _id: "676f6abf0fa513ea776cbc9d" }).then((res) => {
//   console.log(res);
// });
// Userprofile.updateOne({ name: "John" }, { name: "Harsh Sharma" }).then(
//   (res) => {
//     console.log(res);
//   }
// Userprofile.updateMany({ age: { $gt: 20 } }, { age: 78 }).then((res) => {
//   console.log(res);
// });
// );
// Userprofile.findOneAndUpdate(
//   { name: "voeb" },
//   { name: "Harsh" },
//   { new: true }
// ).then((res) => {
//   console.log(res);
// });
// Userprofile.findByIdAndUpdate(
//   "676f67c541db305199529b51",
//   { name: "Harsh Sharma" },
//   { new: true }
// ).then((res) => {
//   console.log(res);
// });

// Userprofile.deleteOne({ name: "Harsh Sharma" }).then((res) => {
//   console.log(res);
// });

// Userprofile.deleteMany({ age: { $gt: 47 } }).then((res) => {
//   console.log(res);
// });
// Userprofile.findByIdAndDelete("676f6abf0fa513ea776cbc9b").then((res) => {
//   console.log(res);
// });
// Userprofile.deleteMany({}).then((res) => {
//   console.log(res);
// });
Userprofile.findByIdAndUpdate(
  "676f82369a543625a6288706",
  {
    name: "Harsh Sharma",
    genre: ["Nice"],
    salary: 100,
  },
  {
    runValidators: true,
    new: true,
  }
)
  .then((res) => {
    if (res) {
      console.log("Updated document:", res);
    } else {
      console.log("Document not found.");
    }
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });

// Userprofile.find()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.errors.salary.properties);
//   });
