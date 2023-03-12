const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "PixelBattle",
    password: "",
    port: "3306"
});


class DataBaseControlle {

    async register(user, password, sessionId) {

        try {
            var sql = `INSERT INTO \`users\`( \`session\`, \`login\`, \`pasworld\` ) VALUES ('${sessionId}','${user}','${password}')`
            connection.query(sql, function(err, results) {
                if (err) { console.log(err); return false } else {
                    if (results[0] != undefined) return true;
                    else return false
                }
            })
        } catch (err) {

            console.log(err)
            return false
        }

    }
    async SessionExit(ses) {
        try {
            var sql = `UPDATE \`users\` SET session='0' WHERE  session=\"${ses}\"`
            connection.query(sql, function(err, results) {
                if (err) { console.log(err); return false } else {
                    if (results[0] != undefined) return true;
                    else return false
                }

            })
        } catch (err) {
            console.log(err)
            return false
        }

    }

    async login(user, password, sessionId) {
        try {
            var sql = `SELECT * from \`users\` WHERE login = \"${user}\" and pasworld=\"${password}\"; `
            connection.query(sql, function(err, results) {
                if (err) { console.log(err); return false } else {
                    if (results[0] != undefined) {
                        sql = `UPDATE \`users\` SET \`session\`='${sessionId}' WHERE id=${results[0].id}`
                        connection.query(sql, function(err, results) {
                            if (err) return false
                        })
                        return true

                    } else return false
                }

            })
        } catch (err) {
            console.log(err)
            return false
        }
    }
    async authentication(ses) {

        try {
            const sql = `SELECT * from \`users\` WHERE session = \"${ses}\"; `
            connection.query(sql, function(err, results) {
                if (err) { console.log(err); return false } else {
                    if (results[0] != undefined) return true;
                    else return false
                }

            })
        } catch (err) {
            console.log(err)
            return false
        }
    }

}

const controller = new DataBaseControlle()

module.exports = { connection, controller }