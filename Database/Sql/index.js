const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methdOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methdOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "basics",
  password: "Harsh@9050",
});
let getRandomUser = () => {
  return [
    uuidv4(),
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM usc`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      console.log(count);
      res.render("home.ejs", { count });
    });
  } catch (err) {
    res.render("error.ejs");
  }
});
//search
app.get("/user", (req, res) => {
  let searchTerm = req.query.search || "";
  let q = `SELECT * FROM usc`;
  let countQuery = `SELECT count(*) FROM usc`;

  if (searchTerm) {
    q = `SELECT * FROM usc WHERE id LIKE '%${searchTerm}%' OR username LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%'`;
  }

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      connection.query(countQuery, (err, countResult) => {
        if (err) throw err;

        let data = result;
        let count = countResult[0]["count(*)"];

        if (data.length === 0) {
          // No users found, render error.ejs
          res.render("error.ejs", { count });
        } else {
          // Users found, render users.ejs
          res.render("users.ejs", { data, count, searchTerm });
        }
      });
    });
  } catch (err) {
    res.send("some error occurred");
  }
});

// or
//   app.get("/user", (req, res) => {
//     let q = `SELECT * FROM usc`;
//     try {
//       connection.query(q, (err, result) => {
//         if (err) throw err;
//         let data = result;
//         res.render("users.ejs", { data });
//       });
//     } catch (err) {
//       res.send("some error occurred");
//     }
//   });

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM usc WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { username, password } = req.body;
  console.log(username);
  let q = `SELECT * FROM usc WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `UPDATE usc SET username='${username}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("updated!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});
//create
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  //Query to Insert New User
  let q = `INSERT INTO usc (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});
//delete
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM usc WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM usc WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.render("error.ejs");
      } else {
        let q2 = `DELETE FROM usc WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

let port = 8080;
app.listen(port, (req, res) => {
  console.log(`app is listening port no is ${port}`);
});

// let st = "SHOW TABLES";
// let iq = "INSERT INTO usc(id, username, email, password) VALUES (?, ?, ?, ?)";
// let info = ["111", "Harsh", "h@gmail.com", "1234"];
// // insert many array
// let iqs = "INSERT INTO usc(id, username, email, password) VALUES ?";
// let infos = [
//   ["112", "aa", "aa@gmail.com", "5678"],
//   ["113", "rti", "rti@gmail.com", "0101"],
// ];
// // insert in bulk
// let RandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };
// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(RandomUser());
// }

// try {
//   // Check existing tables
//   connection.query(st, (err, result) => {
//     if (err) throw err;
//     console.log(result);

//     // Perform the insert query with single values
//     connection.query(iq, info, (err, result) => {
//       if (err) throw err;
//       console.log(result);

//       // Insert multiple values with prepared statement
//       connection.query(iqs, [infos], (err, result) => {
//         if (err) throw err;
//         console.log(result);

//         // Insert data generated in bulk
//         let quer = "INSERT INTO usc(id, username, email, password) VALUES ?";
//         connection.query(quer, [data], (err, result) => {
//           if (err) throw err;
//           console.log(result);

//           connection.end(); // Close the connection after the insert
//         });
//       });
//     });
//   });
// } catch (err) {
//   console.log(err);
// }

//or

// // Keep getRandom as returning an object
// let getRandom = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };
// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

// try {
//   let q = "INSERT INTO user (id, username, email, password) VALUES ?";

//   // Single user and multiple users combined into one array
//   let user = ["111", "Harsh", "h@gmail.com", "1234"];
//   let userss = [
//     ["118", "aar", "aar@gmail.com", "56789"],
//     ["1134", "arti", "arti@gmail.com", "00101"],
//   ];

//   let data = [];
//   for (let i = 0; i <= 20; i++) {
//     let randomUser = getRandom(); // Get the random user object
//     // Convert the object into an array of values
//     data.push([
//       randomUser.id,
//       randomUser.username,
//       randomUser.email,
//       randomUser.password,
//     ]);
//   }
//   let datac = [];
//   for (let i = 0; i <= 20; i++) {
//     data.push(getRandomUser());
//   }
//   // Combine both user and userss into one array
//   let allUsers = [user, ...userss, ...data, ...datac];
//connection.query(q, [allUsers], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.error(err);
// } finally {
//   connection.end();
// }

// let getRandomUserS = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };

// console.log(getRandomUserS());
