const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "PixelBattle",
    password: "",
    port: "3306"
});

module.exports = connection
    // async function searchBase(user, password) {
    //     const sql = `SELECT * from \`users\` WHERE login = \"${user}\" and pasworld=\"${password}\"; `


//     connection.query(sql, function(err, results) {
//         if (err) {
//             console.log(err);
//             console.log("false")

//         } else {
//             console.log(results)

//             if (results[0] === undefined) {
//                 console.log("false")
//             } else {
//                 console.log("vse zaebis")
//             }


//         }

//     });
// }

// module.exports = { connection, searchBase }