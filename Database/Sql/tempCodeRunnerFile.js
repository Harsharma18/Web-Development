
let st = "SHOW TABLES";
let iq = "INSERT INTO usc(id, username, email, password) VALUES (?, ?, ?, ?)";
let info = ["111", "Harsh", "h@gmail.com", "1234"];
// insert many array
let iqs = "INSERT INTO usc(id, username, email, password) VALUES ?";
let infos = [
    ["112", "aa", "aa@gmail.com", "5678"],
    ["113", "rti", "rti@gmail.com", "0101"],
];
// insert in bulk
let RandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};
let data = [];
for (let i = 1; i <=100; i++) {
    data.push(RandomUser());
}

try {
    // Check existing tables
    connection.query(st, (err, result) => {
        if (err) throw err;
        console.log(result);

        // Perform the insert query with single values
        connection.query(iq, info, (err, result) => {
            if (err) throw err;
            console.log(result);

            // Insert multiple values with prepared statement
            connection.query(iqs, [infos], (err, result) => {
                if (err) throw err;
                console.log(result);

                // Insert data generated in bulk
                let quer = "INSERT INTO usc(id, username, email, password) VALUES ?";
                connection.query(quer, [data], (err, result) => {
                    if (err) throw err;
                    console.log(result);

                    connection.end(); // Close the connection after the insert
                });
            });
        });
    });
} catch (err) {
    console.log(err);
}

let getRandomUserS = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

console.log(getRandomUserS());
